import { TState } from "iares"
import { InputState, UpdateValueParams,  } from "./types"

export const createActions = (state: TState<InputState>) => {
  const getText = (text:string) => {
    if(text) return text
    return ''
  }

  const getHandler = (handler: Function) => {
    if(handler) return handler
    return () => {}
  }

  const updateValue = ({value, handler}:UpdateValueParams) => {
    handler({ value, state })
  }

  return {
    getText,
    getHandler,
    updateValue
  }
}