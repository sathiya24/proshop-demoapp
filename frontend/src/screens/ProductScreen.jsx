import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Ratings';
import axios from 'axios';
// import products from '../Products';

const ProductScreen = () => {
    const [product, setProduct] = useState({}); 
    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
          const { data } = await axios.get(`/api/products/${productId}`);
          setProduct(data);
        }
        fetchProduct();
    }, [productId]);
    

    // const product = products.find((p)=> p._id === productId);
  return <>
  <Link className='btn btn-light my-3' to="/">Go Back</Link>
  <Row>
    <Col md ={4}>
        <ListGroup>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
        </ListGroup>
    </Col>
    <Col md ={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col><strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Card>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col><strong>${product.countInStock > 0 ? 'Instock' : 'Out Of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </Col>
  </Row>
    </>;
};                           

export default ProductScreen;