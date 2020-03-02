import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModalProvider } from "react-modal-hook";

import { Provider } from "react-redux";
import { store } from "./redux/Store";

ReactDOM.render(
  <Provider store={store}>
    <ModalProvider>
      <App />
    </ModalProvider>
  </Provider>,
  document.getElementById("root")
);
