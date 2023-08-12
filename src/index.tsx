import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/store";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 24.375rem;
  max-width: 24.375rem;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  background: linear-gradient(#0500ff 0%, rgba(137,135,234)30%, rgba(196, 196, 196, 0));
  background-repeat: no-repeat;
`;

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Wrapper>
            <App />
            <ReactQueryDevtools />
          </Wrapper>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
);

serviceWorkerRegistration.register();

reportWebVitals();
