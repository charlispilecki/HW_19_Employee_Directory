import React, { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      filteredEmployees: []
    }
    this.sortEmployees = this.sortEmployees.bind(this)
    this.filterEmployees = this.filterEmployees.bind(this)
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => {
        this.setState({
          employees: data.results,
          filteredEmployees: data.results
        })
      });
  }

  filterEmployees(event) {
    let criteria = event.target.value
    let filtered = this.state.employees.filter(employee => {
      let fullName = employee.name.first + employee.name.last
      return fullName.toLowerCase().includes(criteria.toLowerCase())
    })
    this.setState({
      filteredEmployees: filtered
    })
  }

  sortEmployees() {
    let sortedEmployees = this.state.employees.sort((a, b) => a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase()))
    let sortedFilteredEmployees = this.state.filteredEmployees.sort((a, b) => a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase()))
    this.setState({
      employees: sortedEmployees,
      filteredEmployees: sortedFilteredEmployees
    })
  }

  render() {

    return (
      <div className="box">
        <div className="container mt-3 columns">
          <div className="column"></div>
          <div className="column is-three-fifths">
            <h1 className="title">Employee Directory</h1>
            <input onChange={this.filterEmployees} placeholder="Search employees by name" className="input" style={{ width: '33%' }}></input>
            <table className="table mt-3">
              <thead>
                <tr>
                  <th onClick={this.sortEmployees}>Name <i className="fas fa-caret-down"></i></th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Birthday</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredEmployees.map(employee => {
                  return (
                    <tr key={employee.login.uuid}>
                      <td>{employee.name.first + ' ' + employee.name.last}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.gender}</td>
                      <td>{employee.location.city}</td>
                      <td>{employee.location.country}</td>
                      <td>{moment(employee.dob.date).format("MMM Do")}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );

  }
}

export default App;
