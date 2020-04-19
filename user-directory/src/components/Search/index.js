import React from "react";
import TextField from "@material-ui/core/TextField";

function Search(props) {
    console.log("SEARCH: ", props);
    return (
        <form>
            <TextField id="searchEmployees" placeholder="Search for Employees" label="Search field" type="search" value={props.search}
            onChange={props.handleChange} InputLabelProps={{shrink: true}} />        
        </form>
    )
};

export default Search;