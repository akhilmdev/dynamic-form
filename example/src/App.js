import React from 'react'

import { DynamicFrom } from 'dynamic-form-core'
import 'dynamic-form-core/dist/index.css'

const App = () => {
  const formData = [{
    label: 'input lable',
    value: '',
    type: 'input',
    id: 'email',
    className: '',
    fieldType: 'input'
  },{
    label: 'checkbox lable',
    value: '',
    type: 'checkbox',
    id: 'email',
    className: '',
    fieldType: 'input'
  },{
    label: 'date lable',
    value: '',
    type: 'date',
    id: 'email',
    className: '',
    fieldType: 'input'
  },{
    label: 'select lable',
    value: '',
    id: 'email',
    className: '',
    fieldType: 'select'
  },{
    label: 'textarea lable',
    value: '',
    id: 'textarea',
    className: '',
    fieldType: 'textarea'
  },{
    label: 'radio lable',
    value: '',
    type: 'radio',
    id: 'email',
    className: '',
    fieldType: 'input'
  },]
  return <DynamicFrom formData={formData} />
}

export default App
