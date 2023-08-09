import { combineReducers } from 'redux';

import { TagReducer } from './tags/TagReducer';
import { ImageReducer } from './image-upload/ImageReducer';
import { HomeImgReducer } from './home-images/HomeImgReducer';

export const rootReducer = combineReducers({
    image: ImageReducer,
    tag: TagReducer,
    homeImage: HomeImgReducer,
})