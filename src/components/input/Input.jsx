import React from 'react';

import './input.scss';

const Input = props => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
            style={{height: '60px', marginTop: '2px', border: 'solid white 1px'}}
        />
    );
}

export default Input;
