import React from 'react'
import { useForm }from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormElement from '../form-element/form-element'

import './form.css'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(16).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required()
})

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = (data) => {
    console.log(data)
    document.getElementById('btnSubmit').style.outline = '1px solid rgb(195, 225, 240)'
    setTimeout(() => {
      document.getElementById('btnSubmit').style.outline = 'none'
    }, 200)
  }

  return(
    <div className="form-container">
      <div className='title-container'>
        <h2 className='form-title'>React Hook Form</h2>
      </div>
      <form className='form-component' onSubmit={handleSubmit(onSubmit)}>

        <FormElement 
          title='Name' 
          name='name' 
          type='text' 
          error={errors.name} 
          errorMsg='Name is required.'
          tabIndex={1}
          register={register}
        />
        <FormElement 
          title='Email' 
          name='email' 
          type='text' 
          error={errors.email} 
          errorMsg='Must use a valid email address.'
          tabIndex={2}
          register={register}
        />
        <FormElement 
          title='Password' 
          name='password' 
          type='password' 
          error={errors.password} 
          errorMsg='Password must be between 4 and 16 characters.'
          tabIndex={3}
          register={register}
        />
        <FormElement 
          title='Confirm password' 
          name='confirmPassword' 
          type='password' 
          error={errors.confirmPassword} 
          errorMsg='Passwords must match.'
          tabIndex={4}
          register={register}
        />
        <button type='submit' id='btnSubmit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;
