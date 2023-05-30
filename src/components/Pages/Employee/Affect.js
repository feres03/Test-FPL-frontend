import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

const Affect = () => {
    const [mission, setEmployees] = useState([])
    const navigate = useNavigate()
    const params = useParams().id
    const [missionid, setMissionid] = useState("")
    console.log(missionid, params);


    const fetchdata = async () => {
        const list = await axios.get('http://localhost:4000/api/mission')
        setEmployees(list.data.list)

        console.log(list.data.list)
    }
    useEffect(() => {
        fetchdata()
        console.log(mission)
    }, [])
    const assignMission = async (values) => {
        try {
            const response = await axios.post('http://localhost:4000/api/employee', values);
            toast.success(response.data.message);
            navigate('/employees');
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };
    const handleAffect = async (e) => {
        e.preventDefault()


        const list = await axios.put(`http://localhost:4000/api/affect/${missionid}/${params}`);
        if (list.data.message === 'Mission affectée avec succés') {
            toast.success(list.data.message)
            navigate('/missions')

        }
        else { toast.error(list.data.message) }

    }

    return (
        <div className='container mt-5'>
            <h3 className='text-center text-secondary'>Affect Employee</h3>
            <div className="row  d-flex justify-content-center">
                <Formik
                    initialValues={{ nom: '', prenom: '', email: '', categorie: '', specialite: '', numCnss: '', age: '', disponibilite: '', missionId: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.nom) {
                            errors.name = "Ce champs est obligatoire."
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
                        try {
                            const response = await axios.post('http://localhost:4000/api/employee', values)
                            toast.success(response.data.message)
                            navigate('/employees')
                        } catch (error) {
                            console.log(error)
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
                                <Select
                                    className='mb-3'
                                    placeholder='Select a mission'
                                    options={mission.map((mission) => ({
                                        value: mission._id,
                                        label: mission.tache
                                    }))}
                                    onChange={(selectedOption) => {
                                        const missionId = selectedOption.value;
                                        handleChange('missionId')(missionId);
                                        setMissionid(missionId)
                                        console.log(missionId);
                                    }}
                                />

                            </div>
                            <button onClick={handleAffect} className="btn btn-secondary w-100" type="submit" >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div >

    )
}

export default Affect