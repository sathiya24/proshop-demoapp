import { Card } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Ratings'
// import product from '../Products';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to ={`/product/${product._id}`}>
            </Link>

    <Card.Body>
    <Link to ={`/product/${product._id}`}> 
    <Card.Title as="div">
        <strong>{product.name}</strong>
    </Card.Title>
    </Link>
    <Card.Text as='div'>
      <Rating 
      value={product.rating} text={`${product.numReviews}Reviews`}/>
    </Card.Text>
    <Card.Text as="h3">
        ${product.price}
    </Card.Text>
    <Card></Card>
    </Card.Body>
    </Card>
  )
}

export default Product