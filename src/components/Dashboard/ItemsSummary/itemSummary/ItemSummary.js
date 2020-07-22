import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from './ItemSummary.module.css';
import img from '../../../../assets/Images/barter.jpg';
import Button from '../../../Share/Button/Button';

class ItemSummary extends Component {
    render() {
        return(
            <Container className={styles.row}>
            <Row >
              <Col xs={3} md={3} lg={3} className={styles.col}>
                  <img className={styles.image}  src={img} alt="image" />
              </Col>
              <Col xs={6} md={6} lg={6} className={styles.font}>
                  <Row as={Row}>
                      <label className={styles.title}>Title : </label>
                      <label className={styles.title}>title</label>
                  </Row>
                  <Row as={Row}>
                      <label className={styles.title}>Title : </label>
                      <label className={styles.title}>title</label>
                  </Row>
              </Col>
              <Col xs={3} md={3} lg={3} >
                  <Row>
                      <Col className={styles.col_center}>
                         <label className={styles.font}>4 OFFERS</label>
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
    }
}

export default ItemSummary;