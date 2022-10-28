import React from 'react'
import ElementForm from '../components/ElementForm'
import FormDOM from '../components/FormDOM'

type Props = {}

const FormBuilder = (props: Props) => {
  return (
    <div className="flex flex-row relative">
      <ElementForm/>
      <FormDOM/>
    </div>
  )
}

export default FormBuilder