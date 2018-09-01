import React from 'react';

const House = (props) => {
return(
    <div>
        {props.Houses}
       <div> name: {props.name}</div>
         <div> adress: {props.address}</div>
          city: {props.city}
          state: {props.state}
          zip: {props.zip}
        <button>Delete</button>
    </div>
)}

export default House;