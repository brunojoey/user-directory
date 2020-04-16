import React, { Component } from "react";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper"
import employees from "./employees.json"

class App extends Component {
  state = {
    employees
  };

  render() {

    return (
      <Wrapper>
        <h1>Company Employee Directory</h1>
        {this.state.employees.map(employee => (
          <Table
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            salary={employee.salary}
          />
        ))
        };
      </Wrapper>
    )
  }

}

export default App;
