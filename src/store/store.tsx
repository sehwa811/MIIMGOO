import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReudcer = persistReducer(persistConfig, rootReducer);

const middleWares: any[] = [
  process.env.NODE_ENV === "development" && 
  logger,
  thunk,
  sagaMiddleware
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReudcer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);