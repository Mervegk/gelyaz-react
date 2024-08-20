import React from 'react'
import { useFormik } from 'formik';

export default function Contact() {

  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async (values, bag) => {
      await new Promise(r => setTimeout(r, 1000))
      console.log(values);
      bag.resetForm();
    },
  });

  return (
    <div className='form-container'>
      <h1>İletişim</h1>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={isSubmitting} className='form-fieldset'>
          <div className='form-input-container'>
            <div className='form-input-area'>
              <label htmlFor='Name'> Name</label>
              <input id='name' name='name' placeholder='Name'
                onChange={handleChange}
                value={values.name}
                className='form-input' />
            </div>
            <div className='form-input-area'>
              <label htmlFor='email'>Email</label>
              <input id='email' name='email' placeholder='Email'
                onChange={handleChange}
                value={values.email}
                className='form-input' />
            </div>
            <div className='form-input-area'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' placeholder='Message'
                onChange={handleChange}
                value={values.message}
                className='form-input' />
            </div>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
