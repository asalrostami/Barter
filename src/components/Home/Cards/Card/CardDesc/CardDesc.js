import React from 'react';
import styles from './CardDesc.module.css';
import {Container,Row,Col } from 'react-bootstrap';


const cardDesc = (props) => {
    return (
        <div className={styles.Content}>
            <Container className= "container-fluid padding">
                <Row className= {styles.row}>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>Location:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <i>Montreal</i>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>submited:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <i>2020/06/02</i>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>Looking for:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <i>lown mover</i>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_title}>
                        <span>offers:</span>
                    </Col>
                    <Col xs={6} md={6} lg={6} className={styles.font_desc}>
                        <i>2</i>
                    </Col>
                </Row>
            </Container>
       </div>
    );
}

export default cardDesc;