import { configureStore, combineReducers } from "@reduxjs/toolkit";
import itemReducer from "./reducers/itemReducer";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['item'] // only item reducer will get persist
}

const rootReducer = combineReducers({
    item: itemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


// configure main redux store
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistedStore = persistStore(store);
