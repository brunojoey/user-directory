import React from "react";
import "./style.css"

function createTable(props) {
    return (
        <div className="employee-table">
            <table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th> {props.id}
                        <td></td> {props.name}
                        <td></td> {props.occupation}
                        <td></td> {props.salary}
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default createTable