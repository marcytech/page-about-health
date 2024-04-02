import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
   <slot id="content"></slot>
  </div>
`;

export const UContainer = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  u-container,
  .wrap-ctx {
    display: flex;
    width:100%;
    justify-content: flex-start;
    align-items: flex-start;
  }
  u-container {
    width:1180px;
    margin: 0 auto;
    padding: 0 1em;
  }
`;
