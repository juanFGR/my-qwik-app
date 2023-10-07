import { component$, useSignal, $, PropFunction, QwikMouseEvent } from "@builder.io/qwik";


import styles from "./counter.module.css";
import Gauge from "../../starter/gauge";


export interface CounterProps {
  /**
   * Is this the principal call to action on the page?
   */
  initialStep?: number;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick$?: PropFunction<onClickEvent> | undefined;
}

export type onClickEvent = (
  event: QwikMouseEvent<HTMLButtonElement, MouseEvent>,
  element: Element
) => void;

export default component$<CounterProps>(
  ({initialStep = 10} ) => {

  const count = useSignal(initialStep);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div class={styles["counter-wrapper"]}>
      <button
        class="button-dark button-small"
        data-testid={"decrease"}
        onClick$={() => setCount(count.value - 1)}
      >
        -
      </button>
      <Gauge value={count.value} />
      <button
        class="button-dark button-small"
        data-testid={"increase"}
        onClick$={() => setCount(count.value + 1)}
      >
        +
      </button>
    </div>
  );
}
);
