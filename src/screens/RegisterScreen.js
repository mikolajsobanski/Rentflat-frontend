import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'


function RegisterScreen({location}) {

    const redirect = location ? location.search.split('=')[1] : '/'

    return (
        <div>
        <FormContainer>
            <h1 className='text-center py-4 '>Create account</h1>
            <Form >

                <Form.Group className='py-3' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Register
                </Button>

            </Form>

            <Row className='py-5'>
                <Col>
                    Have an Account? <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row>
        </FormContainer >
        </div>
    )
}

export default RegisterScreen