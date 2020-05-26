import React from 'react';
import styles from './Button.css';
import {Button} from 'react-bootstrap';

const button = (props) => {
    return (
       <Button variant="warning" size="md"  onClick={props.clicked}>{props.title}</Button>
    );   
}

export default button;