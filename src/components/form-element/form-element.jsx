import React from "react"
import './form-element.css'

const FormElement = ({ type, name, title, error, errorMsg, register }) => {
  return (
    <div>
      <p>{ error && errorMsg }</p>
      <input type={type} name={name} placeholder='' {...register(name)} />
      <h4>{title}</h4>
    </div>
  )
}

export default FormElement;