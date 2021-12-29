"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// We import bootstrap to make our application look better.
require("bootstrap/dist/css/bootstrap.css");
// We import NavLink to utilize the react router.
var react_router_dom_1 = require("react-router-dom");
// Here, we display our Navbar
var Navbar = function () {
    return (<div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <react_router_dom_1.NavLink className="navbar-brand" to="/">
          MongoDB
        </react_router_dom_1.NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <react_router_dom_1.NavLink className="nav-link" to="/create">
                Create Record
              </react_router_dom_1.NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
};
exports.default = Navbar;
