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

export const offerListReducer = (state = { offers: [] }, action) => {
    switch (action.type) {
        case OFFER_LIST_REQUEST:
            return { loading: true, offers: [] }

        case OFFER_LIST_SUCCESS:
            return {
                loading: false,
                offers: action.payload.offers
            }

        case OFFER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const offerUserListReducer = (state = { offers: [] }, action) => {
    switch (action.type) {
        case OFFER_LIST_USER_REQUEST:
            return { loading: true, offers: [] }

        case OFFER_LIST_USER_SUCCESS:
            return {
                loading: false,
                offers: action.payload.offers
            }

        case OFFER_LIST_USER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const offerDeleteReducer = (state = { }, action) => {
    switch (action.type) {
        case OFFER_DELETE_REQUEST:
            return { loading: true, ...state }

        case OFFER_DELETE_SUCCESS:
            return {
                loading: false,
                success:true
            }

        case OFFER_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const offerSingleReducer = (state = { }, action) => {
    switch (action.type) {
        case OFFER_SINGLE_REQUEST:
            return {
                loading: true,
                ...state
            }

        case OFFER_SINGLE_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case OFFER_SINGLE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const offerFilterListReducer = (state = { offers: [] }, action) => {
    switch (action.type) {
        case OFFER_FILTER_LIST_REQUEST:
            return { loading: true, offers: [] }

        case OFFER_FILTER_LIST_SUCCESS:
            return {
                loading: false,
                offers: action.payload.offers
            }

        case OFFER_FILTER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}