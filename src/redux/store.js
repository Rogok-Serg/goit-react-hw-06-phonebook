import { devToolsEnhancer } from '@redux-devtools/extension';
import { phoneBookReducer } from './phoneBookReducer';
import { contactsStorageReducer } from './contactsStorageReducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
  contactsStorage: contactsStorageReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
