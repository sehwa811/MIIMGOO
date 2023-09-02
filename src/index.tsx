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
  margin-bottom: 0;
  margin-top: 0;
  height: 100vh;
`;

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Wrapper className="outside-app">
            <App />
            <ReactQueryDevtools />
          </Wrapper>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
);

serviceWorkerRegistration.register();

reportWebVitals();
