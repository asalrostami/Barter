import React,{Component} from 'react';
import {Row,Container, Col,Form} from 'react-bootstrap';
import styles from './Item.module.css';
import Button from '../Button/Button';
import {checkValidity} from '../utility';
import Images from '../../Share/Item/Images/Images';

class Item extends Component {
     state = {
         item: {
             itemId:{
                 elementType: 'label',
                 name: 'ItemID',
                 value: '',
                 valid: false,
                 required: true
             },
             title: {
                elementType: 'input',
                name: 'ItemTitle',
                value: '',
                placeholder:'Title',
                valid: false,
                required: true
            },
            description:  {
                elementType: 'textarea',
                name: 'ItemDesc',
                value: '',
                valid: false,
                required: false
            },
             
            country: {
                elementType: 'input',
                name: 'country',
                value: '',
                placeholder:'Country',
                valid: false,
                required: true
            },
            city: {
                elementType: 'input',
                name: 'city',
                value: '',
                placeholder:'City',
                valid: false,
                required: true
            },
            
             submitedDate:  {
                elementType: 'plaintext',
                name: 'SubmitedDate',
                value: '',
                valid: false,
                required: true
            },
             lookingfor: {
                 title:  {
                    elementType: 'input',
                    name: 'RequestedTitle',
                    value: '',
                    placeholder:'Title',
                    valid: false,
                    required: true
                },
                 description:  {
                    elementType: 'textarea',
                    name: 'RequestedDesc',
                    value: '',
                    valid: false,
                    required: false
                },
             },
             images:[],
             forBarterSwitch:  {
                elementType: 'switch',
                name: 'ForBurterSwitch',
                value: false,
                required: false

            },
             status: {
                elementType: 'label',
                name: 'Status',
                value: "Offered",
                required: false
               
            },
         },
         
        visible: false,
        formIsValid: true,
        addingItem: true,
        
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
        // console.log("input value", value);
    }

    validityCheckHandler = (value, rules) =>{
        const isValid = checkValidity(value,rules);
        this.setState({formIsValid:isValid})
    }
    addItemHandler = () => {
        if(this.state.addingItem){
            let itemInfo = null;

        }
       
        // checkValidity 

    }
    modifyItemHandler = () => {
        // checkValidity 


    }
    deleteItemHandler = () => {

    }
    cancelItemHandler = () => {
        this.props.history.goBack();
    }
    handleSwitchChange = () => {
        const forBarter =this.state.item.forBarterSwitch 
        for(let keys in forBarter){
            if(keys === "value"){
                forBarter[keys] = !forBarter[keys] ;
            }
        }
        this.setState({forBarterSwitch:forBarter});
        console.log("switchBarter", forBarter["value"]);
    }
    // callback function
    getImagesHandler = (images) => {
        this.setState({images:images});
    }
    render() {
        let errorLB = null;
        if(!this.state.formIsValid) {
            errorLB = ( <label className={styles.label}>Please enter the required information</label>)
        }
        const button = (title, event) => {
            return(<Col xs={3} sm={3} md={3} lg={3}>
                <Button  title={title} clicked={event}/>
                </Col>);
        }

        const formGroupText = (placeholder,value) => {
            return ( <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="3">{placeholder}</Form.Label>
                    <Col sm="9">
                    <Form.Control   type="text" value={value} placeholder={placeholder} onChange={this.inputChangeHandler} />
                    </Col>
                </Form.Group>    
             );
        }
        const formGroupTextarea = () => {
            return ( <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={styles.font_desc} column sm="3">Descripton</Form.Label>
                    <Col sm="9">
                    <Form.Control  as="textarea" rows="3" />
                    </Col>
                </Form.Group>
            );
        }
        const fromGroupPlainText = () => {
            return(
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.font_desc} column sm="4" md="4">Submited Date</Form.Label>
                    <Col sm="8" md="8">
                    <Form.Control plaintext readOnly defaultValue={this.getCurrentDate()} />
                    </Col>
                </Form.Group>
            );
        }
        const itemElementsArray = [];
        for (let key in this.state.item) {
            itemElementsArray.push({
                id: key,
                config:this.state.item[key]
            });
        }
        console.log("itemElementsArray" ,itemElementsArray )
        let itemForm = null;
        itemForm = (
            <Form>
                    <Form.Label className={styles.font_title}>Item's Information :</Form.Label>
                    <div className={[styles.div ,styles.font_desc].join(' ')}>
                        {formGroupText("Title")}
                        {formGroupTextarea()}
                        {formGroupText("Country")}
                        {formGroupText("City")}
                        {fromGroupPlainText()}
                    </div>
                        <Form.Label  className={styles.font_title}>Looking for :</Form.Label>
                    <div className={[styles.div ,styles.font_desc].join(' ')}>
                        {formGroupText("Title")}
                        {formGroupTextarea()}
                    </div>
            </Form>
        );
        
        
    
        return(
            <Container className={styles.con} fluid="md">
                <Row>
                    <Col className={styles.col}>
                        {errorLB}
                    </Col>
                </Row>
                <Row >
                    <Col className={styles.col}>
                        <Images onGetImages={this.getImagesHandler}/>
                        <Row>
                        
                            <Col className={styles.space}  >
                                <div className='custom-control custom-switch'>
                                    <input
                                    type='checkbox'
                                    className='custom-control-input'
                                    id='customSwitches'
                                    onChange={this.handleSwitchChange}
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
                    {itemForm}
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