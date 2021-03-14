import React, { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'

function App() {

  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([])
  const [searchCriteria, setSearchCriteria] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {
        setEmployees(data.results)
        setFilteredEmployees(data.results)
      });
  }, []);

  function searchEmployees(event) {
    let searchCriteria = event.target.value || ''
    setSearchCriteria(searchCriteria)
    filterEmployees(searchCriteria, employees)
  }

  function filterEmployees(criteria, employees) {
    if (criteria.trim() === '') {
      setFilteredEmployees(employees)
    } else {
      let newEmployees = employees.filter(employee => {
        let fullName = employee.name.first + employee.name.last
        return fullName.toLowerCase().includes(criteria.toLowerCase())
      })
      setFilteredEmployees(newEmployees)
    }
  }

  function sortEmployees() {
    let sortedEmployees = filteredEmployees.sort((a, b) => a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase()))
    sortedEmployees.forEach(e => console.log(e.name.first))
    setEmployees(sortedEmployees)
    filterEmployees(searchCriteria, sortedEmployees)
  }

  return (
    <div className="box">
      <div className="container mt-3 columns">
        <div className="column"></div>
        <div className="column is-three-fifths">
          <h1 className="title">Employee Directory</h1>
          <input onChange={searchEmployees} placeholder="Search employees by name" className="input" style={{ width: '33%' }}></input>
          <table className="table mt-3">
            <thead>
              <tr>
                <th onClick={sortEmployees}>Name <i className="fas fa-caret-down"></i></th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>City</th>
                <th>Country</th>
                <th>Birthday</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map(employee => {
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

export default App;
