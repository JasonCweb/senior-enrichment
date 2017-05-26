import React from 'react';
import {Link} from 'react-router';

export default function Campuses (props) {

  const campuses = props.campuses;
  console.log('hit campuses component. props= ', props);
  return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          campuses && campuses.map(campus => (
            <div className="col-xs-4 col-md-4 col-lg-4 col-xl-4" key={ campus.id }>
              <Link className="thumbnail" to={`/campuses/${campus.id}`}>
               <img src="/default-campus.jpg" />
               <h3><span>{ campus.name }</span></h3>
                <div className="caption">
                    <span>{ campus.nickname }</span>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
