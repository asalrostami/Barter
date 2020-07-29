import React from 'react';
import styles from './CardDesc.module.css';
import {Container,Row,Col } from 'react-bootstrap';



const cardDesc = (props) => {
   
    return (
            <Container fluid className={styles.Content}>
                <Row className= {styles.row}>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>Location:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <div>{props.city}</div>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>submited:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <div>{props.submitedDate}</div>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>Looking for:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <div>{props.lookingfor}</div>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>for Barter:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <div>{props.forBarterSwitch}</div>
                        { props.forBarterSwitch 
                        ? <div>YES</div>
                        :  <div>NO</div>
                        }
                    </Col>
                </Row>
            </Container>
    );
}

export default cardDesc;