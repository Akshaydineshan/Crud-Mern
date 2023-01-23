import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
  const navigate=useNavigate()
  const params=useParams()
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [category,setCategory]=useState('')
  const [company,setCompany]=useState('')

  useEffect(()=>{
   
    getProductDetails()
    
  },[])


  const getProductDetails=async()=>{

    try{
      const data =await axios.get(`http://localhost:3001/api/main/oneProduct/${params.id}`)
    
      setName(data.data.product.name)
      setPrice(data.data.product.price)
      setCategory(data.data.product.category)
      setCompany(data.data.product.company)
    }catch(error){
      console.log(error)
    }
  }

  const updateProduct=async()=>{
   try{
       const data=await axios.put(`http://localhost:3001/api/main/update/${params.id}`,{
        name,price,category,company
       })
   }catch(err){
    console.log(err)
   }

  }



  return (
    <div>
    <div className='signup-main'>
      <div className='signup-page-body'>
        <div className='signup-page-head'>
          <h4 className=''>Update Product</h4>
        </div>

        <div className='inp-items'>

          <div className='inp-item'>
            <input value={name} className='mt-2 form-control' type="text" placeholder='product name' onChange={(e) => { setName(e.target.value) }}></input>
           {/* {error&&!name && <samll class="validation">invalid</samll>} */}
          </div>
          <div className='inp-item'>
            <input value={price} className='mt-2 form-control' type="text" placeholder='pice' onChange={(e) => { setPrice(e.target.value) }} ></input>
            {/* {error&&!price && <samll class="validation">invalid</samll>} */}
          </div>
          <div className='inp-item'>
            <input value={category} className='mt-2 form-control' type="text" placeholder='category' onChange={(e) => { setCategory(e.target.value) }} ></input>
            {/* {error&&!category && <samll class="validation">invalid</samll>} */}
          </div>
          <div className='inp-item'>
            <input value={company} className='mt-2 form-control' type="text" placeholder='company' onChange={(e) => { setCompany(e.target.value) }} ></input>
            {/* {error&&!company && <samll class="validation">invalid</samll>} */}
          </div>


          <div className='signup-btn mt-3'>
            <button className='Rbtn  btn btn-info form-control' onClick={updateProduct}>UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateProduct