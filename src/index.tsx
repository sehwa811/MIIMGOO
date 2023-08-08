import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/store";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 24.375rem;
  max-width: 24.375rem;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  background: linear-gradient(180deg, #0500FF 0%, rgba(196, 196, 196, 0.00) 100%);
  background-repeat: no-repeat;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <App />
        </Wrapper>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
