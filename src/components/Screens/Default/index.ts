import { html, css } from "iares";

export const template = () => html`
  <div>
      <h1>404</h1>
      <a href="#/">Voltar</a>
  </div>
`;

export const SDefault = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  s-default {
    display: flex;
    justify-content: center;
  }

  .wrap-ctx h1 {
    font-size: 6em;
    color: var(--black-light)
  }

  .wrap-ctx a {
    color: var(--green-bright)
  }
`;
