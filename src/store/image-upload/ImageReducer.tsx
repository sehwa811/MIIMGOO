import { ACTION } from "./ImageTypes";

export interface imageContext {
  imgObj: any,
  formData: any
}

export interface actionType {
  type: string;
  payload: string;
}

const INITIAL_VALUE: imageContext = {
  imgObj: null,
  formData: new FormData(),
};

export const ImageReducer = (
  state = INITIAL_VALUE,
  action: actionType
): imageContext => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SET_IMAGE_TITLE:
      return { ...state, imgObj: payload };
    case ACTION.SET_FORM_DATA:
      return { ...state, formData: payload};
    default:
      return state;
  }
};
