import { component$, PropFunction, QwikMouseEvent } from "@builder.io/qwik";


import styles from "./banner.module.css";


export interface BannerProps {

  title: string;
  description: string;
  ctaTitle: string;

}

export type onClickEvent = (
  event: QwikMouseEvent<HTMLButtonElement, MouseEvent>,
  element: Element
) => void;

export default component$<BannerProps>(
  ({
    title = 'title Mock', 
    description = 'descirption mock', 
    ctaTitle='ctatitle'
  }) => {


  return (
    <div
      class={styles["counter-wrapper"]}
      style={{
        alignItems: "center",
        color: "rgb(255, 255, 255)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        paddingBottom: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px",
        textAlign: "center",
        "@media (max-width: 991px)": {
          display: "flex",
        },
        "@media (max-width: 640px)": {
          display: "flex",
        },
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        <h2>
          <i  data-testid={"banner-title"}> {title}</i>
        </h2>
      </h2>
      <p
        style={{
          fontSize: "20px",
          marginBottom: "20px",
        }}
        data-testid={"banner-description"}>
        {description}
      </p>
      <a
        style={{
          backgroundColor: "rgb(255, 66, 14)",
          borderRadius: "5px",
          borderTopLeftRadius: "5px",
          color: "rgb(255, 255, 255)",
          display: "inline-block",
          fontSize: "18px",
          paddingBottom: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "10px",
          textDecoration: "none",
          transition: "background-color 0.3s ease 0s",
          transitionDuration: "0.3s",
          transitionProperty: "background-color",
        }}
        data-testid={"banner-ctaTitle"}>
        {ctaTitle}
      </a>
    </div>
  );
});
