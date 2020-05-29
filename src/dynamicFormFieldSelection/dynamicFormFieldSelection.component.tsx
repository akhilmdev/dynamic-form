import React from 'react';
import { Input } from '../dynamicFormField/input.component';

export const DynamicFormFieldSelection = (props: any) => {
    switch (props.fieldConfig.type) {
        case 'input':
            return <Input config={props.fieldConfig.type}/>
        case 'checkbox':
            return <p>this field is implementing</p>
        case 'datepicker':
            return <p>this field is implementing</p>
        case 'select':
            return <p>this field is implementing</p>
        case 'textarea':
            return <p>this field is implementing</p>
        case 'radiobutton':
            return <p>this field is implementing</p>
        case 'toggle':
            return <p>this field is implementing</p>
        default:
            return <p> Please provide a vaild filed type. Current field type is {props.fieldConfig.type} </p>
    }
}