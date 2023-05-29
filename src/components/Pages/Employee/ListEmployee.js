import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ListEmployee = () => {
  const [employees, setEmployees] = useState([])
  const fetchdata = async () => {
    const list = await axios.get('http://localhost:4000/api/employee')
    setEmployees(list.data.list)
    console.log(employees);
  }
  useEffect(() => {
    fetchdata()
  }, [])

  const handleDelete = async (_id) => {
    await axios.delete(`http://localhost:4000/api/employee/${_id}`)
    fetchdata()
  }
  return (
    <div>
      <table className="table table-striped mt-3" style={{ backgroundColor: '#e3f2fd' }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Categorie</th>
            <th>Sepcialite</th>
            <th>disponibilite</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.nom}</td>
                  <td>{employee.categorie}</td>
                  <td>{employee.specialite}</td>
                  <td> {employee.disponibilite}</td>
                  <td >
                    <Link to={`/UpdateEmployee/${employee._id}`} className='btn btn-success me-2'>Update</Link>
                    <button className='btn btn-danger' onClick={() => { handleDelete(employee._id) }}>Delete</button>
                  </td>


                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
  )
}

export default ListEmployee