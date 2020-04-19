import React from "react";
import Button from '@material-ui/core/Button';

function SortButtons() {
    return (
        <div>
            <Button variant="contained">Sort by Name</Button>
            <Button variant="contained">Sort by Occupation</Button>
            <Button variant="contained">Sort by Salary</Button>
            <Button variant="contained" href="#contained-buttons">Link</Button>
        </div>
    )
};

export default SortButtons