import { HOME_IMAGE_ACTION } from "./HomeImgTypes"

interface homeImageReducerProps {
    imageArray: any[]
}

export interface actionType {
    type: string;
    payload: any;
  }

  const INITIAL_STATE:homeImageReducerProps = {
    imageArray: []
  }

export const HomeImgReducer = (state = INITIAL_STATE, action:actionType) => {
    const { type, payload } = action;
    switch (type) {
      
        case HOME_IMAGE_ACTION.SET_HOME_IMAGE:
            return { ...payload }
        default:
            return state;
    }
}