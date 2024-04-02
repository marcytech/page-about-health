import { html, css, createState } from "iares";
import { debounce } from "@/utils/debounce";
import { InputState, Actions } from "./types";
import { createActions } from "./actions";

type InputEvent = {
  (args: Event): void;
};

type Props = {
  id: string;
  value: string;
  label: string;
  handler: Function;
}

type Params = {
  props: Props,
  actions: Actions,
  state: InputState
}

const template = ({ props, actions, state }: Params) => html`
  <label class="label-ctx">
    <input 
      type="text" 
      id=${props.id}
      value=${actions.getText(props?.value || state?.value)}
      onKeyUp=${debounce(
        (event) => {
          const target = event.target as HTMLInputElement
          actions.updateValue({
            value: target.value,
            handler:actions.getHandler(props?.handler)
          })
        },
        1500
      )}
    />
    <span>${actions.getText(props?.label)}</span>
  </label>
`;

export const UInput = () => {

  const store = createState<InputState>({
    value: ''
  })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  const actions = createActions(store) 

  return {
    template,
    styles,
    actions,
    store
  };
};

const styles = () => css`
  u-input,
  .wrap-ctx,
  .label-ctx,
  .label-ctx > input,
  .label-ctx > span {
    display: flex;
    width:100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  
  .label-ctx {
    position: relative;
  }

  .label-ctx > input {
    border:0;
    padding:1em 0;
    font-size: .875em;
    border-bottom: 2px solid #fff;
    background: none;
    outline: none;
  }

  .label-ctx >  span {
    color:#f9f9f9;
    position: absolute;
    transition:0.5s ease-in-out;
    font-size: 0.875em;
    top:50%;
    left:0;
    transform:translateY(-50%);
  }

  .label-ctx > input:focus + span,
  .label-ctx > input:not([value=""]) + span {
    font-size: 0.6em;
    color:#f9f9f9;
    top:0;
    left:0;
  }

  



`;
