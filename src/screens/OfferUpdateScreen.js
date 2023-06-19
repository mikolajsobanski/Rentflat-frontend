import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom';
import { updateOffer } from '../actions/offerActions'
import Message from "../components/Message";
import Loader from "../components/Loader";

function OfferUpdateScreen({location, history}) {


    const [id, setId] = useState('')
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
    const [allPictures, setAllPictures] = useState('')
    const [buildingDetails, setBuildingDetails] = useState('')
    const [availableFrom, setAvailableFrom] = useState('')
    const [availableUntil, setAvailableUntil] = useState('')
    const [message, setMessage] = useState('')

    const redirect = location ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const reload = useNavigate()
    const offerAdd = useSelector(state => state.offerUpdate)
    const { error, loading, offerInfo } = offerAdd

    useEffect(() => {
        if (offerInfo) {
            history.push(redirect)
        }
    }, [history, offerInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
         if (availableUntil < availableFrom) {
             setMessage('Incorrect rent dates!')
         } else {
                dispatch(updateOffer(id, city, streetAddress, postalCode, price, area, roomCount, marketType, description, district,
                mainPicture, allPictures, buildingDetails, availableFrom, availableUntil))
        }
        console.log(id, city, streetAddress, postalCode, price, area, roomCount, marketType, description, district,
            mainPicture, allPictures, buildingDetails, availableFrom, availableUntil)
        //reload('/')
    }

    return (
        <div>
            <FormContainer>
                <h1 className='text-center py-4 '>Update an offer</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group className='py-3' controlId='owner id'>
                        <Form.Label>Owner's id</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter new owner id'
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='city'>
                        <Form.Label>Miasto</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter new city'
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
                            placeholder='Enter new street address'
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
                            placeholder='Enter new postal code'
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
                            placeholder='Enter new price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='area'>
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Enter new area'
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
                            placeholder='Enter new room count'
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
                            placeholder='Enter new market type'
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
                            placeholder='Enter new description'
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
                            placeholder='Enter new district'
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
                            placeholder='Select new main picture'
                            value={mainPicture}
                            onChange={(e) => setMainPicture(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='allPictures'>
                        <Form.Label>Other pictures</Form.Label>
                        <Form.Control
                            required
                            type='file' multiple
                            accept='application/pdf, image/png'
                            placeholder='Select new other pictures'
                            value={allPictures}
                            onChange={(e) => setAllPictures(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='py-3' controlId='buildingDetails'>
                        <Form.Label>Building details id</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Enter new building details id'
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
                            placeholder='Enter new available from date'
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
                            placeholder='Enter new available until date'
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

export default OfferUpdateScreen;