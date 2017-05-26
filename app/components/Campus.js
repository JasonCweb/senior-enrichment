import React from 'react';
import { Link } from 'react-router';
import DeleteCampusContainer from '../containers/DeleteCampusContainer'
import EditCampusContainer from '../containers/EditCampusContainer'

export default function Campus (props) {
  console.log('hit Campus component!. props= ', props);

  const campus = props.selectedCampus;
  const handleSubmit = props.handleSubmit;
  const students = props.students;
  return (
    <div className="campus">
      <div>
        <h1>{ campus.name }</h1>
        <h3>{ campus.nickname } </h3>
        <img src={"/default-campus.jpg"} className="img-thumbnail" />
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              students && students.map(student => (
                <tr key={ student.id }>
                  <td>
                    <span>{ student.id }</span>
                  </td>
                  <td>{ student.name }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <EditCampusContainer campusId= {campus.id} />
        <DeleteCampusContainer campusId= {campus.id} />
      </div>
    </div>
  );
}
