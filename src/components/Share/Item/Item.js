import React,{Component} from 'react';
import {Row,Container, Col,Form,Image} from 'react-bootstrap';
import styles from './Item.module.css';
import Button from '../Button/Button';
import {checkValidity} from '../utility';
import Images from '../../Share/Item/Images/Images';

class Item extends Component {
     state = {
         item: {
             itemId:null,
             title: null,
             location: {
                 country: null,
                 city: null
             },
             description: null,
             submitedDate: null,
             lookingfor: {
                 title: null,
                 description: null
             },
             images:[],
             forBarter: false,
             status:null
         },
         
        visible: false,
        formIsValid: false
        // switch1: true,
      }


     getCurrentDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
       return today;
    }
    inputChangeHandler = (e) => {
        const value = e.target.value;
        const isValid = checkValidity(value,"required");
        this.setState({formIsValid:isValid})
        // console.log("input value", value);
    }

    validityCheckHandler = () =>{

    }
    addItemHandler = () => {

    }
    modifyItemHandler = () => {

    }
    deleteItemHandler = () => {

    }
    cancelItemHandler = () => {

    }
    handleSwitchChange = nr => () => {
        alert("switch has been changed");
        // let switchNumber = `switch${nr}`;
        // this.setState({
        //   [switchNumber]: !this.state[switchNumber]
        // });
      }
    render() {
        let errorLB = null;
        if(this.state.formIsValid) {
            errorLB = ( <label className={styles.label}>Please enter the required information</label>)
        }
        const button = (title, event) => {
            return(<Col xs={3} sm={3} md={3} lg={3}>
                <Button  title={title} clicked={event}/>
                </Col>);
        }

        const formGroupText = (title) => {
            return ( <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="3">{title}</Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder={title} onChange={this.inputChangeHandler} />
                    </Col>
                </Form.Group>
             );
        }
        const formGroupTextarea = () => {
            return ( <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={styles.font_desc} column sm="3">Descripton</Form.Label>
                    <Col sm="9">
                    <Form.Control as="textarea" rows="3" />
                    </Col>
                </Form.Group>
            );
        }
        return(
            <Container className={styles.con} fluid="md">
                <Row>
                    <Col className={styles.col}>
                        {errorLB}
                    </Col>
                </Row>
                <Row >
                    <Col className={styles.col}>
                        <Images />
                        <Row>
                        
                            <Col className={styles.space}  >
                                <div className='custom-control custom-switch'>
                                    <input
                                    type='checkbox'
                                    className='custom-control-input'
                                    id='customSwitches'
                                    onChange={this.handleSwitchChange(1)}
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
                        {formGroupText("Title")}
                        {formGroupTextarea()}
                        {formGroupText("Country")}
                        {formGroupText("City")}
                        <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                            <Form.Label className={styles.font_desc} column sm="4" md="4">Submited Date</Form.Label>
                            <Col sm="8" md="8">
                            <Form.Control plaintext readOnly defaultValue={this.getCurrentDate()} />
                            </Col>
                        </Form.Group>
                        </div>
                        <Form.Label  className={styles.font_title}>Looking for :</Form.Label>
                        <div className={[styles.div ,styles.font_desc].join(' ')}>
                        {formGroupText("Title")}
                        {formGroupTextarea()}
                        </div>
                    </Form>
                </Col>
                </Row >
                <Row >
                    {button("DELETE",this.deleteItemHandler)}
                    {button("ADD",this.addItemHandler)}
                    {button("MODIFY",this.modifyItemHandler)}
                    {button("CANCLE",this.cancelItemHandler)}
                </Row>
            
        </Container>

        )
   }
}


export default Item;