import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./containers/App";

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById("root")
);
