import * as actionTypes from './actionTypes';
import {addItem} from '../../api/itemApi';

export const itemSetStart = () => {
  
    return {
        type: actionTypes.ITEM_SET_START
    };
}; 
export const itemSetSuccess = (userId,itemId) => {
    return {
        type: actionTypes.ITEM_SET_SUCCESS,
        userId : userId,
        itemId : itemId       
    };
};

export const itemSetFail = (error) => {
    return {
        type: actionTypes.ITEM_SET_FAIL,
        error: error
    };
};

export const itemSet = ( item ,userId) => {
    return dispatch => {
        dispatch(itemSetStart());
        addItem(item, userId).then(response => {
        console.log("responce additem",response); 
        // dispatch(itemSetSuccess(userId,response.data.localId)) 
        })
        .catch(error => {
            dispatch(itemSetFail(error));
        })
    }
};



