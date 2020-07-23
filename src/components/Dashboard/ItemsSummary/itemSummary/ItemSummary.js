import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from './ItemSummary.module.css';
import img from '../../../../assets/Images/barter.jpg';
import Button from '../../../Share/Button/Button';

const itemSummary = (props) => (
    <Container className={styles.row}>
        <Row >
            <Col xs={3} md={3} lg={3} className={styles.col}>
                <img className={styles.image}  src={img} alt="image" />
            </Col>
            <Col xs={6} md={6} lg={6} className={styles.font}>
                <Row as={Row}>
                    <label className={styles.title}>Title : </label>
                    <label className={styles.title}>{props.title}</label>
                </Row>
                <Row as={Row}>
                    <label className={styles.title}>Title : </label>
                    <label className={styles.title}>{props.submitedDate}</label>
                </Row>
            </Col>
            <Col xs={3} md={3} lg={3} >
                <Row>
                    <Col className={styles.col_center}>
                        { props.forBarterSwitch 
                        ? <label className={styles.font,styles.font_color}>For Barter</label>
                        :  <label className={styles.font,styles.font_color}>----</label>
                        }
                        {/* <label className={styles.font,styles.font_color} id={props.forBarterSwitch ? 'msg' : null}>For Barter</label> */}
                    </Col>
                    
                </Row>
                <Row className={styles.btn}>
                    <Col className={styles.col_center}>
                        <Button title="Modify"></Button>
                    </Col>
                
                </Row>
            </Col>
        </Row>
    </Container>      
)

export default itemSummary;