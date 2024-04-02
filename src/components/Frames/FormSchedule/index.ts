import { html, css, TState, createState } from "iares";
import { UTitle, UInput } from "@/components/Units";


type SetInputParams = {
  value: string;
  state: TState<{value: string}>;
}

type Actions = {
  setInputFocus: (inputId: string) => void;
}

type Params = {
  actions: Actions
}

type Payload = {value: string}

const setName = ({value, state}: SetInputParams) => {
  state.setState({value})
  state.watchState((payload: Payload) => {
    setInputFocus('name', payload.value)
  })
}

const setEmail = ({value, state}: SetInputParams) => {
  state.setState({value})
  state.watchState((payload: Payload) => {
    setInputFocus('email', payload.value)
  })
}

const setDate = ({value, state}: SetInputParams) => {
  state.setState({value})
  state.watchState((payload: Payload) => {
    setInputFocus('date', payload.value)
  })
}

const setTime = ({value, state}: SetInputParams) => {
  state.setState({value})
  state.watchState((payload: Payload) => {
    setInputFocus('time', payload.value)
  })
}

const setInputFocus = (inputId: string, inputValue: string) => {
  const inputElement = document.querySelector(`#${inputId}`) as HTMLInputElement
  inputElement.focus()
  inputElement?.setSelectionRange(inputValue.length, inputValue.length)
}

const template = ({actions}: Params) => html`
  <div class="wrap-ctx" ctx="f-form-schedule">
    <div class="title-ctx">
      <${UTitle}
        color="#fff"
        type="h2"
        align="center"
        title="Schedule free appointment"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veniam?"
      />    
    </div>
    <div class="grid grid-cols-12">
      <div class="
        xxl-col-12
        xl-col-12
        lg-col-12
        sm-col-12
        xs-col-12
      ">
        <${UInput}
          id="name"
          value=""
          label="Your Name*"
          handler=${setName}
        />      
      </div>
      <div class="
        xxl-col-12
        xl-col-12
        lg-col-12
        sm-col-12
        xs-col-12
      ">
        <${UInput}
          id="email"
          value=""
          label="Your Email*"
          handler=${setEmail}
        />      
      </div>
      <div class="
        xxl-col-12
        xl-col-12
        lg-col-12
        sm-col-12
        xs-col-12
      ">
        <${UInput}
          id="date"
          value=""
          label="Data*"
          handler=${setDate}
        />      
      </div>
      <div class="
        xxl-col-12
        xl-col-12
        lg-col-12
        sm-col-12
        xs-col-12
      ">
        <${UInput}
          id="time"
          value=""
          label="Hora*"
          handler=${setTime}
        />      
      </div>
    </div>
  </div>
`;

export const FFormSchedule = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-form-schedule,
  .wrap-ctx {
    display: flex;
    width:100%;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
  }
  
  .title-ctx {
    padding:0;
  }
  .title-ctx {
    display:flex;
    width:100%;
    max-width:420px;
  }

`;
