import React from 'react';
import styles from './Button.css';
import {Button} from 'react-bootstrap';

const button = (props) => {
    return (
    //    <button className={styles.button}  onClick={props.clicked}>{props.title}</button>
       <Button variant="warning" size="md" onClick={props.clicked}>{props.title}</Button>
    );   
}

export default button;