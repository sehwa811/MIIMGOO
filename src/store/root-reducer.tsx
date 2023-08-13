import { combineReducers } from 'redux';

import { ImageReducer } from './image-upload/ImageReducer';
import { HomeImgReducer } from './home-images/HomeImgReducer';
import { TagReducer } from './tags/TagReducer';
import { SearchTagReducer } from './searchTags/SearchTagReducer';
import { UserInfoReducer } from './UserInfoReducer';
import { KakaoEmailCheckReducer } from './KakaoEmailCheck';

export const rootReducer = combineReducers({
    image: ImageReducer,
    tag: TagReducer,
    homeImage: HomeImgReducer,
    searchTags: SearchTagReducer,
    user: UserInfoReducer,
    emailCheck: KakaoEmailCheckReducer,
})