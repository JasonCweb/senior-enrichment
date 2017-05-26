import React from 'react';
import {Link} from 'react-router';
import {convertStudents} from '../utils'

export default function Students (props) {

  console.log('hit students component. props= ', props);
  let students = convertStudents(props.campuses.list, props.students.list)
  console.log('uuuuuuuuuuuuuu:', students);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Student ID#</th>
          <th>Name</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          students && students.map(student => (
              <tr key={ student.id }>
                  <td>{ student.id } </td>
                  <td><Link to={`/students/${student.id}`} > { student.name }</Link></td>
                  <td>{ student.campus }</td>
              </tr>
          ))
        }
      </tbody>
    </table>
  );
}
