import React from 'react';
import {Button} from 'react-bootstrap';

const button = (props) => {
    return (
       <Button variant="warning" size="md" type={props.type} form={props.form} onClick={props.clicked} disabled={props.disabled}>{props.title}</Button>
    );   
}

export default button;