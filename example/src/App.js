import React from 'react'

import { DynamicFrom } from 'dynamic-form-core'
import 'dynamic-form-core/dist/index.css'

const App = () => {
  const formData = [{
    label: 'email',
    value: '',
    type: 'input',
    id: 'email',
    className: ''
  },{
    label: 'email',
    value: '',
    type: 'checkbox',
    id: 'email',
    className: ''
  },{
    label: 'email',
    value: '',
    type: 'date',
    id: 'email',
    className: ''
  },{
    label: 'email',
    value: '',
    type: 'select',
    id: 'email',
    className: ''
  },{
    label: 'email',
    value: '',
    type: 'textarea',
    id: 'email',
    className: ''
  },{
    label: 'email',
    value: '',
    type: 'radiobutton',
    id: 'email',
    className: ''
  },]
  return <DynamicFrom formData={formData} />
}

export default App
