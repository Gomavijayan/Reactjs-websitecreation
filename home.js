import React, { Component } from "react";
import "./home.css";
import ReactDOM from "react-dom";
const Row = ({ id, name, age, designation, contact, remove }) => (
  <div className="row">
    <table>
      <td>
        <div className="remove">
          <a href="# " onClick={() => remove(id)}>
            X
          </a>
        </div>
      </td>
      <td>
        <div>{id}</div>
      </td>
      <td>
        <div>{name}</div>
      </td>
      <td>
        <div>{age}</div>
      </td>
      <td>
        <div>{designation}</div>
      </td>
      <td>
        <div>{contact}</div>
      </td>
    </table>
  </div>
);
class home extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Govarthini.V",
        age:19,
        designation:"FrontEnd Web Developer",
        contact:9876543210,
      },
      {
        id: 2,
        name: "KayalVizhi",
        age:20,
        designation:"BackEnd Web Developer",
        contact:8567900000,
      },
      {
        id: 3,
        name: "Vishvaja.J",
        age:20,
        designation:"BackEnd Web Developer",
        contact:9589545300,
      },
      {
        id: 4,
        name: "Katherine",
        age:20,
        designation:"FrontEnd Web Developer",
        contact:856754860,
      },
    ],
  };

  /* 
         I like to write it this way to explicity state that a function is being returned
         But you could simplify this by using arrow syntax twice,
        
         compareBy = (key) => (a,b) => { ...... }
      */
  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  sortBy = (key) => {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy });
  };

  remove = (rowId) => {
    // Array.prototype.filter returns new array
    // so we aren't mutating state here
    const arrayCopy = this.state.data.filter((row) => row.id !== rowId);
    this.setState({ data: arrayCopy });
  };

  render() {
    const rows = this.state.data.map((rowData) => (
      <Row remove={this.remove} {...rowData} />
    ));
    return (
      <div id="app">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="table">
          <div className="header">
            <table>
              <div className="remove"></div>
              <tr>
                <th>DEL</th>
                <th>
                  <div onClick={() => this.sortBy("id")}>ID</div>
                </th>
                <th>
                  <div onClick={() => this.sortBy("name")}>Name</div>
                </th>
                <th>
                  <div onClick={() => this.sortBy("age")}>Age</div>
                </th>
                <th>
                  <div onClick={() => this.sortBy("designation")}>Designation</div>
                </th>
                <th>
                  <div onClick={() => this.sortBy("contact")}>Contact</div>
                </th>
              </tr>
            </table>
          </div>
          <div className="body">{rows}</div>
        </div>
      </div>
    );
  }
}
export default home;
