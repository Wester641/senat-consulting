import "./i18n";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import "./css/font-awesome.min.css";
import "./css/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

// Service worker enabled for faster loading and offline support
// This will cache assets after first visit for much faster subsequent loads
serviceWorker.register();
