import { combineReducers } from 'redux';

import { TagReducer } from './tags/TagReducer';
import { ImageReducer } from './image-upload/ImageReducer';

export const rootReducer = combineReducers({
    image: ImageReducer,
    tag: TagReducer,
})