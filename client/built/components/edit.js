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
var react_router_1 = require("react-router");
var Edit = /** @class */ (function (_super) {
    __extends(Edit, _super);
    // This is the constructor that stores the data.
    function Edit(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangePersonName = _this.onChangePersonName.bind(_this);
        _this.onChangePersonPosition = _this.onChangePersonPosition.bind(_this);
        _this.onChangePersonLevel = _this.onChangePersonLevel.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.state = {
            person_name: "",
            person_position: "",
            person_level: "",
            records: [],
        };
        return _this;
    }
    // This will get the record based on the id from the database.
    Edit.prototype.componentDidMount = function () {
        var _this = this;
        axios_1.default
            .get("http://localhost:5000/animals" + this.props.match.params.id)
            .then(function (response) {
            _this.setState({
                person_name: response.data.name,
                person_position: response.data.id,
                person_level: response.data.description,
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    // These methods will update the state properties.
    Edit.prototype.onChangePersonName = function (e) {
        this.setState({
            name: e.target.value,
        });
    };
    Edit.prototype.onChangePersonPosition = function (e) {
        this.setState({
            description: e.target.value,
        });
    };
    Edit.prototype.onChangePersonLevel = function (e) {
        this.setState({
            id: e.target.value,
        });
    };
    // This function will handle the submission.
    Edit.prototype.onSubmit = function (e) {
        e.preventDefault();
        var newEditedperson = {
            person_name: this.state.name,
            person_position: this.state.id,
            person_level: this.state.description,
        };
        console.log(newEditedperson);
        // This will send a post request to update the data in the database.
        axios_1.default
            .post("http://localhost:5000/update/" + this.props.match.params.id, newEditedperson)
            .then(function (res) { return console.log(res.data); });
        this.props.history.push("/");
    };
    // This following section will display the update-form that takes the input from the user to update the data.
    Edit.prototype.render = function () {
        return (<div>
        <h3 align="center">Update Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person's Name: </label>
            <input type="text" className="form-control" value={this.state.person_name} onChange={this.onChangePersonName}/>
          </div>
          <div className="form-group">
            <label>Position: </label>
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
          <br />

          <div className="form-group">
            <input type="submit" value="Update Record" className="btn btn-primary"/>
          </div>
        </form>
      </div>);
    };
    return Edit;
}(react_1.Component));
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
exports.default = (0, react_router_1.withRouter)(Edit);
