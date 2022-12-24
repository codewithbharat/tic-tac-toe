import React from 'react';

export const Square = (props) => {
    return (
        <div
            onClick={props.onClick}
            style={{
                border: "1px solid black",
                height: "100px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

            }} className="square">
            <h5>{props.value}</h5>
        </div>
    );
}