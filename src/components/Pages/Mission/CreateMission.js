import { Formik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateMission = () => {
  const navigate = useNavigate();
  return (
    <div className='container mt-5'>
      <h3 className='text-center text-secondary'>Add Mission</h3>
      <div className="row  d-flex justify-content-center">
        <Formik
          initialValues={{ tache: '', description: '', datedebut: '', datefin: '' }}
          validate={values => {
            const errors = {};
            if (!values.tache) {
              errors.tache = "Ce champs est obligatoire."
            }
            if (!values.description) {
              errors.description = "Ce champs est obligatoire."
            }
            if (!values.datedebut) {
              errors.datedebut = "Ce champs est obligatoire."
            }
            if (!values.datefin) {
              errors.datefin = "Ce champs est obligatoire."
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await axios.post('http://localhost:4000/api/mission', values)
              toast.success(response.data.message)
              navigate('/missions')
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
            <form className='col-6' onSubmit={handleSubmit}>
              <div className="mb-3 my-2">
                <input
                  type="text"
                  placeholder='tache'
                  name="tache"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tache} />
                {errors.tache && touched.tache && <span className="alert alert-danger" role="alert">{errors.tache} </span>}

                <input
                  type="text"
                  placeholder='description'
                  name="description"
                  className="form-control my-2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description} />
                {errors.description && touched.description && <span className="alert alert-danger" role="alert">{errors.description} </span>}

                <input
                  type="text"
                  placeholder='datedebut'
                  name="datedebut"
                  className="form-control my-2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.datedebut} />
                {errors.datedebut && touched.datedebut && <span className="alert alert-danger" role="alert">{errors.datedebut} </span>}

                <input
                  type="text"
                  placeholder='datefin'
                  name="datefin"
                  className="form-control my-2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.datefin} />
                {errors.datefin && touched.datefin && <span className="alert alert-danger" role="alert">{errors.datefin} </span>}
                <input
                  type="text"
                  placeholder='equipe'
                  className="form-control my-2"
                  onChange={handleChange}
                />





              </div>
              <button className="btn btn-secondary w-100" type="submit" >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div >

  )
}

export default CreateMission