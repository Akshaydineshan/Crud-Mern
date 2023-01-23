import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddProduct() {
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [category,setCategory]=useState('')
  const [company,setCompany]=useState('')
  const [error,setError]=useState(false)



  const addProduct=async()=>{
    
    const userId=JSON.parse(localStorage.getItem("user"))._id

    if(!name | !price |category | !company){
      setError(true)
    }
    
    try{
      const result =await axios.post('http://localhost:3001/api/main/addproduct',{name,price,category,company,userid:userId})
      console.log(result);
      if(result)navigate('/')
    }catch(err){
      console.log(err)
    }
  

  }



  return (
    <div>
      <div className='signup-main'>
        <div className='signup-page-body'>
          <div className='signup-page-head'>
            <h4 className=''>Add Product</h4>
          </div>

          <div className='inp-items'>

            <div className='inp-item'>
              <input value={name} className='mt-2 form-control' type="text" placeholder='product name' onChange={(e) => { setName(e.target.value) }}></input>
             {error&&!name && <samll class="validation">invalid</samll>}
            </div>
            <div className='inp-item'>
              <input value={price} className='mt-2 form-control' type="text" placeholder='pice' onChange={(e) => { setPrice(e.target.value) }} ></input>
              {error&&!price && <samll class="validation">invalid</samll>}
            </div>
            <div className='inp-item'>
              <input value={category} className='mt-2 form-control' type="text" placeholder='category' onChange={(e) => { setCategory(e.target.value) }} ></input>
              {error&&!category && <samll class="validation">invalid</samll>}
            </div>
            <div className='inp-item'>
              <input value={company} className='mt-2 form-control' type="text" placeholder='company' onChange={(e) => { setCompany(e.target.value) }} ></input>
              {error&&!company && <samll class="validation">invalid</samll>}
            </div>


            <div className='signup-btn mt-3'>
              <button className='Rbtn  btn btn-info form-control' onClick={addProduct}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct