import React from 'react';
import {Row,Container, Col,Form,Image,ToggleButton} from 'react-bootstrap';
import styles from './Item.module.css';
import Button from '../Button/Button';
import image from '../../../assets/Images/barter.jpg'

const item = (props) => {

    // state = {
    //     switch1: true,
    //   }

   const handleSwitchChange = nr => () => {
        alert("switch has been changed");
        // let switchNumber = `switch${nr}`;
        // this.setState({
        //   [switchNumber]: !this.state[switchNumber]
        // });
      }

    return(
        <Container className={styles.con} fluid="md">
        <Row >
          <Col className={styles.col}>
            <Row><Col><Image className={styles.image} src={image} rounded /></Col> </Row>
            <Row >
            <Col className={[styles.col, styles.dirL].join(' ')}> <Image className={styles.image_sub} src={image} rounded /> </Col>
            <Col className={styles.col}> <Image className={styles.image_sub} src={image} rounded /> </Col>
            <Col className={[styles.col, styles.dirR].join(' ')}> <Image className={styles.image_sub} src={image} rounded /> </Col>
            </Row>
            <Row>
            <Col>
            <div className='custom-control custom-switch'>
                <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches'
                onChange={handleSwitchChange(1)}
                readOnly
                />
                <label className='custom-control-label' htmlFor='customSwitches'>
                For Barter
                </label>
            </div>
            </Col>
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
            <Col xs={4} sm={4} md={4} lg={4} className={styles.dirL}>
             <Button  title="DELETE"/>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className={styles.dirCen}>
             <Button  title="ADD"/>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className={styles.dirR}>
             <Button  title="CANCLE"/>
            </Col>   
        </Row>
       
      </Container>
    )
};

export default item;