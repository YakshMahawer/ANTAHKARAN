import React, { } from 'react';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';

const AfterAdminLogin = ({ setUrlMail, loggedIn, verified }) => {

  return (
    <> 
      {verified || loggedIn ? <AdminHome/> : <AdminLogin setUrlMail={setUrlMail}/>}
    </>
  );
}

export default AfterAdminLogin;