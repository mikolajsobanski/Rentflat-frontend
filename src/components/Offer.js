import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {BiArea} from 'react-icons/bi'
import '../css/offer.css'

function Offer({ offer }) {

  return (
    <Card className="offerCard">
        <Link to={`/offer/${offer.id}`}>
            <Card.Img className='offerImage' src={offer.mainPicture} />
        </Link>
    
        <Card.Body>
        <Link to={`/offer/${offer.id}`}>
            <Row className='offer-row'>
                <Col md={5}>  
                    <div className="offer-rowItem">
                        <BiArea/>
                         {offer.area} m2
                    </div>
                </Col>  
           
                <Col  md={3}>
                <div className="offer-rowItem">
                    <MdOutlineMeetingRoom/>
                    {offer.roomCount}
                </div>
                </Col>
            </Row>
        </Link>
            
        <Card.Text as="h4">
            {offer.city} 
        </Card.Text>
    
            
        <Card.Title as="div">
            <strong>{offer.streetAddress} {offer.district}</strong>
        </Card.Title>

        
        
        

        <Card.Text className='offer-price' as="h3">
            {offer.price} zł
        </Card.Text>

        </Card.Body>
        <Link className='link-gosee' to={`/offer/${offer.id}`}>
        <div className='goSee'>Zobacz oferte</div>
        </Link>
        
    </Card>
  )
}

export default Offer