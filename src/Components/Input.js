import React from 'react';

function Input({type, name, labelname, errors, register, validationRules, radioName}) {
    return (
        <div>
            <label htmlFor={name}>
            {labelname} <input
            type={type}
            id={name}

            {...register(name, validationRules)}/>
                {radioName}
        </label>
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
}

export default Input;