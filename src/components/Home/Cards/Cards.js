import React from 'react';
import Card from './Card/Card';
import {Container,Row,Col } from 'react-bootstrap';
import styles from './Cards.module.css';


const cards = (props) => {
    return (
        <div className={styles.Content}>
             <Container className= "container-fluid padding">
                <Row className="row padding">
                    <Col xs={12} md={6} lg={3}>
                        <Card />
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                    <Card />
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                    <Card />
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                    <Card />
                    </Col>
                </Row>
            </Container>
        </div>
       
    );
}

export default cards;