import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, ITEMS_LOADING} from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('https://glacial-scrubland-19886.herokuapp.com/items').then(
        res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    )
};

export const deleteItem = id => dispatch => {
    axios.delete(`https://glacial-scrubland-19886.herokuapp.com/items/${id}`).then(
        res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
};

export const deleteAllItems = () => dispatch => {
    axios.delete('https://glacial-scrubland-19886.herokuapp.com/items').then(
        res => dispatch({
            type: DELETE_ALL_ITEMS
        }))
};

export const addItem = item => dispatch => {
    axios.post('https://glacial-scrubland-19886.herokuapp.com/items', item).then(
        res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
}