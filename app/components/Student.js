import React from 'react';
import { Link } from 'react-router';

export default function Student (props) {
  console.log('hit student component!. props= ', props);

  const students = props.selectedStudent;
  return (
    <div className="student">
      <div>
        <h1>{ students.name }</h1>
        <img src={"/default-student.jpg"} className="img-thumbnail" />
    <table className='table'>
      <thead>
        <tr>
          <th>Student ID#</th>
          <th>Name</th>
          <th>Campus</th>
          <th>Email</th>

        </tr>
      </thead>
      <tbody>
        {

              <tr key={ student.id }>
                  <td>{ student.id } </td>
                  <td>{ student.name }</td>
                  <td>{ student.email }</td>
              </tr>
            }
      </tbody>
    </table>
      </div>
    </div>
  );
}
