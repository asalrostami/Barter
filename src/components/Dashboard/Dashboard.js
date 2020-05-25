import React from 'react';
import 

const dashboard = (props) => {
  const  addItemHandler = () => {
        props.history.push('/item');
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={addItemHandler}>Add New Item</button>
        </div>
    )
};

export default dashboard;