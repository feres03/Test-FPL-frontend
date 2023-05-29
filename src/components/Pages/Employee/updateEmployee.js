import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateEmployee() {
    const [employee, setEmployee] = useState({})
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`http://localhost:4000/api/employee/${params.id}`)
            setEmployee(response.data.employee)
        }
        fetch()
    }, [params.id])

    useEffect(() => {
        console.log(employee);
    }, [employee]);

    return (
        <div className='container mt-5'>
            <h3 className='text-center text-secondary'>Add Employee</h3>
            <div className="row  d-flex justify-content-center">
                <Formik
                    initialValues={employee || { nom: '', prenom: '', email: '', categorie: '', specialite: '', numCnss: '', age: '', disponibilite: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.nom) {
                            errors.nom = "Ce champs est obligatoire."
                        }
                        if (!values.prenom) {
                            errors.prenom = 'Ce champs est obligatoire.'
                        }
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.categorie) {
                            errors.categorie = 'Ce champs est obligatoire.'
                        }
                        if (!values.specialite) {
                            errors.specialite = 'Ce champs est obligatoire.'
                        }
                        if (!values.numCnss) {
                            errors.numCnss = 'Ce champs est obligatoire.'
                        }
                        if (!values.age) {
                            errors.age = 'Ce champs est obligatoire.'
                        }
                        if (!values.disponibilite) {
                            errors.disponibilite = 'Ce champs est obligatoire.'
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {

                        await axios.put(`http://localhost:4000/api/employee/${params.id}`, values)
                        navigate('/employees')


                    }}
                    enableReinitialize
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
                                    placeholder='Nom'
                                    name="nom"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nom} />
                                {errors.nom && touched.nom && <span className="alert alert-danger" role="alert">{errors.nom} </span>}

                                <input
                                    type="text"
                                    placeholder='Prenom'
                                    name="prenom"
                                    className="form-control my-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.prenom} />
                                {errors.prenom && touched.prenom && <span className="alert alert-danger" role="alert">{errors.prenom} </span>}

                                <input
                                    type="email"
                                    placeholder='Email'
                                    name="email"
                                    className="form-control my-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} />
                                {errors.email && touched.email && <span className="alert alert-danger" role="alert">{errors.email} </span>}

                                <input
                                    type="text"
                                    placeholder='categorie'
                                    name="categorie"
                                    className="form-control my-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.categorie} />
                                {errors.categorie && touched.categorie && <span className="alert alert-danger" role="alert">{errors.categorie} </span>}

                                <input
                                    type="text"
                                    placeholder='Specialite'
                                    name="specialite"
                                    className="form-control my-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.specialite} />
                                {errors.specialite && touched.specialite && <span className="alert alert-danger" role="alert">{errors.specialite} </span>}

                                <input
                                    type="number"
                                    placeholder='numCnss'
                                    name="numCnss"
                                    className="form-control my-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.numCnss} />
                                {errors.numCnss && touched.numCnss && <span className="alert alert-danger" role="alert">{errors.numCnss} </span>}

                                <input
                                    type="number"
                                    placeholder='age'
                                    name="age"
                                    className="form-control my-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.age} />
                                {errors.age && touched.age && <span className="alert alert-danger" role="alert">{errors.age} </span>}

                                <input
                                    type="text"
                                    placeholder='disponibilite'
                                    name="disponibilite"
                                    className="form-control my-2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.disponibilite} />
                                {errors.disponibilite && touched.disponibilite && <span className="alert alert-danger" role="alert">{errors.disponibilite} </span>}

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

export default UpdateEmployee