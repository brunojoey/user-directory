import React, { Component } from "react";
import Table from "./components/Table";
import Row from "./components/Row";
import Col from "./components/Col";
import FilterForm from "./components/FilterForm";
import Wrapper from "./components/Wrapper"
import employees from "./employees.json"

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div>
      <Wrapper>
        <h1>Company Employee Directory</h1>
        <Row />
        <Col size="lg-12"/>
        <FilterForm />
        {this.state.employees.map(employee => (
        <Table
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
