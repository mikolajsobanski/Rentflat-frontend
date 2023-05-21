import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Offer({ offer }) {

  return (
    <Card className="offerCard">
        <Link to={`/offer/${offer._id}`}>
        <Card.Title as="div">
                <strong>{offer.city}</strong>
            </Card.Title>
        </Link>

        <Card.Body>
        <Link to={`/offer/${offer._id}`}>
            <Card.Title as="div">
                <strong>{offer.Address}</strong>
            </Card.Title>
        </Link>
        <Card.Text as="div">
            <div className="my-3">
               {offer.rating}
            </div>

        </Card.Text>

        <Card.Text as="h3">
            ${offer.price}
        </Card.Text>

        </Card.Body>
    </Card>
  )
}

export default Offer