import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.id}</td>
    <td>{props.record.description}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

const { search } = window.location;
const query = new URLSearchParams(search).get('s');

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  //this.query = this.query.bind(this);
  
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/animals")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
  
  // .filter((record) => record.text.toLowerCase().includes(this.query))

  // {tasks.filter((task) => task.text.toLowerCase().includes(query)).map((task) => (
  //   <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}

  // This method will map out the users on the table
  recordList() {
    return this.state.records.filter((record) => record.name.toLowerCase().includes(String(query).toLowerCase())).map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }
  

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
