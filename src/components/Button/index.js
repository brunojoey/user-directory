import React from "react";

function SortButtons(props) {
    return (
        <div>
            <button
                className="btn btn-block actionButtons"
                onClick={() => props.handleButtonClick(props.action, props.actionBy)}
            >
                {props.text}
            </button>        
        </div>
    )
};

export default SortButtons;