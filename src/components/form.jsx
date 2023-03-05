import React from 'react'
import { useForm }from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
    document.getElementById('btnSubmit').style.border = '2px solid red'
    setTimeout(() => {
      document.getElementById('btnSubmit').style.border = '1px solid black'
    }, 500)
  }

  return(
    <div className="form-container">
      <div className='title-container'>
        <h2 className='form-title'>React Hook Form</h2>
      </div>
      <form className='form-component' onSubmit={handleSubmit(onSubmit)}>
        <h4>Full name</h4>
        <p>{ errors.name && 'Required'}</p>
        <input type='text' name='name' placeholder='your name' {...register('name')} />

        <h4>Email</h4>
        <p>{ errors.email && 'Must use a valid email address.'}</p>
        <input type='email' name='email' placeholder='email' {...register('email')} />

        <h4>Password</h4>
        <p>{ errors.password && 'Password must be between 4 and 16 characters.'}</p>
        <input type='password' name='password' placeholder='password' {...register('password')} />

        <h4>Confirm password</h4>
        <p>{ errors.confirmPassword && 'Passwords must match.'}</p>
        <input type='password' name='confirmPassword' placeholder='password' {...register('confirmPassword')} />

        <button type='submit' id='btnSubmit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;
