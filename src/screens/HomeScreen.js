import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { listOffers } from '../actions/offerActions'
import Offer from '../components/Offer'


 function HomeScreen() {
    const dispatch = useDispatch()
    const offerList = useSelector(state => state.offerList)
    const {offers, error, loading} = offerList
    
    useEffect(() => {
      dispatch(listOffers())

    },[dispatch])

  return (
    
    <div className='home-container'>
    
            <Container>
              
              <h1 className="text-center py-4">Najnowsze oferty</h1>
              <Row>
                    {Array.isArray(offers) && offers.map(offer => (
                        <Col key={offer.id} sm={12} md={6} lg={4} xl={3}>
                            <Offer offer={offer} />
                        </Col>
                    ))
                
                }
                </Row>
            
            </Container>
            
                
     
    </div>
  )
}

export default HomeScreen