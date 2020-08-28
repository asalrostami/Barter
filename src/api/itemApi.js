import axios from '../axios-items';
import * as firebase from '../Firebase/firebase';


export const addItem = (item, userId,token) => {
    // const imgNames = {};
   
    // for(let i = 0; i < item.images.length; i++){
    //     if(item.images[i])
    //     {
    //         imgNames[i] = item.images[i].name;
    //     }else {
    //         imgNames[i] = null;
    //     }
       
    // }

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
        // images: imgNames
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
export const convertURLToBlob = (url) => {
    return axios({
        method: 'get',
        url: url, // blob url eg. blob:http://127.0.0.1:8000/e89c5d87-a634-4540-974c-30dc476825cc
        responseType: 'blob'
    }).then(response => {
        //  let reader = new FileReader();
        //  reader.readAsDataURL(response.data); 
        //  reader.onloadend = () => {
        //     console.log("reader.result in convertURLToBlob" ,reader.result)
        //     return reader.result;
    // }
          console.log("response in convertURLToBlob" ,response)
          return response;
    
    }).catch(error => {
        console.log(error);   
        throw new Error("error convertURLToBlob",error.message);
    })

}
export const getAllItems = () => {
    return axios.get('/items.json' ); 
}

export const downloadFileImage = (url) =>{
    return firebase.storage().refFromURL(url);
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
export const getUserNumberByUserId = async (userId) => {
    const quaryParams = '?orderBy="userId"&equalTo="' + userId + '"';
    return await axios.get('/users.json' + quaryParams )
    // .then(response => {
    //     console.log("getUserNumberByUserId user number",Object.keys(response.data)[0]);
    //     return Object.keys(response.data)[0];
        
    // })
    // .catch(error => {
    //     console.log("getUserNumberByUserId error",error);
    //     throw new Error(error.message);
    // })
    
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
export const updateItemApi = (itemId,data) => {
    console.log("itemId updateItemApi",itemId)
    return axios.put('/items/' + itemId + '.json', data );  
}
export const removeItemFromItemsAPI = (itemId) => {
    return axios.delete('items/' + itemId + '.json' );
}
export const removeItemFromUsersAPI =  (itemId, userId) => {
 return getUserNumberByUserId(userId)
    .then(response => {
        console.log("getUserNumberByUserId user number",Object.keys(response.data)[0]);
        const id = Object.keys(response.data)[0];
        return  axios.delete('users/'  + id + '/' +  'itemsId/' + itemId + '.json' );   
    })
    .catch(error => {
        console.log("getUserNumberByUserId error",error);
        throw new Error(error.message);
    })
    
    
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

