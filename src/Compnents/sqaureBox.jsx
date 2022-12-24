import React from 'react';

export const Square = (props) => {
    return (
        <div
            onClick={props.onClick}
            className="square">
            <h5>{props.value}</h5>
        </div>
    );
}