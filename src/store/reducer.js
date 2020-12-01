import { combineReducers } from 'redux';

import shop from './shop/reducer';
import user from './user/reducer';

export default combineReducers({shop, user});