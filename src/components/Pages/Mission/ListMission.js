import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ListMission = () => {
  const [missions, setMissions] = useState([])
  const fetchdata = async () => {
    const list = await axios.get('http://localhost:4000/api/mission')
    setMissions(list.data.list)
  }
  useEffect(() => {
    fetchdata()
  }, [missions])

  const handleDelete = async (_id) => {
    await axios.delete(`http://localhost:4000/api/mission/${_id}`)
    fetchdata()
  }
  return (
    <div>
      <table className="table table-striped mt-3" style={{ backgroundColor: '#e3f2fd' }}>
        <thead>
          <tr>
            <th>Tache</th>
            <th>datedebut</th>
            <th>datefin</th>
            <th>equipe</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission, index) => {
              return (
                <tr key={index}>
                  <td>{mission.tache}</td>
                  <td>{mission.datedebut}</td>
                  <td>{mission.datefin}</td>
                  <td> {mission.equipe}</td>
                  <td >
                    <Link to={`/Updatemission/${mission._id}`} className='btn btn-success me-2'>Update</Link>
                    <button className='btn btn-danger' onClick={() => { handleDelete(mission._id) }}>Delete</button>
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

export default ListMission






