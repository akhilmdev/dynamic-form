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
  }]
  return <DynamicFrom formData={formData} />
}

export default App
