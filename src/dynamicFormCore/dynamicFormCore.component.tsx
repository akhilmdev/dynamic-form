import React, { Component } from 'react'
import { DynamicFormCoreInterface, FormConfig } from './dynamicFormCore.interface'
import { DynamicFormFieldSelection } from '../dynamicFormFieldSelection/dynamicFormFieldSelection.component';


class DynamicFromCore extends Component<DynamicFormCoreInterface, any> {


    render() {
        console.log(this.props.formData);
        
        return (
            <React.Fragment>
                { this.props.formData.map( (formField: FormConfig) => {
                    console.log('+++++++++', formField.type);
                    return <DynamicFormFieldSelection
                                key={formField.id + '-' + formField.type}
                                fieldConfig={formField} />
                    
                })}
            </React.Fragment>
        )
    }
}

export default DynamicFromCore;
