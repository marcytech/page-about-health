import { html, css, createState } from "iares";
import { FamImage, FamTitle } from "fam-code-ui";

type Props = {
  title: string;
  text:  string;
  image: string;
  type:  string;
}

type Params = {
  props: Props;
  state: State;
}

type State = {
  size: string;
}


const template = ({props, state}:Params) => html`
<div class="wrap-ctx">
  <div class="image-ctx">
    <${FamImage} 
      src=${props.image} 
      fallbackSrc="/assets/images/404.png"
      alt=${props.image}
    />          
  </div> 
  <div class="text-ctx">
    <p>${props.text}</p>
  </div>     
  <div class="title-ctx">
    <${FamTitle}>
      <slot target="content">
        <${state.size}>${props.title}</${state.size}>
      </slot>
    </>        
  </div>
</div>
`;

export const UImageArticle = ({props}: Params) => {

  const store = createState<State>({
    size: props?.type || "h1",  
  })

  return {
    template,
    styles,
    store
  };
};

const styles = () => css`
  u-image-article,
  .wrap-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap; 
    justify-content: flex-start;
    align-items: center;
  }
  .text-ctx {
    display: flex;
    width: 100%;
    color:#ff794c;
    padding:1em;
  }
  .title-ctx {
    display: flex;
    width:100%;
    font-weight: bold;
  }

`;
