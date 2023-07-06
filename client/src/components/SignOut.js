import React from 'react'
import { Link } from 'react-router-dom'

function SignOut({onLogout}) {

  return (
   
    <div>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <Link to="/">
      <button onClick={onLogout}>Logout</button>
      </Link>
    </div>
  );

}

export default SignOut;