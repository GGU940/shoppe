import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Provider로 store를 애플리케이션에 제공. */}
      <BrowserRouter>
        {/* 이 하위에선 browserRouter 적용 가능 */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
