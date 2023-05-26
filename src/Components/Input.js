import React from 'react';

function Input({type, name, labelname, errors, register, validationRules, radioName}) {
    return (
        <div className="form-items">
            <label htmlFor={name}>
                {labelname}

                {radioName}
            </label>
            <input
                type={type}
                id={name}

                {...register(name, validationRules)}>
            </input>
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
}

export default Input;