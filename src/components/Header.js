import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import '../scss/Header.scss';

function Header(props){

  function logOutUser(){
    firebase.auth().signOut();
  }

  return(
    <div className="headerMain">
      <Link to='/'>Home</Link>
      <h2>Welcome {props.user.name}</h2>
      <button onClick={logOutUser}>Log Out</button>
    </div>
  )
}

export default Header
