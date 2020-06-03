import React from 'react';
import { Input } from '../dynamicFormField/input.component';
import { Checkbox } from '../dynamicFormField/checkbox.component';
import { DatePicker } from '../dynamicFormField/datepicker.component';
import { RadioButton } from '../dynamicFormField/radiobutton.component';
import { TextArea } from '../dynamicFormField/textarea.component';
import { SelectBox } from '../dynamicFormField/select.component';

export const DynamicFormFieldSelection = (props: any) => {
    switch (props.fieldConfig.type) {
        case 'input':
            return <Input {...props.fieldConfig}/>
        case 'checkbox':
            return <Checkbox {...props.fieldConfig} />
        case 'date':
            return <DatePicker {...props.fieldConfig} />
        case 'select':
            return <SelectBox {...props.fieldConfig} />
        case 'textarea':
            return <TextArea {...props.fieldConfig} />
        case 'radiobutton':
            return <RadioButton {...props.fieldConfig} />
        default:
            return <p> Please provide a vaild filed type. Current field type is {props.fieldConfig.type} </p>
    }
}