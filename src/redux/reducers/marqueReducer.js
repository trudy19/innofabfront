
import { FETCH_MARQUES_REQUEST, FETCH_MARQUES_SUCCESS, FETCH_MARQUES_FAILED } from "../types";

import { SAVE_MARQUES_REQUEST, SAVE_MARQUES_SUCCESS, SAVE_MARQUES_FAILED } from "../types";

import { RECHERCHE_SUCCESS,FETCH_FILTER_SUCCESS, EDIT_MARQUES_REQUEST, EDIT_MARQUES_SUCCESS, EDIT_MARQUES_FAILED } from "../types";


export const marquesReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MARQUES_REQUEST:
            return { loading: true,success:false };
        case FETCH_MARQUES_SUCCESS:
            return { marques: action.payload ,success:true};
        case FETCH_MARQUES_FAILED:
            return { loading: false, error: action.payload };
        case FETCH_FILTER_SUCCESS:
            return { marques: action.payload ,success:true};
    case RECHERCHE_SUCCESS:
         return  { marques:action.payload};

        default:
            return state;
    }
};


export const savemarquesReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_MARQUES_REQUEST:
            return { loading: true };
        case SAVE_MARQUES_SUCCESS:
            return { success: true, loading: false };
        case SAVE_MARQUES_FAILED:
            return { loading: false, success: false };

        default:
            return state;
    }
};




export const editmarquesReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_MARQUES_REQUEST:
            return { loading: true };
        case EDIT_MARQUES_SUCCESS:
            return { success: true, loading: false };
        case EDIT_MARQUES_FAILED:
            return { loading: false, success: false };
        default:
            return state;
    }
};

