import axios from 'axios'
import {
    OFFER_LIST_REQUEST,
    OFFER_LIST_SUCCESS,
    OFFER_LIST_FAIL,

    OFFER_LIST_USER_REQUEST,
    OFFER_LIST_USER_SUCCESS,
    OFFER_LIST_USER_FAIL,

    OFFER_DELETE_REQUEST,
    OFFER_DELETE_SUCCESS,
    OFFER_DELETE_FAIL,

    OFFER_SINGLE_REQUEST,
    OFFER_SINGLE_SUCCESS,
    OFFER_SINGLE_FAIL,

    OFFER_FILTER_LIST_REQUEST,
    OFFER_FILTER_LIST_SUCCESS,
    OFFER_FILTER_LIST_FAIL,
} from '../constants/offerConstants'

export const listOffers = () => async(dispatch) => {
    try {
        dispatch({type: OFFER_LIST_REQUEST})
        const { data } = await axios.get(`offers/`)
        dispatch({
            type:OFFER_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:OFFER_LIST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const getOffer = (id) => async(dispatch) => {
    try {
        dispatch({type: OFFER_SINGLE_REQUEST})
        const { data } = await axios.get(`offers/${id}`)
        dispatch({
            type: OFFER_SINGLE_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: OFFER_SINGLE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listUserOffers = () => async(dispatch, getState) => {
    try {
        dispatch({type: OFFER_LIST_USER_REQUEST})

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `offers/customer`,
            config
            )

        dispatch({
            type: OFFER_LIST_USER_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: OFFER_LIST_USER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const deleteOffer = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: OFFER_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/offers/delete/${id}/`,
            config
        )

        dispatch({
            type: OFFER_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: OFFER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listFilterOffers = (params) => async(dispatch) => {
    try {
        dispatch({type: OFFER_FILTER_LIST_REQUEST})
        console.log(params.city,params.streetAddress,params.postalCode,params.district,params.marketType,params.areaFrom,params.areaTo,params.roomCountFrom,params.roomCountTo,params.avalibleFrom,params.avalibleUntil, params.priceFrom,params.priceTo)
        const { data } = await 
        axios.get(`http://localhost:8080/offers/filter?city=${params.city}&streetAddress=${params.streetAddress}&postalCode=${params.postalCode}&priceFrom=${params.priceFrom}&priceTo=${params.priceTo}&areaFrom=${params.areaFrom}&areaTo=${params.areaTo}&roomCountFrom=${params.roomCountFrom}&roomCountTo=${params.roomCountTo}&marketType=${params.marketType}&district=${params.district}&availableFrom=${params.avalibleFrom}&availableUntil=${params.avalibleUntil}`)
        dispatch({
            type:OFFER_FILTER_LIST_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({
            type:OFFER_FILTER_LIST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}