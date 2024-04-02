import { FamTitle } from "fam-code-ui";
import { html, css } from "iares";

type Props = {
  title:string;
  text: string;
  number: string;
}

type Params = {
  props: Props
}

const template = ({props}:Params) => html`
  <div class="wrap-ctx">
    <div class="number-ctx">${props.number}</div>
    <div class="article-ctx">
      <div class="title-ctx">
        <${FamTitle}>
          <slot target="content">
            <h2>${props.title}</h2>
          </slot>
        </>    
      </div>
      <div class="text-ctx">
        <p>${props.text}</p>
      </div>    
    </div>
  </div>
`;

export const FEnumerableTitle = () => {
  return { 
    template,
    styles,
  };
};

const styles = () => css`
  f-enumerable-title,
  .article-ctx,
  .number-ctx,
  .title-ctx,
  .text-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap;
  }
  .wrap-ctx {
    display: grid;
    grid-template-columns: 45px 1fr;
    gap:1em;

  }

  .title-ctx h2{
    padding:0 0 1em 0;
  }

  .text-ctx {
    padding:0 0 2em 0;
  }

 .number-ctx {
  width:45px;
  height:45px;
  border-radius:50px;
  justify-content: center;
  align-items: center;
  background: #2d947a;
  color:#fff;
 }

  

`;
