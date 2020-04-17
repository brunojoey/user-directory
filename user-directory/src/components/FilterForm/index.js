import React, { Component } from "react";

class FilterForm extends Component {
    state = {
        name: "",
        salary: [],
        occupation: "",
        search: ""
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
        firstName: "",
        lastName: ""
        });
    };


    render() {
        return (
            <div>
                <p>Filter: </p>
                <form>
                    <input type="text" id="search" name="search"></input>
                    <input type="checkbox" id="byName" name="byName"></input>
                    <label for="byName">By Name</label>
                    <input type="checkbox" id="bySalary" name="byName"></input>
                    <label for="bySalary">By Salary</label>
                    <input type="checkbox" id="byOccupation" name="byName"></input>
                    <label for="byOccupation">By Occupation</label>
                    <button id="submit-btn" className="bg-success">Submit</button>
                </form>
            </div>
        );
    }
};

export default FilterForm;
