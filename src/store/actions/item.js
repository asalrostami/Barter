import * as actionTypes from './actionTypes';
import {addItem,uploadImage,addItemsToUser, updateItemApi, removeItemFromItemsAPI, removeItemFromUsersAPI} from '../../api/itemApi';
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
export const removeImageSuccess = (isImagesRemoved) => {
    return {
        type: actionTypes.REMOVE_IMAGE_SUCCESS,
        isImagesRemoved: isImagesRemoved
    };
};

export const removeImageFail = (error) => {
    return {
        type: actionTypes.REMOVE_IMAGE_ERROR,
        error: error
    };
};

export const setIsLoadingTrue =  (isLoading) => { 
    return {
        type: actionTypes.ISLOADING_TRUE,
        isLoading: isLoading
    };
}
export const updateItemSuccess = (isUpdated,isLoading) => {
    return {
        type: actionTypes.UPDATE_ITEM_SUCCESS,
        isUpdated: isUpdated,
        isLoading : isLoading 
        
    };
};
export const updateItemFail = (error) => {
    return {
        type: actionTypes.UPLOAD_IMAGE_ERROR,
        error: error
    };
};
export const removeItemItemsSuccess = (isRemovedItemItems) => {
    return {
        type: actionTypes.REMOVE_ITEM_ITEMS_SUCCESS,
        isRemovedItemItems: isRemovedItemItems
    };
};
export const removeItemItemsFail = (error) => {
    return {
        type: actionTypes.REMOVE_ITEM_ITEMS_ERROR,
        error: error
    };
};

export const removeItemUsersSuccess = (isRemovedItemUsers,isLoading) => {
    return {
        type: actionTypes.REMOVE_ITEM_USERS_SUCCESS,
        isRemovedItemUsers: isRemovedItemUsers,
        isLoading : isLoading 
    };
};
export const removeItemUsersFail = (error) => {
    return {
        type: actionTypes.REMOVE_ITEM_USERS_ERROR,
        error: error
    };
};



export const removeItemFromItems =  (itemId) => {
    return async dispatch => {
        await removeItemFromItemsAPI(itemId)
        .then(response => {
            console.log("responce of removeItemFromItems",response);
            dispatch(removeItemItemsSuccess(true));
            return response;
            
        })
        .catch(error => {
            console.log("removeItemFromItems",error);
            dispatch(removeItemItemsFail(error));
            throw new Error(error.message);
        })
    }
   
}

export const removeItemFromUsers = (itemId,userId) => {
    return async dispatch => {
        await removeItemFromUsersAPI(itemId,userId)
        .then(response => {
            console.log("responce of removeItemFromUsers",response);
            dispatch(removeItemUsersSuccess(true,false));
            return response;
            
        })
        .catch(error => {
            console.log("removeItemFromUsers",error);
            dispatch(removeItemUsersFail(error));
            throw new Error(error.message);
        })
    }
   
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

export const downloadImage = (images) => {
    let promises = [];
    // debugger
    for(let img of images) {
        if(img) {
            promises.push(firebase.storage().ref('images').child(img.name).getDownloadURL());
            
        } else {
            promises.push(new Promise((res, rej) => res(null)));
        }
    }
    console.log("promises",promises);
    return Promise.all(promises)
    .then(response => {
        return response
      
    }).catch(err =>  {
        console.log(err);
        throw new Error(err.message)
    });
}

export const removeImags = (images) => {
    return dispatch => {
        let promises = [];
        for(let img of images) {
            if(img) {
                promises.push(firebase.storage().ref('images').child(img).delete())   
            } else {
                promises.push( new Promise((res, rej) => res(null)));
            }
        }
        console.log("promises of delete",promises);
        return Promise.all(promises)
        .then(response => {
            dispatch(removeImageSuccess(true));
            return response
          
        }).catch(err =>  {
            console.log(err);
            dispatch(removeImageFail(err));
            throw new Error(err.message)
        });
    
    }
   
    
}


export const setItems =  (item, updatedImgsFile,userId, token) => {
    const images = {};
    return async dispatch => {
        try{
            //  const response = await uploadImage(item.images);
            if(updatedImgsFile){
                const response = await uploadImage(updatedImgsFile);
                console.log("responce upload images",response);
            }
            console.log("***name upload images",item.images);
            // for(let i = 0; i < response.length; i++ )
            // {   if(response[i] === null) {
            //         images[i] = null;
            //     } else {
            //         response[i].task.on('state_changed',
            //         (snapshot) => {
            //             // progress function
            //             console.log("snapshot",snapshot);    
            //         },
            //         (error) => {
            //             // error function
            //             console.log(error);    
            //         },
            //             async() => {
            //                 // debugger
            //             // complete function
            //             const url = await firebase.storage().ref('images').child(item.images[i].name).getDownloadURL();
            //             // console.log("url",url);
            //             images[item.images[i].name] = url
                
            //         })  
            //     }
            // }
            
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
                    console.log("error itemSetFail setitem",error);
                    console.log(error.response.data.error);
                    dispatch(itemSetFail(error));
                }

               
                 
            } catch(error) {
                console.log("error uploadImageFail setItem",error);
                dispatch(uploadImageFail(error));
         }
       
    }
}
export const updateItem = (itemId, item, updatedImgsFile,userId,token) => {
   
    const data = {
        userId: userId,
        title: item.title,
        description: item.description,
        country: item.country,
        city: item.city,
        submitedDate: item.submitedDate,
        lookingfor_title: item.lookingfor_title,
        lookingfor_description: item.lookingfor_description,
        forBarterSwitch: item.forBarterSwitch,
        images: item.images

    } 
    return async dispatch => {
        if(updatedImgsFile){
            try{
                const response = await uploadImage(updatedImgsFile);
                console.log("!!!responce upload images in updateItem",response);
             }catch(error){
                console.log("error updateItem",error);
                console.log(error.response.data.error);
            }
        }
       
        await updateItemApi(itemId, data)
        .then(res => {
            console.log("!!!!!!!!response updateItem",res.data);
            dispatch(updateItemSuccess(true,false));
            return res.data;  
            }).catch(error => {
            console.log("updateItem",error);
            dispatch(updateItemFail(error));
            throw new Error(error.message);
        }) 
    }
}
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





