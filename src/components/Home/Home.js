import React, {Component} from 'react';
import Cards from '../Home/Cards/Cards';
import Filter from '../Home/Filter/Filter';

class Home extends Component  {
    render() {
        return(
            <>
               <Filter />
               <Cards />    
            </>
        )
    }
}

export default Home;