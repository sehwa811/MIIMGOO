import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  background: linear-gradient(180deg, #0500ff 0%, rgba(196, 196, 196, 0) 100%);
  background-repeat: no-repeat;
`;

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Wrapper>
            <App />
          </Wrapper>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
