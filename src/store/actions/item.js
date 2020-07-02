import * as actionTypes from './actionTypes';

export const itemSetStart = () => {
  
    return {
        type: actionTypes.ITEM_SET_START
    };
}; 
export const itemSetSuccess = (userId,itemId,name) => {
    return {
        type: actionTypes.ITEM_SET_SUCCESS,
        userId : userId,
        itemId : itemId,
        name : name

    };
};

export const itemSetFail = (error) => {
    return {
        type: actionTypes.ITEM_SET_FAIL,
        error: error
    };
};

export const itemSet = (userId) => {
    return { 
        
    };
};



