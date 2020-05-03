import React from "react";
import "./style.css";

function CreateTable(props) {

    const employeeList = () => {
      const employees = props.employees;
      let filteredEmployees = employees;
  
      // Apply filters.
      if (props.filterPosBy !== 'none') {
        filteredEmployees = employees.filter(employee => {
          return employee.occupation === props.filterPosBy;
        });
      }
  
      // Apply sorting.
      filteredEmployees.sort((first, second) => (first[props.orderBy] > second[props.orderBy]) ? 1 : -1);
  
      return filteredEmployees.map(employee => (
        <tr key={employee.id}>
          <th scope='row'>{employee.id}</th>
          <td>{employee.name}</td>
          <td>{employee.occupation}</td>
          <td>{employee.salary}</td>
        </tr>
      ));
    }
  
    return (
      <table className={`table table-bordered table-striped employeeTable`}>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Occupation</th>
            <th scope='col'>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employeeList()}
        </tbody>
      </table>
    );
  }
  
  export default CreateTable;