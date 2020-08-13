import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../components/Share/utility';


const initialState = {
    itemsId : null,
    imagesURL: [],
    error : null,
    itemsAdded : false,
    isLoading : false,
    // downloadedImgURL : null
    downloadedImgURL : []
}

const setIsLoading = (state, action) => {
    return updateObject(state, {
        isLoading : action.isLoading
    });
}

const itemSetSuccess = (state, action) => {
    return updateObject(state, {
        itemsId : action.itemId,
        isLoading : action.isLoading
    });
}
const itemSetFail = (state, action) => {
    return updateObject(state, {
        error : action.error
    });
}

const getImgSuccess = (state, action) => {
    console.log("downloadedImgURL in reducer",state.downloadedImgURL)
    const name = action.fileName;
    const newURL = { [name]:action.downloadedImgURL };
    const list = state.downloadedImgURL.concat(newURL)
    console.log("list in reducer",list);
    return updateObject(state, {
        downloadedImgURL : list ,
        // downloadedImgURL :state.downloadedImgURL.push({[name]:action.downloadedImgURL}) ,
        isLoading : action.isLoading
    });
    
}
const getImgFail = (state, action) => {
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


// export default function (state = {}, action) {
//     switch(action.type){
//         case GET_ACTIVE_CAMPAIGNS:
//         return {
//             ...state,
//             activeCampaigns: action.activeCampaigns
//         }
//         default:
//         return state;
//     }
// }
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_SET_SUCCESS: return itemSetSuccess(state, action);
        case actionTypes.ITEM_SET_FAIL: return itemSetFail(state, action);
        case actionTypes.UPLOAD_IMAGE_SUCCESS: return uploadImageSuccess(state, action);
        case actionTypes.UPLOAD_IMAGE_ERROR: return uploadImageFail(state, action);
        case actionTypes.ADDITEM_TO_USER_SUCCESS: return addItemsToUserSuccess(state, action);
        case actionTypes.ADDITEM_TO_USER_ERROR: return addItemsToUserFail(state, action);
        case actionTypes.ISLOADING_TRUE: return setIsLoading(state, action);
        case actionTypes.GETIMAGE_SUCCECC: return getImgSuccess(state, action);
        case actionTypes.GETIMAGE_FAIL: return getImgFail(state, action);
        default:
            return state;
    }
}
