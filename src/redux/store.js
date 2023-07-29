// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { phoneBookReducer } from './phoneBookReducer';
import { contactsStorageReducer } from './contactsStorageReducer';

const contactsStoragePersistConfig = {
  key: 'contactsStorage',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    contactsStorage: persistReducer(
      contactsStoragePersistConfig,
      contactsStorageReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// const rootReducer = combineReducers({
//   phoneBook: phoneBookReducer,
//   contactsStorage: contactsStorageReducer,
// });
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
