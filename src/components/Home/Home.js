import React, {Component} from 'react';
import Cards from '../Home/Cards/Cards';
import Filter from '../Home/Filter/Filter';

class Home extends Component  {
    render() {
        return(
            <>
                <Cards />
                <Filter />
            </>
        )
    }
}

export default Home;