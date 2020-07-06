import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../components/Share/utility';


const initialState = {
    userId : null,
    itemsId : [],
    error : null
}

const itemSetSuccess = (state, action) => {
    return updateObject(state, {
        userId : action.userId,
        itemsId : state.itemsId.concat(action.itemId)
    });
}
const itemSetFail = (state, action) => {
    return updateObject(state, {
        error : action.error
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_SET_SUCCESS: return itemSetSuccess(state, action);
        case actionTypes.ITEM_SET_FAIL: return itemSetFail(state, action);
        default:
            return state;
    }
}

export default reducer;