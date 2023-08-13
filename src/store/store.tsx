import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReudcer = persistReducer(persistConfig, rootReducer);

const middleWares: any[] = [
  process.env.NODE_ENV === "development" && 
  logger,
  thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReudcer,
  undefined,
  composedEnhancers
);
//index.js의 Provider에 전달된 store prop

export const persistor = persistStore(store);
