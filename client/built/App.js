"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We use Route in order to define the different routes of our application
var react_router_dom_1 = require("react-router-dom");
var edit_1 = require("./components/edit");
var recordList_1 = require("./components/recordList");
var App = function () {
    return (/>
        < react_router_dom_1.Route);
    exact;
    path = "/" >
        action;
    "/";
    method = "get" >
        htmlFor;
    "header-search" >
        className;
    "visually-hidden" > Search;
    animals < /span>
        < /label>
        < input;
    type = "text";
    id = "header-search";
    placeholder = "No input views all";
    name = "s"
        /  >
        type;
    "submit" > Search < /button>
        < /form>
        < recordList_1.default /  >
        /Route>
        < react_router_dom_1.Route;
    path = "/edit/:id";
    component = { Edit: edit_1.default } /  >
        path;
    "/create" >
        />
        < /Route>
        < /div>;
};
;
;
exports.default = App;
