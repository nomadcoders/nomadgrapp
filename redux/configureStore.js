import { applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user";
import photos from "./modules/photos";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage
};

const reducer = persistCombineReducers(persistConfig, {
  user,
  photos
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
