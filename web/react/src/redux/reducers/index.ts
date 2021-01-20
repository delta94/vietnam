import { combineReducers } from 'redux';

import themeReducer from './theme';

const reducers = combineReducers({ theme: themeReducer });

export default reducers;
