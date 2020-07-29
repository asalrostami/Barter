import React, {Component} from 'react';
import Cards from '../Home/Cards/Cards';
import Filter from '../Home/Filter/Filter';
import {getAllItems} from '../../api/itemApi';

class Home extends Component  {
    state = {
        itemsList: []
    }
    componentDidMount() {
        const items = []
        getAllItems()
        .then(response => {
            let isObject = false;
            // console.log("response get user dashboard", response);
            for(let item in response.data){
                let imgArray = [];
                // images is an object
                if(!Array.isArray(response.data[item].images)){
                    // console.log("______________");
                    isObject = true;
                    imgArray[Object.keys(response.data[item].images)] = Object.values(response.data[item].images)[0];    
                }
                // console.log("imgArray", imgArray);
                if(isObject){
                    items.push({
                        ...response.data[item],
                        itemId: item,
                        images: imgArray
                    }); 
                }else{
                    items.push({
                        ...response.data[item],
                        itemId: item,
                    }); 

                }
                       
            }
            this.setState({itemsList: items}, () =>{
                console.log("items in home's state", this.state.itemsList)
            });

        }).catch(err => {
            console.log(err);
            throw new Error(err.message);
        })
    }
    render() {
        return(
            <>
               <Filter />
               <Cards 
               items={this.state.itemsList}/>    
            </>
        )
    }
}

export default Home;