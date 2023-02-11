import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AdminHome from './AdminHome';


const AdminLogin = ({ setUrlMail }) => {

  //const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [correctDetail, setCorrectDetail] = useState(true)
  const [errormessage, setErrorMessage] = useState('')

  const postData = async (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setCorrectDetail(false)
      setErrorMessage('Please provide the details')
      return
    }

    const res = await fetch('http://localhost:8000/admin/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })


    const data = await res.json()

    if (data === 'password matched') {
      return <AdminHome/>
    } else if (data === 'Wrong Cradentials') {
      setCorrectDetail(false)
      setErrorMessage('Wrong Credentials')
      return
    } else if (data === 'Wrong Cradentials') {
      setCorrectDetail(false)
      setErrorMessage('Unauthorized Access')
      return
    }

  }

  return (
    <>
      <div className="container">

        <div className="login-box">
          <div className="title">
            <h1>ADMIN</h1>
          </div>


          <form className='login-form' method='post'>
            <div className="textbox">
              <input
                type="email"
                className='input'
                placeholder='Email'
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                name='email' />
              <input
                type="password"
                required
                placeholder='Password'
                className='input'
                autoComplete='off'
                onChange={(e) => setPassword(e.target.value)}
                name='password' />
              <div className='button-container'>
                <button type='submit' className='login-btn' style={{background:"white"}} onClick={postData}>
                  LOG IN
                </button>
              </div>

            </div>
          </form>
          <div className="loginError">
          {!correctDetail ? `${errormessage}` : ''}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;