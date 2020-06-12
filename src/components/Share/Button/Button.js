import React from 'react';
import styles from './Button.css';
import {Button} from 'react-bootstrap';

const button = (props) => {
    return (
       <Button variant="warning" size="md" type={props.type} onClick={props.clicked} disabled={props.disabled}>{props.title}</Button>
    );   
}

export default button;