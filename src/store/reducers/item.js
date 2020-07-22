import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../components/Share/utility';


const initialState = {
    itemsId : null,
    imagesURL: [],
    error : null,
    itemsAdded : false
}

const itemSetSuccess = (state, action) => {
    return updateObject(state, {
        itemsId : action.itemId
    });
}
const itemSetFail = (state, action) => {
    return updateObject(state, {
        error : action.error
    });
}
const addItemsToUserSuccess = (state, action) => {
    return updateObject(state, {
        itemsAdded : action.itemsAdded
    });
}
const addItemsToUserFail = (state, action) => {
    return updateObject(state, {
        error : action.error
    });
}

const uploadImageSuccess = (state, action) => {
    return updateObject(state, {
        imagesURL: action.imagesURL
    });
}
const uploadImageFail = (state, action) => {
    return updateObject(state, {
        error : action.error
    });
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_SET_SUCCESS: return itemSetSuccess(state, action);
        case actionTypes.ITEM_SET_FAIL: return itemSetFail(state, action);
        case actionTypes.UPLOAD_IMAGE_SUCCESS: return uploadImageSuccess(state, action);
        case actionTypes.UPLOAD_IMAGE_ERROR: return uploadImageFail(state, action);
        case actionTypes.ADDITEM_TO_USER_SUCCESS: return addItemsToUserSuccess(state, action);
        case actionTypes.ADDITEM_TO_USER_ERROR: return addItemsToUserFail(state, action);
        default:
            return state;
    }
}

export default reducer;