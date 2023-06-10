import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom';
import { addOffer } from '../actions/offerActions'
import Message from "../components/Message";
import Loader from "../components/Loader";

function OfferAddScreen({location, history}) {

    //{'city':city, 'streetAddress': streetAddress, 'postalCode': postalCode, 'price':price, 'area':area, 'roomCount':roomCount,
    //                 'marketType':marketType, 'description':description, 'district':district, 'mainPicture':mainPicture, 'allPictures':allPictures,
    //                 'owner':owner, 'buildingDetails':buildingDetails, 'availableFrom':availableFrom, 'availableUntil':availableUntil},

    const [city, setCity] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [price, setPrice] = useState('')
    const [area, setArea] = useState('')
    const [roomCount, setRoomCount] = useState('')
    const [marketType, setMarketType] = useState('')
    const [description, setDescription] = useState('')
    const [district, setDistrict] = useState('')
    const [mainPicture, setMainPicture] = useState('')
//    const [allPictures, setAllPictures] = useState('')
    const [owner, setOwner] = useState('')
    const [buildingDetails, setBuildingDetails] = useState('')
    const [availableFrom, setAvailableFrom] = useState('')
    const [availableUntil, setAvailableUntil] = useState('')
    const [message, setMessage] = useState('')

    const redirect = location ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const reload = useNavigate()
    const offerAdd = useSelector(state => state.offerAdd)
    const { error, loading, offerInfo } = offerAdd

    useEffect(() => {
        if (offerInfo) {
            history.push(redirect)
        }
    }, [history, offerInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (availableUntil > availableFrom) {
            setMessage('Incorrect rent dates!')
        } else {
            dispatch(addOffer(city, streetAddress, postalCode, price, area, roomCount, marketType, description, district,
                mainPicture, /*allPictures,*/ owner, buildingDetails, availableFrom, availableUntil))
        }
        reload('/')
    }

    return (
        <div>
            <FormContainer>
                <h1 className='text-center py-4 '>Add new offer</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group className='py-3' controlId='city'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='streetAddress'>
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter street address'
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='postalCode'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter postal code'
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='price'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            min={0}
                            placeholder='Enter price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='area'>
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter area'
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='roomCount'>
                        <Form.Label>Room count</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            min={0}
                            placeholder='Enter room count'
                            value={roomCount}
                            onChange={(e) => setRoomCount(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='marketType'>
                        <Form.Label>Market type</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter market type'
                            value={marketType}
                            onChange={(e) => setMarketType(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='description'>
                        <Form.Label>Offer description</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='district'>
                        <Form.Label>District</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter district'
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='mainPicture'>
                        <Form.Label>Main picture</Form.Label>
                        <Form.Control
                            required
                            type='file'
                            placeholder='Select main picture'
                            value={mainPicture}
                            onChange={(e) => setMainPicture(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='owner'>
                        <Form.Label>Owner's id</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Enter owner id'
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='buildingDetails'>
                        <Form.Label>Building details id</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Enter building details id'
                            value={buildingDetails}
                            onChange={(e) => setBuildingDetails(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='availableFrom'>
                        <Form.Label>Available from</Form.Label>
                        <Form.Control
                            required
                            type='date'
                            placeholder='Enter available from date'
                            value={availableFrom}
                            onChange={(e) => setAvailableFrom(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='availableUntil'>
                        <Form.Label>Available until</Form.Label>
                        <Form.Control
                            required
                            type='date'
                            placeholder='Enter available until date'
                            value={availableUntil}
                            onChange={(e) => setAvailableUntil(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Confirm
                    </Button>


                </Form>
            </FormContainer>
        </div>
    )
}

export default OfferAddScreen;