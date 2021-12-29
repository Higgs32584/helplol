"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// This will require to npm install axios
var axios_1 = require("axios");
var Create = /** @class */ (function (_super) {
    __extends(Create, _super);
    // This is the constructor that stores the data.
    function Create(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangePersonName = _this.onChangePersonName.bind(_this);
        _this.onChangePersonPosition = _this.onChangePersonPosition.bind(_this);
        _this.onChangePersonLevel = _this.onChangePersonLevel.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.state = {
            person_name: "",
            person_position: "",
            person_level: "",
        };
        return _this;
    }
    // These methods will update the state properties.
    Create.prototype.onChangePersonName = function (e) {
        this.setState({
            person_name: e.target.value,
        });
    };
    Create.prototype.onChangePersonPosition = function (e) {
        this.setState({
            person_position: e.target.value,
        });
    };
    Create.prototype.onChangePersonLevel = function (e) {
        this.setState({
            person_level: e.target.value,
        });
    };
    // This function will handle the submission.
    Create.prototype.onSubmit = function (e) {
        e.preventDefault();
        // When post request is sent to the create url, axios will add a new record(newperson) to the database.
        var newperson = {
            person_name: this.state.person_name,
            person_position: this.state.person_position,
            person_level: this.state.person_level,
        };
        axios_1.default
            .post("http://localhost:5000/record/add", newperson)
            .then(function (res) { return console.log(res.data); });
        // We will empty the state after posting the data to the database
        this.setState({
            person_name: "",
            person_position: "",
            person_level: "",
        });
    };
    // This following section will display the form that takes the input from the user.
    Create.prototype.render = function () {
        return (<div style={{ marginTop: 20 }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name of the person: </label>
            <input type="text" className="form-control" value={this.state.person_name} onChange={this.onChangePersonName}/>
          </div>
          <div className="form-group">
            <label>Person's position: </label>
            <input type="text" className="form-control" value={this.state.person_position} onChange={this.onChangePersonPosition}/>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Intern" checked={this.state.person_level === "Intern"} onChange={this.onChangePersonLevel}/>
              <label className="form-check-label">Intern</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Junior" checked={this.state.person_level === "Junior"} onChange={this.onChangePersonLevel}/>
              <label className="form-check-label">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="Senior" checked={this.state.person_level === "Senior"} onChange={this.onChangePersonLevel}/>
              <label className="form-check-label">Senior</label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create person" className="btn btn-primary"/>
          </div>
        </form>
      </div>);
    };
    return Create;
}(react_1.Component));
exports.default = Create;
