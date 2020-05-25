import React from 'react';
import Button from '../Share/Button/Button';

const dashboard = (props) => {
  const  addItemHandler = () => {
        props.history.push('/item');
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <Button title="Add New Item" clicked={addItemHandler} />
        </div>
    )
};

export default dashboard;