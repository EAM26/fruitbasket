import React from 'react';

function Button({typeButton, handleClick, buttonName}) {
    return (
        <button
        type={typeButton}
        onClick={handleClick}>
            {buttonName}
        </button>
    );
}

export default Button;