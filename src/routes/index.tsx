import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/custom/hero/hero";
export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: "Juan Gonzalez - Builder.io",
  meta: [
    {
      name: "Juan Gonzalez - Builder.io",
      content: "Juan Gonzalez - Builder.io",
    },
  ],
};
