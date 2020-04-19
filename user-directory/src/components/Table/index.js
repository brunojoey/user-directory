import React from "react";
import "./style.css";

function createTable(props) {
    return (
        <div class="employee-table">
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
                        <th scope="row">{props.id}</th>
                        <td>{props.name}</td>
                        <td>{props.occuapation}</td>
                        <td>{props.salary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default createTable