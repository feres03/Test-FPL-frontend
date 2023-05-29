import React from 'react'


const ListEmployee = () => {

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

      </table>
    </div>
  )
}

export default ListEmployee