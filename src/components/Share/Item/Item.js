import React from 'react';
import {Row,Container, Col,Form,Image} from 'react-bootstrap';
import styles from './Item.module.css';
import Button from '../Button/Button';
import image from '../../../assets/Images/barter.jpg'

const item = (props) => {
    return(
        <Container className={styles.con} fluid="md">
        <Row >
          <Col className={styles.col}>
            <Row className={styles.btnCen}> <Image className={styles.image} src={image} rounded /></Row>
            <Row >
            <Col className={[styles.col, styles.btnL].join(' ')}> <Image className={styles.image_sub} src={image} rounded /> </Col>
            <Col className={styles.col}> <Image className={styles.image_sub} src={image} rounded /> </Col>
            <Col className={[styles.col, styles.btnR].join(' ')}> <Image className={styles.image_sub} src={image} rounded /> </Col>
            </Row>     
          </Col>
          <Col>
              <Form>
              <Form.Label className={styles.font_title}>Item's Information :</Form.Label>
              <div className={[styles.div ,styles.font_desc].join(' ')}>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="3">Title</Form.Label>
                    <Col xs={12} sm={9} md={9} lg={9}>
                    <Form.Control type="text" placeholder="Title" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={styles.font_desc} column sm="3">Descripton</Form.Label>
                    <Col sm="9">
                    <Form.Control as="textarea" rows="3" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="3">Country</Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="Country" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="3">City</Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="City" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="4">Submited Date</Form.Label>
                    <Col sm="8">
                    <Form.Control plaintext readOnly defaultValue="21/03/2020" />
                    </Col>
                </Form.Group>
                </div>
                <Form.Label  className={styles.font_title}>Looking for :</Form.Label>
                <div className={[styles.div ,styles.font_desc].join(' ')}>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="3" >Title</Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="Title" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={styles.font_desc} column sm="3">Descripton</Form.Label>
                    <Col sm="9">
                    <Form.Control as="textarea" rows="3" />
                    </Col>
                </Form.Group>
                </div>
              </Form>
          </Col>
        </Row >
        <Row >
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