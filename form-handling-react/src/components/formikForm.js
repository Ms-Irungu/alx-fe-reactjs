import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required')
})

const formikForm = () => (
    <Formik
        initialValues = {{
            username: '',
            email: '',
            password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log('Form data', values)
        }}
    >
        {() => (
            <Form>
                <div className='form-control'>
                    <Field type='text' name='username' />
                    <ErrorMessage name='username' />
                </div>
                <div className='form-control'>
                    <Field type='email' name='email' />
                    <ErrorMessage name='email' />
                </div>
                <div className='form-control'>
                    <Field type='password' name='password' />
                    <ErrorMessage name='password' />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        )}
    </Formik>
)

export default formikForm;