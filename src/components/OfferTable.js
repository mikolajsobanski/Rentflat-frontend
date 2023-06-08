import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import '../css/singleOffer.css'


import { getOffer } from '../actions/offerActions'
import Table from 'react-bootstrap/Table';

function OfferTable({offer}) {
    const dispatch = useDispatch()

    const offerSingleGet = useSelector(state => state.offerSingleGet)
    const {loading: loadingSingleGet, error: errorSingleGet, success: successSingleGet} = offerSingleGet

    useEffect(() => {
        dispatch(getOffer(1))
    }, [dispatch, successSingleGet])

    return (
        <Table striped bordered hover className="offerDetails">
            <thead>
            <tr>
                <th className="offerTableHeader" colSpan={2}>Szczegoly</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Miasto</td>
                <td>###</td>
            </tr>
            <tr>
                <td>Adres</td>
                <td>###</td>
            </tr>
            <tr>
                <td>Cena za m2</td>
                <td>###</td>
            </tr>
            <tr>
                <td>Powierzchnia calkowita</td>
                <td>###</td>
            </tr>
            <tr>
                <td>Liczba pokoi</td>
                <td>###</td>
            </tr>
            <tr>
                <td>Dostepne od</td>
                <td>###</td>
            </tr>
            <tr>
                <td>Liczba pieter budynku</td>
                <td>###</td>
            </tr>
            <tr>
                <td>Data oddania</td>
                <td>###</td>
            </tr>
            </tbody>
        </Table>
    )
}

export default OfferTable