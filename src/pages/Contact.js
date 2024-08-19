import React from 'react'
import { useFormik } from 'formik';

export default function Contact() {

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: values => {
      console.log(values);

    },
  });

  return (
    <div className='form-container'>
      <h1>İletişim</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-input-container'>
          <div className='form-input-area'>
            <label htmlFor='Name'> Name</label>
            <input id='name' name='name' placeholder='Name'
              onChange={handleChange}
              className='form-input' />
          </div>
          <div className='form-input-area'>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' placeholder='Email'
              onChange={handleChange}
              className='form-input' />
          </div>
          <div className='form-input-area'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' placeholder='Message'
              onChange={handleChange}
              className='form-input' />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
