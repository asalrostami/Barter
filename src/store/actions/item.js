import * as actionTypes from './actionTypes';
import {addItem,uploadImage,addItemsToUser} from '../../api/itemApi';
import * as firebase from '../../Firebase/firebase';
import axios from '../../axios-items';

export const itemSetStart = () => {
  
    return {
        type: actionTypes.ITEM_SET_START
    };
}; 
export const itemSetSuccess = (itemId,isLoading) => {
    return {
        type: actionTypes.ITEM_SET_SUCCESS,
        itemId : itemId ,
        isLoading : isLoading      
    };
};


export const itemSetFail = (error) => {
    return {
        type: actionTypes.ITEM_SET_FAIL,
        error: error
    };
};

export const getImageSuccess = (downloadedImgURL,fileName,isLoading) => {
    return {
        type: actionTypes.GETIMAGE_SUCCECC,
        isLoading : isLoading ,
        downloadedImgURL: downloadedImgURL,
        fileName: fileName     
    };
};


export const getImageFail = (error) => {
    return {
        type: actionTypes.GETIMAGE_FAIL,
        error: error
    };
};
export const addItemToUserSuccess = (areItemsAdded) => {
    return {
        type: actionTypes.ADDITEM_TO_USER_SUCCESS,
        itemsAdded: areItemsAdded
              
    };
};

export const addItemToUserFail = (error) => {
    return {
        type: actionTypes.ADDITEM_TO_USER_ERROR,
        error: error
    };
};
export const uploadImageSuccess = (images) => {
    return {
        type: actionTypes.UPLOAD_IMAGE_SUCCESS,
        imagesURL: images
    };
};

export const uploadImageFail = (error) => {
    return {
        type: actionTypes.UPLOAD_IMAGE_ERROR,
        error: error
    };
};

export const setIsLoadingTrue =  (isLoading) => { 
    return {
        type: actionTypes.ISLOADING_TRUE,
        isLoading: isLoading
    };
}

export const getImage = (fileName) => {
    return async dispatch => {
        const ref = firebase.storage().ref('images').child(fileName);
        await ref.getDownloadURL()
        // firebase.storage().ref('images').child(fileName).getDownloadURL()
        .then(response => {
            console.log("responce of getImage",response);
            dispatch(getImageSuccess(response,fileName,false));
            return response;
            
        })
        .catch(error => {
            console.log("getImage",error);
            dispatch(getImageFail(error));
            throw new Error(error.message);
        })
    }
   
}


export const setItems =  (item, userId, token) => {
    const images = {};
    return async dispatch => {
        try{
             const response = await uploadImage(item.images);
                console.log("responce upload images",response);
                console.log("***name upload images",item.images);
            for(let i = 0; i < response.length; i++ )
            {   if(response[i] === null) {
                    images[i] = null;
                } else {
                    response[i].task.on('state_changed',
                    (snapshot) => {
                        // progress function
                        console.log("snapshot",snapshot);    
                    },
                    (error) => {
                        // error function
                        console.log(error);    
                    },
                        async() => {
                            // debugger
                        // complete function
                        const url = await firebase.storage().ref('images').child(item.images[i].name).getDownloadURL();
                        // console.log("url",url);
                        images[item.images[i].name] = url
                
                    })  
                }
            }
            
                    
                console.log("imgResponse",images);
                console.log("imgResponse length",Object.keys(images).length);
                dispatch(itemSetStart());
                try {
                    // const itemResult = await addItem(item, userId,images,token);
                    const itemResult = await addItem(item, userId,token);
                    console.log("response additem",itemResult); 

                    addItemsToUser(itemResult.data.name, userId,token)
                    .then(response => {       
                    const quaryParams = '?orderBy="userId"&equalTo="' + userId + '"';
                    axios.get ('/items.json' + quaryParams)
                    .then(response => {
                        console.log("get item by userId",response);
                        }
                    ) 
                    .catch(error => {
                        console.log(error.response.data.error);   
                        throw new Error("error",error.response.data.error.message);
                    })
            
                        console.log("response addItemsToUser",response);  
                        dispatch(addItemToUserSuccess(true));
                    })
                    .catch(error => {
                        dispatch(addItemToUserFail(error));
                    })

                    
                    // console.log("response additem images",itemResult.config.data.images); 
                    dispatch(itemSetSuccess(itemResult.data.name,false));

                }catch(error){
                    console.log("error setitem1",error);
                    console.log(error.response.data.error);
                    dispatch(itemSetFail(error));
                }

               
                 
            } catch(error) {
                console.log("error setitem2",error);
                dispatch(uploadImageFail(error));
         }
       
    }
}

// export const  itemSet =  ( item ,userId,token) => {
//     return dispatch => {
//         dispatch(itemSetStart());
//         addItem(item, userId ,token).then(response => {
//             // console.log("response additem",response);  
//             dispatch(itemSetSuccess(response.data.name)) ;  
//         })
//         .catch(error => {
//             dispatch(itemSetFail(error));
//         })
//     }
// };

export const addItems = (items, userId,token) => {
    return dispatch => {
        // debugger
        addItemsToUser(items, userId,token).then(response => {
            // debugger        
        const quaryParams = '?orderBy="userId"&equalTo="' + userId + '"';
        axios.get ('/items.json' + quaryParams)
        .then(response => {
            console.log("get item by userId",response);
          }
        ) 
        .catch(error => {
            console.log(error.response.data.error);   
            throw new Error("error",error.response.data.error.message);
        })

            console.log("response addItemsToUser",response);  
            dispatch(addItemToUserSuccess(true));
        })
        .catch(error => {
            dispatch(addItemToUserFail(error));
        })

    }

};





