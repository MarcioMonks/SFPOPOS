import React from 'react';
import { Link } from 'react-router-dom';

import './POPOSSpace.css';

const POPOSSpace = (props) => {
  const { name, image, address, hours, id } = props;
  return (
    <div className='POPOSSpace'>
      <Link to={`/details/${id}`}>
         <img src={`${process.env.PUBLIC_URL}images/${image}`} 
            width='300' 
            height='300' 
            alt='Hello'
         />
         <h1>
            <Link to={`/details/${id}`}>
               {name}
            </Link>
         </h1>
         <div>{address}</div>
         <div className='hours'>{hours}</div>
      </Link>
      
    </div>
  )
}

export default POPOSSpace;