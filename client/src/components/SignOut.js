import React from 'react'

function SignOut({onLogout}) {

  return (
   
    <div>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );

}

export default SignOut;