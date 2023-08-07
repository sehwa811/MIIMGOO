import { ACTION } from "./ImageTypes";

export interface imageContext {
  imageTitle: any,
  formData: any
}

export interface actionType {
  type: string;
  payload: string;
}

const INITIAL_VALUE: imageContext = {
  imageTitle: null,
  formData: new FormData(),
};

export const ImageReducer = (
  state = INITIAL_VALUE,
  action: actionType
): imageContext => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SET_IMAGE_TITLE:
      console.log(payload)
      return { ...state, imageTitle: payload };
    case ACTION.SET_FORM_DATA:
      return { ...state, formData: payload};
    default:
      return state;
  }
};
