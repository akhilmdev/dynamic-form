import React from 'react';
import { Input } from '../dynamicFormField/input.component';
import { TextArea } from '../dynamicFormField/textarea.component';
import { SelectBox } from '../dynamicFormField/select.component';

export const DynamicFormFieldSelection = (props: any) => {
    switch (props.fieldConfig.fieldType) {
        case 'input':
            return <Input {...props.fieldConfig}/>
        case 'select':
            return <SelectBox {...props.fieldConfig} />
        case 'textarea':
            return <TextArea {...props.fieldConfig} />
        default:
            return <p> Please provide a vaild filed type. Current field type is {props.fieldConfig.type} </p>
    }
}