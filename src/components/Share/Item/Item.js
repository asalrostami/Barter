import React from 'react';
import {Row,Container, Col,Form} from 'react-bootstrap';
import styles from './Item.module.css';
import Button from '../Button/Button';

const item = (props) => {
    return(
        <Container className={styles.con} fluid="md">
        <Row className={styles.row}>
          <Col className={styles.col}>1 of 1</Col>
          <Col className={styles.col}>
              <Form>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Title:</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Title" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm="4">Descripton :</Form.Label>
                    <Col sm="8">
                    <Form.Control as="textarea" rows="3" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Country :</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Country" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">City :</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="City" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="4">Submited Date :</Form.Label>
                    <Col sm="8">
                    <Form.Control plaintext readOnly defaultValue="21/03/2020" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Title:</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Title" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm="4">Descripton :</Form.Label>
                    <Col sm="8">
                    <Form.Control as="textarea" rows="3" />
                    </Col>
                </Form.Group>
              </Form>
          </Col>
        </Row >
        <Row className={styles.row}>
            <Col xs={4} sm={4} md={4} lg={4} className={styles.btnL}>
             <Button  title="DELETE"/>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className={styles.btnCen}>
             <Button  title="ADD"/>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className={styles.btnR}>
             <Button  title="CANCLE"/>
            </Col>   
        </Row>
      </Container>
    )
};

export default item;