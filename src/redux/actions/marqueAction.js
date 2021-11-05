import Axios from "axios";
import { FETCH_MARQUES_REQUEST, FETCH_MARQUES_SUCCESS, FETCH_MARQUES_FAILED } from "../types";

import { SAVE_MARQUES_REQUEST, SAVE_MARQUES_SUCCESS, SAVE_MARQUES_FAILED } from "../types";

import { RECHERCHE_SUCCESS,FETCH_FILTER_SUCCESS, EDIT_MARQUES_REQUEST, EDIT_MARQUES_SUCCESS, EDIT_MARQUES_FAILED } from "../types";

export const fetchMarques = () => async (dispatch) => {


    dispatch({
        type: FETCH_MARQUES_REQUEST,
    });
    try {
        const { data } = await Axios.get("https://innofab-server.herokuapp.com/marque/get")
        console.log(data);
        dispatch({
            type: FETCH_MARQUES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({ type: FETCH_MARQUES_FAILED, payload: error.message });

    }
};





export const editMarques = (code, nom) => async (dispatch) => {


    dispatch({
        type: EDIT_MARQUES_REQUEST,
    });
    try {
        await Axios.put("https://innofab-server.herokuapp.com/marque/edit",{"nom":nom,"code":code})
        dispatch({
            type: EDIT_MARQUES_SUCCESS,
        });
    } catch (error) {
        dispatch({ type: EDIT_MARQUES_FAILED, payload: error.message });

    }
};


export const saveMarques = (nom) => async (dispatch) => {

console.log(nom)
    dispatch({
        type: SAVE_MARQUES_REQUEST,
    });
    try {
        await Axios.post("https://innofab-server.herokuapp.com/marque/post", {"nom":nom})
        dispatch({
            type: SAVE_MARQUES_SUCCESS,
        });
    } catch (error) {
        dispatch({ type: SAVE_MARQUES_FAILED, payload: error.message });

    }
};


export const filterMarques = (filtredItem) => async (dispatch) => {
    console.log("3")
    filtredItem.data.sort(function (a, b) {
        var textA = a.nom.toUpperCase();
        var textB = b.nom.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    dispatch({
        type: FETCH_FILTER_SUCCESS,
        payload: filtredItem,
    });

};


export const rechercheMarque = (filtredItem,value) => async (dispatch) => {
    console.log(filtredItem)


    const { data } = await Axios.get("https://innofab-server.herokuapp.com/marque/get")
    console.log(data);
var fil1={"data":""}
     fil1.data= data.data.filter(function(item){
        return item.nom.toLowerCase().search(value.toLowerCase()) !== -1;
      });

console.log(fil1)
    dispatch({
        type: RECHERCHE_SUCCESS,
        payload: fil1,
    });

};