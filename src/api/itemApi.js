import axios from '../axios-items';
import * as firebase from '../Firebase/firebase';


export const addItem = (item, userId,token) => {
    // export const addItem = (item,images, userId,token) => {
    // debugger 
   
    const imgNames = {};
   
    for(let i = 0; i < item.images.length; i++){
        if(item.images[i])
        {
            imgNames[i] = item.images[i].name;
        }else {
            imgNames[i] = null;
        }
       
    }

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
        images: imgNames
        // {"0":"d.jpg",null,"2":"k.jpg"}

    } 
    
    console.log("data in api",data);
    const url = '/items.json';
    return axios({
        url,
        method: 'POST',
         data: data,
    })
     .then(response => {
        console.log("itemId",response.data.name);  
        return response;    
    
    })
    .catch(error => {
        console.log(error.response.data.error);   
        throw new Error("error additem",error.response.data.error.message);
    })


    // return axios.post ('/items.json',data)
   
    // // return axios.post ('/items.json?auth=' + token ,data)
    // .then(response => {
    //     console.log("itemId",response.data.name);  
    //     return response;    
    
    // })
    // .catch(error => {
    //     console.log(error.response.data.error);   
    //     throw new Error("error additem",error.response.data.error.message);
    // })

    
}
export const addItemsToUser = async (itemId, userId,token) => {
    let key = "";
    console.log("items addItemsToUser",itemId)
    const quaryParams = '?orderBy="userId"&equalTo="' + userId + '"';
    await axios.get('/users.json' + quaryParams )
    .then(response => {
        console.log("++++getting item by userId additem",response); 
         key = Object.keys(response.data);
        console.log("----getting item key ",key); 
    })
    console.log("oooo Items additem",itemId); 
    const data = {
        itemId : itemId
    }
     
    // return await axios.post('/users/' + key + '/itemsId.json' ,data)
    return await axios.post('/users/' + key + '/itemsId/'+ itemId +'.json',data)
    .then(response => {
        console.log("items after adding",response); 
        return response;
    })
    .catch(error => {
        console.log(error);   
        throw new Error("error",error);
    })

    
    
}

export const getAllItems = () => {
    return axios.get('/items.json' ); 
}

export const getItemByDropdownValue = (filterValue) =>{
    
}

export const uploadImage = (images) => {
    let promises = [];
    // debugger
    for(let img of images) {
        if(img) {
            // console.log("000000000000");
            promises.push(firebase.storage().ref('images').child(img.name).put(img));
            
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
export const getItem = (itemId) => {
    console.log("itemId getItem",itemId)
    return axios.get('/items/' + itemId + '.json' )
    
}
export const getItemsByUserId = async (userId) => {
    const quaryParams = '?orderBy="userId"&equalTo="' + userId + '"';
    return await axios.get('/items.json' + quaryParams )
    .then(response => {
        return response;
        // console.log("getItemsByUserId",error);
    })
    .catch(error => {
        console.log("getItemsByUserId",error);
        throw new Error(error.message);
    })
    
}
export const removeItemFromItems = (itemId) => {
    return axios.delete('items/' + itemId + '.json' );
}
export const removeItemFromUsers = (itemId, userId) => {
    return axios.delete('users/'  + userId + '/' +  'itemsId/' + itemId + '.json' );
}

export const removeImags = (images) => {
    let promises = [];
    for(let img of images) {
        if(img) {
            promises.push(firebase.storage().ref('images').child(img.name).delete())   
        } else {
            promises.push( new Promise((res, rej) => res(null)));
        }
    }
    console.log("promises of delete",promises);
    return Promise.all(promises)
    .then(response => {
        return response
      
    }).catch(err =>  {
        console.log(err);
        throw new Error(err.message)
    });

    
}

// with bearer in header

// export const getActiveCampaigns = () => {
//     return (dispatch, getState) => {
//         const bearer = 'Bearer ' + getState().login.bearer
//         return axios.get(API.path + 'campaign/active/?website_id=' + getState().selectedWebsite.selectedWebsite + '&' + API.beaconAPI_client, { headers: { 'Authorization': bearer } })
//         .then(function (response) {
//             dispatch({
//                 type: GET_ACTIVE_CAMPAIGNS,
//                 activeCampaigns: response.data.response
//             })
//         })
//       }
//     }

