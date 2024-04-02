import { FamButton, FamTitle } from "fam-code-ui";
import { html, css, createState } from "iares";

type AlignText = "left"|"center"|"right";

type Props = {
  title:string;
  text?: string;
  type?: string;
  align?: AlignText;
  color?: string;
}

type Params = {
  props: Props;
  state: State;
}

type State = {
  size: string;
  align: AlignText;
}

const template = ({props, state}:Params) => html`
  <div class="wrap-ctx">
    <div class="wrap-title-ctx">
      <div class="title-ctx">
        <${FamTitle}>
          <slot target="content">
            <${state.size}>${props.title}</${state.size}>
          </slot>
        </>    
      </div>
      <div class="text-ctx align-${state.align}">
        <p>${props.text}</p>
      </div>    
    </div>
    <div class="button-ctx">
      <slot id="button"></slot>  
    </div>
  </div>
`;

export const UTitle = ({props}: Pick<Params, "props"> ) => {
  // console.log(props)
  const store = createState<State>({
    size: props?.type || "h1",  
    align: props?.align || "left",
  })

  return {
    template,
    styles,
    props,
    store
  };
};

const styles = ({props}: Pick<Params, "props">) => css`
  u-title,
  .wrap-ctx,
  .title-ctx,
  .text-ctx  {
    display: flex;
    width:100%;
    flex-wrap: wrap;
  }

  .wrap-title-ctx {
    color:#fff !important;
  }

  .title-ctx {
    line-height:2.6em !important;
  } 

  .title-ctx > fam-title {
    justify-content: center;
  }
  
  .title-ctx > fam-title h1{
    padding:0 !important;
  }

  .title-ctx > fam-title h2{
    padding:0 !important;
    color:${props.color};
  } 
  
    .text-ctx.align-left {
    text-align:left;
  }
  
  .text-ctx.align-center {
    text-align:center;
  }

  .text-ctx.align-right {
    text-align:right;
  }
  
  .text-ctx {
    color:#000;
    padding:1em 0;
    line-height:1.5em;
    text-align:left;
  }
  
  .button-ctx {
    padding: 2em;
  }

  .button-ctx  i{
    padding:1em;
    color:#fff;
  }
`;
