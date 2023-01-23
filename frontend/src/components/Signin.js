import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = async () => {
    console.log(email, password);
    try {

      let data = await axios.post('http://localhost:3001/api/account/signin', {
       email:email,password:password
       
        // headers: { 'Content-Type': 'application/json' }
      })
      // data = await data.json()
      console.log("login",data.data)
      if (data.data.success) {
        localStorage.setItem("user", JSON.stringify(data.data.user))
        localStorage.setItem("token", JSON.stringify(data.data.token))
        navigate('/')
      }

    } catch (err) {
      console.log(err)
    }


  }


  return (
    <div className='signup-main'>
      <div className='signup-page-body'>
        <div className='signup-page-head'>
          <h4 className=''>Signin </h4>
        </div>

        <div className='inp-items'>

          <div className='inp-item'>
            <input value={email} className='mt-2 form-control' type="text" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }}></input>
          </div>
          <div className='inp-item'>
            <input value={password} className='mt-2 form-control' type="text" placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} ></input>
          </div>


          <div className='signup-btn mt-3'>
            <button className='Rbtn  btn btn-info form-control' onClick={login}>Signin</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin