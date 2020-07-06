import axios from '../axios-items';
import * as firebase from '../Firebase/firebase';


export const addItem = (item, userId) => {
    const data = {
        userId: userId,
        title: item.title,
        description: item.description,
        country: item.country,
        city: item.city,
        submitedDate: item.submitedDate,
        lookingfor_title: item.lookingfor_title,
        lookingfor_desc: item.lookingfor_desc,
        forBarter: item.forBarter,

    }
    return axios.post ('https://barter-5f642.firebaseio.com/items.json?',data)
    .then(response => response)
    .catch(error => {
        console.log(error);   
        throw new Error("error",error);
    })

    

}
export const uploadImage = (images, itemId) => {
    let promises = [];
    for(let img of images) {
        if(img) {
            promises.push(firebase.storage.ref(`${itemId}`).child(img.name)
            .put(img))
        } else {
            promises.push(new Promise((res, rej) => res(null)));
        }
    }

    return Promise.all(promises)
    .then(data => {
        console.log(data);
    }).catch(err =>  {
        console.log(err);
        throw new Error(err.message)
    });
    // images.map((img,index )=> {
    //     if(img){
    //         const uploadTask = firebase.storage.ref(`${itemId}`).child(img.name)
    //         .put(img);
    //         uploadTask
    //         .then(snapshot => {
    //             // imgURLList.splice(index,0,snapshot.ref(`${itemId}`).child(img.name).getDownloadURL());
    //             imgURLList.splice(index,0,snapshot)
    //         })
    //         .catch(error => {
    //             console.log(error);   
    //             throw new Error("error",error);
                
    //         })
           

    //         // uploadTask.on('state_changed',
    //         // (snapshot) => {
    //         //     // progress function
    //         //     const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         //     uploader.value = percentage;
    //         // },
    //         // (error) => {
    //         //     // error function
    //         //     console.log(error);    
    //         // },
    //         // () => {
    //         //     // complete function
    //         //     storage.ref(`${userId}`).child(img.name).getDownloadURL()
    //         //     .then(url => {
    //         //         console.log("url",url)
    //         //     })
    //         // })

    //     }else {
    //         imgURLList.splice(index,0,null);
    //     }
    // })
    // return imgURLList;
}