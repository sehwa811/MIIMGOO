import { combineReducers } from 'redux';

import { ImageReducer } from './image-upload/ImageReducer';
import { HomeImgReducer } from './home-images/HomeImgReducer';
import { TagReducer } from './tags/TagReducer';
import { SearchTagReducer } from './searchTags/SearchTagReducer';

export const rootReducer = combineReducers({
    image: ImageReducer,
    tag: TagReducer,
    homeImage: HomeImgReducer,
    searchTags: SearchTagReducer,
})