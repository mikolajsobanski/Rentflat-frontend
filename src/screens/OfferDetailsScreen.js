import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Table, Form, Carousel, Button} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { getOffer } from '../actions/offerActions'
import OfferTable from "../components/OfferTable";
import sample_image from '../sample_image.png';
import sample_image_2 from '../sample_image_2.png';
import {useMatch} from "react-router-dom";

const submitHandler = (e) => {
    e.preventDefault()
}

function OfferDetailsScreen() {
    const dispatch = useDispatch()
    const singleOffer = useSelector(state => state.offerSingleGet)
    const {offer, loading: loadingSingleGet, success: successSingleGet, error: errorSingleGet} = singleOffer
    useEffect(() => {

        let urlElements = window.location.href.split('/')
        console.log(urlElements)
        dispatch(getOffer(urlElements[4]))
    }, [])

    const data = offer.mainPicture
    const Example = ({data}) => <img src={`data:image/jpeg;base64,${data}`} />
    return(
        <div className='base-container' >
            <Row>
                <Col s12 m7 className='leftRow'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="main-image"
                                src={`data:image/jpeg;base64,${data}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="main-image"
                                src={sample_image}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="main-image"
                                src={sample_image_2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <Container>
                        <div style={{
                            display: "flex",
                            justifyContent:"center",
                            alignItems: "center",
                            height: "100%",
                        }}>
                            <h1>
                                Opis Oferty
                            </h1>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent:"center",
                            alignItems: "center",
                            height: "100%",
                            backgroundColor: "gainsboro",
                            borderRadius: 15
                        }}>
                            <div>
                                {offer.description}
                            </div>
                        </div>
                    </Container>
                </Col>


                <Col s12 m5 className='rightRow'>
                    <Table>
                        <OfferTable offer={offer}></OfferTable>
                    </Table>
                    <Container>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='main'>
                                <Form.Label>Wyslij wiadomosc</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={4}
                                    placeholder='Twoja wiadomosc'
                                >

                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='email'>
                                <Form.Control
                                    type='text'
                                    placeholder='Adres e-mail'
                                >

                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='phone-number'>
                                <Form.Control
                                    type='text'
                                    placeholder='Numer Telefonu'
                                >

                                </Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Confirm
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default OfferDetailsScreen