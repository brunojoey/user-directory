import React from "react";
import SortButtons from "./components/Button";
import Search from "./components/Search";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";

class App extends React.Component {
  state = {
    employees,
    search: ""
  };

  sortByName = () => {
    const sortByName = this.state.employees.sort(function(a, b) {
      let nameOne = a.name.toLowerCase();
      let nameTwo = b.name.toLowerCase();
      if (nameOne < nameTwo)
        return -1
      if (nameOne > nameTwo)
        return 1
      return 0
    });
    this.setState(sortByName);
  };

  sortByOccupation = () => {
    const sortByOccupation = this.state.employees.sort(function(a, b) {
      let occupationOne = a.occupation.toLowerCase();
      let occupationTwo = b.occupation.toLowerCase();
      if (occupationOne < occupationTwo)
        return -1
      if (occupationOne > occupationTwo)
        return 1
      return 0
    });
    this.setState(sortByOccupation); 
  };

  sortBySalary = () => {
    const sortBySalary = this.state.employees.sort(function(a, b) {
      let salaryOne = a.salary.toLowerCase();
      let salaryTwo = b.salary.toLowerCase();
      if (salaryOne < salaryTwo)
        return -1
      if (salaryOne > salaryTwo)
        return 1
      return 0
    });
    this.setState(sortBySalary);
  };

  resetEmployees = () => {
    this.setState({employees});
    this.setState({search: ""});
  };

  handleChange = (event) => {
    this.setState({search: event.target.value});
    const employeeSearch = this.state.employees.filter(employee => employee.name.includes(this.state.search)
    || employee.role.includes(this.state.search));
    this.setState({employees: employeeSearch});
    if (event.target.value === '') {
      this.setState({employees});
    }
  };

  render() {
    return (
      <div>
      <Wrapper>
        <h1>Company Employee Directory</h1>
        <Search handleChange={this.handleChange} search={this.state.search}/>
        <SortButtons />
        {this.state.employees.map(employee => (
        <Table sortByName={this.sortByName} 
            sortByOccupation={this.sortByOccupation} 
            sortBySalary={this.sortBySalary} 
            resetEmployees={this.resetEmployees}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            salary={employee.salary}
        />
        ))};
      </Wrapper>
      </div>
    )
  }

}

export default App;
