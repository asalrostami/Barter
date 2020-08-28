import React from 'react';
import {Button} from 'react-bootstrap';

const button_AddItem = (props) => {
    return (
       <Button variant="warning" size="md" type={props.type} onClick={props.clicked}  >{props.title}</Button>
    );   
}

export default button_AddItem;