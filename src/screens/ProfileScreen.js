import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button,ListGroup, Row, Col,Table, Container} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import UserOffer from '../components/UserOffer'
import { listUserOffers } from '../actions/offerActions'


function ProfileScreen() {
  const dispatch = useDispatch()
  const offerUserList = useSelector(state => state.offerUserList)
  const {offers, loading, error} = offerUserList

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const offerDelete = useSelector(state => state.offerDelete)
  const {loading: loadingDelete, error:errorDelete, success:successDelete} = offerDelete

  let history = useNavigate()

  useEffect(() =>{
    if(!userInfo){
      history('/login')
    }else{
      dispatch(listUserOffers())
    }
  },[dispatch, successDelete])
      
 

  return (

    <Container>
    <Row>
        <Col md={3}>
        <LinkContainer to='/offer-add'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Dodaj oferte</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/search'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Szukaj</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/settings'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Ustawienia konta</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/help'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Pomoc</Nav.Link>
        </LinkContainer>
        </Col>
        
        <Col md={9}>
            
            <div className='myProfile-box'>
                                <thead>
                                    <tr className='myProfile-title'>
                                        
                                        <h2 className="text-center py-4">Twoje oferty</h2>
                                    </tr>
                                </thead>

                                <tbody>
                              
                                            <Row>
                                              {offers && offers.map(offer => (
                                                        <Col key={offer.id}>
                                                            <UserOffer offer={offer} />
                                                        </Col>
                                                    ))
                                                
                                                }
                                            
                                            
                                            </Row>
                                            
                                        
                                        
                                        
                                            
                                
                                </tbody>
            
            </div>

        </Col>
    </Row>
    </Container>
  )
}

export default ProfileScreen