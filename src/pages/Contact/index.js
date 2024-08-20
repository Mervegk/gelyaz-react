import React from 'react'
import { useFormik } from 'formik';
import validations from './validations'

export default function Contact() {

  const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async (values, bag) => {
      await new Promise(r => setTimeout(r, 500));
      if (values.email === 'test@test.com') {
        return bag.setErrors({ email: 'Bu e-posta adresi daha önce kullanılmış.' })
      }
      console.log(values);
      bag.resetForm();
    },
    validationSchema: validations
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
                onBlur={handleBlur}
                className='form-input' />
              {
                errors.name && touched.name && <div className='error'>{errors.name}</div>
              }
            </div>
            <div className='form-input-area'>
              <label htmlFor='email'>Email</label>
              <input id='email' name='email' placeholder='Email'
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className='form-input' />
              {
                errors.email && touched.email && <div className='error'>{errors.email}</div>
              }
            </div>
            <div className='form-input-area'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' placeholder='Message'
                onChange={handleChange}
                value={values.message}
                onBlur={handleBlur}
                className='form-input' />
              {
                errors.message && touched.message && <div className='error'>{errors.message}</div>
              }
            </div>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
