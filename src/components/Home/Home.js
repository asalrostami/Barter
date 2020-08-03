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

    convertFormetDate = (date) => {
       const dateDay  = date.slice(0,2);
        const dateMonth = date.slice(3,5);
        const dateYear = date.slice(6,10) 
        const convertedDate = dateYear + '-' + dateMonth + '-' + dateDay;
       return convertedDate;
    }
    getLastMonthFirstDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        // today = yyyy + '-' + mm + '-' + dd;
       return today;
    }

    getLastWeekDate = () => {
        let today = new Date();
        let dd = String(today.getDate() - 7).padStart(2, '0');
        if(dd < 0){
            dd = String(today.getDate() - 7).padStart(2, '0');
        }
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        // today = yyyy + '-' + mm + '-' + dd;
       return today;
    }

    getCurrentDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        // today = yyyy + '-' + mm + '-' + dd;
       return today;
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
                console.log("images in home", response.data[item].images);
                // debugger
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
               
                console.log("______________",items );
                       
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

        if(this.state.dropDownValue){
            switch(this.state.dropDownValue) {
                case ('All Items') :
                    //  getAllItems();
                    break;
                case ('Last Month') :
                    // mmm
                    break;
                case ('Last Week') :
                    // kk
                    break;
                default:
                    // 
            }
        }

        
        // console.log("LastMonthFirstDate()",this.getLastMonthFirstDate());
        // console.log("this.getLastWeekDate()",this.getLastWeekDate());
        // const lastWeekwithfunc = this.getLastWeekDate();

        // const currentdate = new Date (this.getCurrentDate());
        // const lastWeek = moment().subtract(7, 'days').calendar();
        // const lastMonth = moment().subtract(1, 'months').calendar();
        // console.log("lastWeek with moment" , lastWeek);
        // console.log("lastMonth with moment" , lastMonth);
        // const diff2 = Math.abs(currentdate-lastWeek); //in milliseconds
        // const diffDays = 0|diff2/864e5;
        // console.log("diff2" , diff2)
        // console.log("diffDays" , diffDays);

        // const day = Date.parse(currentdate);
        // console.log("current date",currentdate);
        // const lastWeek = Date.parse(this.getLastWeekDate());
        // let d = ""
        // if(lastWeek <= day){
        //     d = true;
        //     console.log("d" , d)
        // }
        // console.log("day" , day)
        // console.log("last week date",lastWeek);
        // console.log("difference time", day - lastWeek);

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