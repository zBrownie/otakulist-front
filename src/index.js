import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModalProvider } from "react-modal-hook";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
