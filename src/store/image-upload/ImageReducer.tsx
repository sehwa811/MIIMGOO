import { ACTION } from "./ImageTypes";
import { File } from "aws-sdk/clients/iotsitewise";

export interface imageContext {
  imageTitle: any,
  image: any;
}

export interface actionType {
  type: string;
  payload: any;
}

const INITIAL_VALUE: imageContext = {
  imageTitle: null,
  image:null,
};

export const ImageReducer = (
  state = INITIAL_VALUE,
  action: actionType
): imageContext => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SET_IMAGE_TITLE:
      return { ...state, imageTitle: payload };
    case ACTION.SET_IMAGE:
      return {...state, image: payload};
    default:
      return state;
  }
};


