import React, {useEffect} from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiEdit3 } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import '../css/userOffer.css'
import { deleteOffer } from '../actions/offerActions'
import { useDispatch, useSelector } from 'react-redux'



function UserOffer({ offer }) {
    const dispatch = useDispatch()

    const offerDelete = useSelector(state => state.offerDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = offerDelete

    useEffect(() => {
        
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteOffer(id))
        }
        }

  return (
    
    <Card className="offerCard-user">
        <Link to={`/offers/${offer.id}`}>
            <Card.Img className='offerImage' src={offer.mainPicture} />
        </Link>

        <Card.Body>
        <Link to={`/offers/${offer.id}`}>
            <Card.Title as="div">
                <strong>Miasto:{offer.city}</strong>
            </Card.Title>
        </Link>
        <Link to={`/offers/${offer.id}`}>
            <Card.Title as="div">
                <strong>Ulica:{offer.streetAddress}</strong>
            </Card.Title>
        </Link>

        <Card.Text as="h4">
            Cena: {offer.price}
        </Card.Text>
        <Row className='userOffer-row'>
        
            <Col md={6}>
            <Link to={`/offer-update/${offer.id}`}>
            <Button variant='light' >
                <FiEdit3/>
            </Button>
        </Link>
            </Col>
            <Col md={6}>
            <Button className='delete-icon' onClick={() => deleteHandler(offer.id)}>
            <MdDeleteForever/>
            </Button>
            
            </Col>
        
       
        
        
    

        </Row>

        

        </Card.Body>
    </Card>
  )
}

export default UserOffer