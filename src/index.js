import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { setAuthorize } from "./utils/setAuthorize";

setAuthorize();
ReactDOM.render(<App />, document.querySelector("#root"));
