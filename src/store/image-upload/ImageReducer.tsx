import { ACTION } from "./ImageTypes";

export interface imageContext {
  imgTitle: string | null;
}

export interface actionType {
  type: string;
  payload: string;
}

const INITIAL_VALUE: imageContext = {
  imgTitle: null,
};

export const ImageReducer = (
  state = INITIAL_VALUE,
  action: actionType
): imageContext => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case ACTION.SET_IMAGE_TITLE:
      return {...state, imgTitle: payload};
    default:
      return state;
  }
};
