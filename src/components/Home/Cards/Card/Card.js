import React from 'react';
import image1 from '../../../../assets/Images/barter2.png';
import {Card} from 'react-bootstrap';
import styles from './Card.module.css';
import CardDesc from './CardDesc/CardDesc';
import Button from '../../../Share/Button/Button';


const card = (props) => {
    return (
        <Card className={styles.padding}>
          <Card.Img variant="top" src={image1}/>
          <Card.Body className="text-center">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              <CardDesc />
            </Card.Text>
            <Button  title="I'm Interested"/>
          </Card.Body>
        </Card>
    );
}

export default card;