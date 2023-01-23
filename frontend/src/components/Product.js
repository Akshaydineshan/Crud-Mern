import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Card, Container, Row, Col } from "react-bootstrap"
import ProductCard from './ProductCard'

function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProduct()

  }, [])

  const getAllProduct = async () => {
    try {
      const data = await axios.get('http://localhost:3001/api/main/allproduct')

      setProducts(data.data.product)
      console.log(data.data.product)


    } catch (error) {
      console.log(error);
    }
  }

  const searchValue=async(event)=>{
    console.log(event.target.value)
    let key =event.target.value
    try{
      const data =await axios(`http://localhost:3001/api/main/search/${key}`)
     
      setProducts(data.data)
    }catch(err){
      console.log(err)
    }
   

  }




  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}></Col>
        <Col md={6}>
          <input type="text" className='form-control' placeholder='Search procduct' onChange={searchValue}></input>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row className='mt-5'>

        {products.map((product) => (
          <Col md={4} >
           <ProductCard item={product} />
          </Col>
        ))}

      </Row>
    </Container>





  )
}


export default Product