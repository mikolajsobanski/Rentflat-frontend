import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'


function LoginScreen({location}) {

    const redirect = location ? location.search.split('=')[1] : '/'
    
    return (
        <div>
        
       <FormContainer>
            <h1 className='text-center py-4'>Sign In</h1>
            
            <Form >
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group className='py-4' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        
                    >

                    </Form.Control>
                </Form.Group>

                <Button  type ='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>
            
            <Row className='py-5'>
                <Col>
                    New Customer? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                        </Link>
                </Col>
            </Row>
            
       </FormContainer>
       </div>
    )
}

export default LoginScreen