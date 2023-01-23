import axios from 'axios';
import React from 'react'
import {Card} from "react-bootstrap"
import { useNavigate,Link} from 'react-router-dom';

function ProductCard({item}) {
    const navigate =useNavigate()

    const deleteProduct=async(id)=>{
        console.log(id);
        try{
          const result =await axios.delete(`http://localhost:3001/api/main/deleteproduct/${id}`)
          window.location.reload()
        }catch(error){
            console.log(error)
        }


    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className='text-center'>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                <Card.Text>
                    {item.company}
                </Card.Text>
                <Card.Text>
                    {item.price}
                </Card.Text>
                <Card.Link onClick={()=>{
                    deleteProduct(item._id)
                }}>Delete</Card.Link>
                <Link to={`/updateproduct/${item._id}`}>Update</Link>


            </Card.Body>
        </Card>
    )
}

export default ProductCard