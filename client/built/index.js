"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <App_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>, document.getElementById("root"));
