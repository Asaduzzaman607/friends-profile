import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faPhoneAlt , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = (props) => {
    const {email,phone}=props.user
    const{title, first, last} = props.user.name
    const {large} = props.user.picture
    const {number} = props.user.location.street;
    return (
       <section className="userContainer">
           
            <div className='user-details'>     
           <img src={large} alt=""/>
           <h3>{title} {first} {last}</h3>
               <p><FontAwesomeIcon className="smallIcon" icon={faPhoneAlt } />Phone: {phone}</p>
               <p><FontAwesomeIcon className="smallIcon" icon={faEnvelope} /> Email: {email}</p>
               <h4>Salary: {number}</h4>
              <button onClick={() =>props.handleAddUsers(props.user)}><FontAwesomeIcon className="smallIcon" icon={faUserPlus} />Add Friend</button>
       </div>
       </section>
    );
};

export default Users;