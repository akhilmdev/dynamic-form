import React from 'react';

export const Input = (props: any) => {
    console.log(props);
    
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.name} value={props.value} />
        </div>
    )
}