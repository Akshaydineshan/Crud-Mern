import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        let auth = localStorage.getItem("user")
        if (auth) {
            navigate('/')
        }
    }, [])

    //Signup btn click
    const collectData = async () => {

        console.log(name, email, password)

        try {
            let result = await fetch("http://localhost:3001/api/account/signup",
                {
                    method: 'post',
                    // mode: "cors",
                    body: JSON.stringify({ name, email, password }),
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            result = await result.json()
            console.log("data", result)
            if (result.success) {
                localStorage.setItem("user", JSON.stringify(result.user))
                localStorage.setItem("token", JSON.stringify(result.token))
                navigate('/')
            }


        } catch (error) {
            console.log(error)
        }




    }


    return (
        <div className='signup-main'>
            <div className='signup-page-body'>
                <div className='signup-page-head'>
                    <h4 className=''>Signup </h4>
                </div>

                <div className='inp-items'>
                    <div className='inp-item'>
                        <input value={name} className='mt-3 form-control' type="text" placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className='inp-item'>
                        <input value={email} className='mt-2 form-control' type="text" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className='inp-item'>
                        <input value={password} className='mt-2 form-control' type="text" placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} ></input>
                    </div>


                    <div className='signup-btn mt-3'>
                        <button className='Rbtn  btn btn-info form-control' onClick={collectData}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup