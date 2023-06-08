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