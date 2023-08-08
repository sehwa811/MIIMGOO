import { ACTION } from "./ImageTypes";
import { API_HOST } from "../../utils/API";

import axios from "axios";
import { File } from "aws-sdk/clients/iotsitewise";

export interface imageContext {
  imageTitle: any,
  imageFile: File | null;
  image: any;
}

export interface actionType {
  type: string;
  payload: File | string;
}

const INITIAL_VALUE: imageContext = {
  imageTitle: null,
  imageFile: null,
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
    case ACTION.SET_IMAGE_FILE:
      return { ...state };
    case ACTION.SET_IMAGE:
      return {...state, image: payload};
    default:
      return state;
  }
};


