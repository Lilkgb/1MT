import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

function Header(){

  function logOutUser(){
    firebase.auth().signOut();
  }

  return(
    <div className="header">
      <Link to='/'>Home</Link>
      <h2>Welcome New User</h2>
      <button onClick={logOutUser}>Log Out</button>
    </div>
  )
}

export default Header
