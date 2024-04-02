export type InputState = {
  value: string
}

export type UpdateValue = (params: UpdateValueParams) => void


export type UpdateValueParams = {
  value: string;
  handler: Function;
} 

export type Actions = {
  getText: Function;
  getHandler: Function;
  updateValue: UpdateValue;
}

