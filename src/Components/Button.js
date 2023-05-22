import React from 'react';

function Button(props) {
    return (
        <button
        type={props.typeName}
        onClick={props.handleClick}>
            {props.buttonValue}
        </button>

    );
}

export default Button;