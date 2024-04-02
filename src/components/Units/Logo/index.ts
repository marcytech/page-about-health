import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <h1>
      Whiter
      <span>.</span>
    </h1>    
  </div>
`;

export const ULogo = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  u-logo,
  .wrap-ctx {
    display: flex;
    width:100%;
    font-size: 1.1em;
    padding: 1em;
    font-weight: bold;
    color: #213053;
  }
  .wrap-ctx span {
    color: #2d947a;
  }
`;
