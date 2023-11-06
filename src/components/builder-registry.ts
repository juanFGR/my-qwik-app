import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Counter from "./custom/counter/counter";
import Banner from "./custom/banner/banner";
import Hero from "./custom/hero/hero";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
      {
        component: Hero,
        name: 'Generic - Hero Basic',
        inputs: [
          {
            name: 'title',
            type: 'string',
            defaultValue: '',
          },
        ],
      },
      {
        component: Counter,
        name: 'Generic - Counter',
        inputs: [
          {
            name: 'title',
            type: 'string',
            defaultValue: '',
          },
        ],
      },
      {
        component: Banner,
        name: 'Generic - Banner',
        inputs: [
          {
            name: 'title',
            type: 'string',
            required: true,
          },
          {
            name: 'description',
            type: 'string'
          },
          {
            name: 'ctaTitle',
            type: 'string'
          },
        ],
      }
    ];
