import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { fetchOneEntry, Content } from '@builder.io/sdk-qwik';

import { CUSTOM_COMPONENTS } from "../../components/builder-registry";


// Enter your key here!
export const apiKey = import.meta.env.PUBLIC_BUILDER_API_KEY; // ggignore

export const useBuilderContentLoader = routeLoader$(async event => {
  const data = await fetchOneEntry({
    model: 'qwik-page',
    apiKey: apiKey,
    userAttributes: { urlPath: event.url.pathname },
    options: event.query,
  });

  if (!data) {
    throw event.error(404, 'page not found');

    // if you want to handle the 404 in the component, you can do this instead of throwing `event.error()`
    // event.status(404);
  }

  return data;
});

export default component$(() => {
  const content = useBuilderContentLoader();

  // if using `event.status(404)`, uncomment these lines:
  // if (content === null) {
  //   return <h1>Page not found</h1>;
  // }

  return (
    <Content
      model="qwik-page"
      content={content.value}
      apiKey={apiKey}
      customComponents={CUSTOM_COMPONENTS}
    />
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik 2',
};