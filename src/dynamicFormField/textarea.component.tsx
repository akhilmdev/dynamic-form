import React from 'react';

export const TextArea = (props: any) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <textarea id={props.id} value={props.value} />
        </div>
    )
}