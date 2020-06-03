import React from 'react';

export const SelectBox = (props: any) => {
    console.log(props);
    
    return (
            <div>
                <label htmlFor={props.name}>{props.label}</label>
                <select name={props.name} id={props.id}>
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
            </div>
    )
}