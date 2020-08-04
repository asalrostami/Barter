import React, {Component} from 'react';
import Cards from '../Home/Cards/Cards';
import Filter from '../Home/Filter/Filter';
import {getAllItems} from '../../api/itemApi';
import * as moment from 'moment'

class Home extends Component  {
    state = {
        itemsList: [],
        dropDownValue: null
    }

    searchDropDownHandler = (dropDownValue) =>{
        this.setState({dropDownValue : dropDownValue},() =>{
            console.log("dropDownValue in home",this.state.dropDownValue);
        })
    }

    getLastMonthItems = () => {
      const allItems = this.state.itemsList;
      const filteredItems = [];
      console.log("AllItems in home", allItems);
      for(let item of Object.keys(allItems)){
        const submitedDate = allItems[item].submitedDate.value;
        console.log("submitedDate in getLastMonthItems", submitedDate);
        const diffDays = this.getDifferenceInDays(submitedDate);
        if(diffDays <= 30) {
            filteredItems.push(allItems[item]);
        }

      } 
        console.log("=========Items in filteredItems", filteredItems);
        return filteredItems;
    }

    getLastWeekItems = () => {
        const allItems = this.state.itemsList;
        const filteredItems = [];
        console.log("AllItems in home", allItems);
        for(let item of Object.keys(allItems)){
          const submitedDate = allItems[item].submitedDate.value;
          console.log("submitedDate in getLastWeekItems", submitedDate);
          const diffDays = this.getDifferenceInDays(submitedDate);
          if(diffDays <= 7) {
              filteredItems.push(allItems[item]);
          }
  
        } 
          console.log("############Items in filteredItems", filteredItems);
          return filteredItems;
    }

    getAllItems = () => {
        const allItems = this.state.itemsList;
        const filteredItems = [];
        console.log("AllItems in home", allItems);
        for(let item of Object.keys(allItems)){
           filteredItems.push(allItems[item])
        } 
          console.log("%%%%%%%%%Items in filteredItems", filteredItems);
          return filteredItems;
    }

    getDifferenceInDays = (submitedDate) => {
        const today = new Date( moment().format('L') );
        const convertedSubmitedDate = new Date (submitedDate);
        const diff = Math.abs(today - convertedSubmitedDate); //in milliseconds
        const diffDays = 0|diff/864e5;
       return diffDays;
    }

    componentDidUpdate(prevProps,prevState) {
        if (this.state.dropDownValue !== prevState.dropDownValue) {
            if(this.state.dropDownValue){
                switch(this.state.dropDownValue) {
                    case ('All Items') :
                        const All = this.getAllItems();
                        this.setState({itemsList:All});
                        break;
                    case ('Last Month') :
                        const lastMonthday = this.getLastMonthItems();
                        this.setState({itemsList:lastMonthday});
                        break;
                    case ('Last Week') :  
                       const lastWeekday = this.getLastWeekItems();
                        this.setState({itemsList:lastWeekday});
                        break;
                    default:
                        const AllDefault = this.getAllItems();
                        this.setState({itemsList:AllDefault});
                }
            } 
           
        }
    }
   
    componentDidMount() {
        const items = []
        getAllItems()
        .then(response => {
           
            console.log("response get user dashboard", response);
            for(let item in response.data){
                let imgArray = [];
                let isObject = false;
                // images is an object
                if(response.data[item].images)
                {
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
                }else {
                    items.push({
                        ...response.data[item],
                        itemId: item,
                        images: []
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
               
               <Filter 
               onChangeValue={this.searchDropDownHandler}/>
               <Cards 
               items={this.state.itemsList}/>    
            </>
        )
    }
}

export default Home;