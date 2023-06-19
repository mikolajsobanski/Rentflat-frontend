import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


const FilterPanel = ({ onSearch }) => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [areaFrom, setAreaFrom] = useState('');
  const [areaTo, setAreaTo] = useState('');
  const [roomCountFrom, setRoomCountFrom] = useState('');
  const [roomCountTo, setRoomCountTo] = useState('');
  const [marketType, setMarketType] = useState('');
  const [district, setDistrict] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ city,streetAddress,postalCode,priceFrom,priceTo,areaFrom,areaTo,roomCountFrom,roomCountTo,marketType,district,availableFrom,availableUntil });
    console.log(availableFrom,availableUntil)
  };

  return (
    <Form onSubmit={handleSearch}>
        <Row>
            <Col md={3}>
            <Form.Group className='py-3' controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                        </Form.Control>
            </Form.Group>
            </Col>
            <Col md={3}>
            <Form.Group className='py-3' controlId='streetAddress'>
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter street address'
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>

            <Col md={3}>
            <Form.Group className='py-3' controlId='postalCode'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter postal code'
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>

            <Col md={3}>
            <Form.Group className='py-3' controlId='district'>
                        <Form.Label>District</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter district'
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>

            
        </Row>

        <Row>
            <Col md={3}>
            <Form.Group className='py-3' controlId='marketType'>
                        <Form.Label>Market type</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter market type'
                            value={marketType}
                            onChange={(e) => setMarketType(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>

            <Col md={2}>
            <Form.Group className='py-3' controlId='area'>
                        <Form.Label>Area From</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter area'
                            value={areaFrom}
                            onChange={(e) => setAreaFrom(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>
            <Col md={2}>
            <Form.Group className='py-3' controlId='area'>
                        <Form.Label>Area To</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter area'
                            value={areaTo}
                            onChange={(e) => setAreaTo(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>
            <Col md={2}>
            <Form.Group className='py-3' controlId='roomCount'>
                        <Form.Label>Room count</Form.Label>
                        <Form.Control
                            type='number'
                            min={0}
                            placeholder='Enter room count'
                            value={roomCountFrom}
                            onChange={(e) => setRoomCountFrom(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>
            <Col md={2}>
            <Form.Group className='py-3' controlId='roomCount'>
                        <Form.Label>Room count</Form.Label>
                        <Form.Control
                            type='number'
                            min={0}
                            placeholder='Enter room count'
                            value={roomCountTo}
                            onChange={(e) => setRoomCountTo(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>
        </Row>


        <Row className='price-row'>
            <Col md={2}>
            <Form.Group className='py-3' controlId='availableFrom'>
                        <Form.Label>Available from</Form.Label>
                        <Form.Control
                            type='date'
                            placeholder='Enter available from date'
                            value={availableFrom}
                            onChange={(e) => setAvailableFrom(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    
            </Col>
            <Col md={2}>
            <Form.Group className='py-3' controlId='availableUntil'>
                        <Form.Label>Available until</Form.Label>
                        <Form.Control
                            type='date'
                            placeholder='Enter available until date'
                            value={availableUntil}
                            onChange={(e) => setAvailableUntil(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
            </Col>
            <Col md={3}>
            <Form.Group className='py-3' controlId='priceFrom'>
            <Form.Label>Price From</Form.Label>
            <Form.Control
                type="number"
                placeholder="Enter Price From"
                min={0}
                step="0.01"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
            />
            </Form.Group>
            
            </Col>
            <Col md={3}>
            <Form.Group className='py-3' controlId='priceTo'>
            <Form.Label>Price To</Form.Label>
            <Form.Control
                type="number"
                placeholder="Enter Price To"
                min={0}
                step="0.01"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
            />
            </Form.Group>
            
            </Col>
            <Col md={1}>
                <Form.Group className='py-3' controlId='submit'>
                <Form.Label>Submit</Form.Label>
                <Button variant='outline-success' class="btn btn-outline-secondary" type="submit">Search</Button>
                </Form.Group>
            
            
            </Col>
        
      
      

        </Row>
      
    </Form>
  );
};

export default FilterPanel;
