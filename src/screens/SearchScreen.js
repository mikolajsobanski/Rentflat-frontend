import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { listFilterOffers } from '../actions/offerActions'
import Offer from '../components/Offer'
import FilterPanel from '../components/FilterPanel'
import '../css/searchScreen.css'

 function SearchScreen() {
    const dispatch = useDispatch()
    const offersFilterList = useSelector(state => state.offersFilterList)
    const { offers, error, loading } = offersFilterList
    
    const handleSearch = (params) => {
        dispatch(listFilterOffers(params))
      };

  return (
    
    <div className='home-container'>
    
            <Container>
                <div className='filterPanel-div'>
                    <FilterPanel onSearch={handleSearch}/>
                </div>
                

              <div>
              <div className='searchScreen-results'>
                
                <Row>
                    {Array.isArray(offers) ? offers.map(offer => (
                        <Col key={offer._id} sm={12} md={6} lg={4} xl={3}>
                            <Offer offer={offer} />
                        </Col>
                        ))
                            :
                            null
                    }
                </Row>
                </div>
              </div>
              
            
            </Container>
            
                
     
    </div>
  )
}

export default SearchScreen