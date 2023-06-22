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

    OFFER_ADD_REQUEST,
    OFFER_ADD_SUCCESS,
    OFFER_ADD_FAIL,

    OFFER_UPDATE_REQUEST,
    OFFER_UPDATE_SUCCESS,
    OFFER_UPDATE_FAIL,
} from '../constants/offerConstants'

export const listOffers = () => async(dispatch) => {
    try {
        dispatch({type: OFFER_LIST_REQUEST})
        const { data } = await axios.get(`http://localhost:8080/offers`)
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
        const { data } = await axios.get(`http://localhost:8080/offers/${id}`)
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
            `http://localhost:8080/offers/customer`,
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
            `http://localhost:8080/offers/delete/${id}`,
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
        const { data } = await
        axios.get('http://localhost:8080/offers/filter',
            {params: {city: params.city, streetAddress: params.streetAddress, postalCode: params.postalCode, district: params.district, marketType: params.marketType, areaFrom: params.areaFrom, areaTo: params.areaTo, roomCountFrom: params.roomCountFrom, roomCountTo: params.roomCountTo, priceFrom: params.priceFrom, priceTo: params.priceTo}, })
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

export const addOffer = (city, streetAddress, postalCode, price, area, roomCount, marketType, description, district, mainPicture,
                         buildingDetails, availableFrom, availableUntil) => async(dispatch, getState) => {
    try{
        dispatch({
            type: OFFER_ADD_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

         const config = {
             headers: {
                 //'Content-Type': 'application/json',
                 Authorization: `Bearer ${userInfo.token}`
             }
         }

        const formData = new FormData()
        formData.append('offer', new Blob([JSON.stringify({
            "city": city,
            "streetAddress": streetAddress,
            "postalCode": postalCode,
            "price": price,
            "area": area,
            "roomCount": roomCount,
            "marketType": marketType,
            "description": description,
            "district": district,
            "buildingDetails": buildingDetails,
            "availableFrom": availableFrom,
            "availableUntil": availableUntil
        })], {
            type: "application/json"
        }))
        formData.append('image', new Blob([mainPicture], {
            type: "multipart/form-data"
        }))


        console.log(formData)

        const {data} = await axios.post(
            'http://localhost:8080/offers',
            formData,
            config
        )

        dispatch({
            type:OFFER_ADD_SUCCESS,
            payload:data
        })

        localStorage.setItem('offerInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type:OFFER_ADD_FAIL,

            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateOffer = (city, streetAddress, postalCode, price, area, roomCount, marketType, description, district, mainPicture,
                            buildingDetails, availableFrom, availableUntil) => async(dispatch, getState) => {
    try{
        dispatch({
            type: OFFER_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                //'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const formData = new FormData()
        formData.append('offer', new Blob([JSON.stringify({
            "city": city,
            "streetAddress": streetAddress,
            "postalCode": postalCode,
            "price": price,
            "area": area,
            "roomCount": roomCount,
            "marketType": marketType,
            "description": description,
            "district": district,
            "buildingDetails": buildingDetails,
            "availableFrom": availableFrom,
            "availableUntil": availableUntil
        })], {
            type: "application/json"
        }))
        formData.append('image', new Blob([mainPicture], {
            type: "multipart/form-data"
        }))

        const {data} = await axios.put(
            'http://localhost:8080/offers',
            formData,
            config
        )

        dispatch({
            type:OFFER_UPDATE_SUCCESS,
            payload:data
        })

        localStorage.setItem('offerInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type:OFFER_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}