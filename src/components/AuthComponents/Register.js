import './auth.css'
import axios from 'axios';
import { Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className='d-flex w-50 mx-auto flex-column align-items-center mt-4'>
      <Formik
        initialValues={{ nom: '', prenom: '', email: '', password: '', categorie: '', departement: '' }}
        validate={values => {
          const errors = {};
          if (!values.nom) {
            errors.nom = 'Username is equired';
          }
          if (!values.prenom) {
            errors.prenom = 'lastname is equired';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.categorie) {
            errors.categorie = 'categorie is equired';
          }
          if (!values.departement) {
            errors.departement = 'departement is equired';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post('http://localhost:4000/api/register', values)
            navigate('/login')
            toast.success(response.data.message)
          } catch (error) {
            toast.error(error.response.data.message)
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="form-box">
            <form onSubmit={handleSubmit} className='form'>
              <h1 className='text-info'>Sign up</h1>
              <span className="subtitle">Create a free account with your email.</span>
              <div className="form-container">
                <input
                  type="text"
                  className={`input ${errors.nom && touched.nom && 'border border-danger'} `}
                  name="nom"
                  placeholder="Nom"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom} />
                {errors.nom && touched.nom && <span className='text-danger px-4 py-2'>{errors.nom}</span>}
                <input
                  type="text"
                  className={`input ${errors.prenom && touched.prenom && 'border border-danger'} `}
                  name="prenom"
                  placeholder="Prenom"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prenom} />
                {errors.prenom && touched.prenom && <span className='text-danger px-4 py-2'>{errors.prenom}</span>}
                <input
                  type="email"
                  className={`input ${errors.email && touched.email && 'border border-danger'} `}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} />
                {errors.email && touched.email && <span className='text-danger px-4 py-2'>{errors.email}</span>}
                <input
                  type="password"
                  name="password"
                  className={`input ${errors.password && touched.password && 'border border-danger'} `}
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password} />
                {errors.password && touched.password && <span className='text-danger  px-4 py-2'> {errors.password}</span>}
                <input
                  type="text"
                  className={`input ${errors.categorie && touched.categorie && 'border border-danger'} `}
                  name="categorie"
                  placeholder="categorie"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.categorie} />
                {errors.categorie && touched.categorie && <span className='text-danger px-4 py-2'>{errors.categorie}</span>}
                <input
                  type="text"
                  className={`input ${errors.departement && touched.departement && 'border border-danger'} `}
                  name="departement"
                  placeholder="departement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.departement} />
                {errors.departement && touched.departement && <span className='text-danger px-4 py-2'>{errors.departement}</span>}
              </div>
              <button type='submit'>Sign up</button>
            </form>
            <div className="form-section">
              <p>Have an account? <Link className='text-primary' to="/login">Login</Link></p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Register