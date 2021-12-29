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
var react_router_dom_1 = require("react-router-dom");
var Record = function (props) { return (<tr>
    <td>{props.record.name}</td>
    <td>{props.record.id}</td>
    <td>{props.record.description}</td>
    <td>
      <react_router_dom_1.Link to={"/edit/" + props.record._id}>Edit</react_router_dom_1.Link> |
      <a href="/" onClick={function () {
        props.deleteRecord(props.record._id);
    }}>
        Delete
      </a>
    </td>
  </tr>); };
var search = window.location.search;
var query = new URLSearchParams(search).get('s');
var RecordList = /** @class */ (function (_super) {
    __extends(RecordList, _super);
    // This is the constructor that shall store our data retrieved from the database
    function RecordList(props) {
        var _this = _super.call(this, props) || this;
        _this.deleteRecord = _this.deleteRecord.bind(_this);
        _this.state = { records: [] };
        return _this;
    }
    //this.query = this.query.bind(this);
    // This method will get the data from the database.
    RecordList.prototype.componentDidMount = function () {
        var _this = this;
        axios_1.default
            .get("http://localhost:5000/animals")
            .then(function (response) {
            _this.setState({ records: response.data });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    // This method will delete a record based on the method
    RecordList.prototype.deleteRecord = function (id) {
        axios_1.default.delete("http://localhost:5000/" + id).then(function (response) {
            console.log(response.data);
        });
        this.setState({
            record: this.state.records.filter(function (el) { return el._id !== id; }),
        });
    };
    // .filter((record) => record.text.toLowerCase().includes(this.query))
    // {tasks.filter((task) => task.text.toLowerCase().includes(query)).map((task) => (
    //   <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
    // This method will map out the users on the table
    RecordList.prototype.recordList = function () {
        var _this = this;
        return this.state.records.filter(function (record) { return record.name.toLowerCase().includes(String(query).toLowerCase()); }).map(function (currentrecord) {
            return (<Record record={currentrecord} deleteRecord={_this.deleteRecord} key={currentrecord._id}/>);
        });
    };
    // This following section will display the table with the records of individuals.
    RecordList.prototype.render = function () {
        return (<div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>);
    };
    return RecordList;
}(react_1.Component));
exports.default = RecordList;
