import React,{Component} from 'react';
import {Row,Container, Col,Form} from 'react-bootstrap';
import styles from './Item.module.css';
import Button from '../Button/Button';
import Images from '../../Share/Item/Images/Images';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import {getItem,removeItemFromItems,removeImags,removeItemFromUsers} from '../../../api/itemApi';





class Item extends Component {
     state = {
         item : {
             title : {
                 type:"text",
                 name: "title",
                 value: ''
             },
             description : {
                 type:"textarea",
                name: "description",
                value: ''
            },
            country : {
                type:"text",
                name: "country",
                value: ''
            },
            city : {
                type:"text",
                name: "city",
                value: ''
            },
            submitedDate : {
                type:"text",
                name: "submitedDate",
                value: ''
            },
            
            lookingfor_title: {
                type:"text",
                name: "lookingfor_title",
                value: ''
            },
            lookingfor_description : {
                type:"textarea",
                name: "lookingfor_description",
                value: ''
            },
            forBarterSwitch: {
                type:"switch",
                name:"switch",
                value : false
            },
            images: [],
            itemId: null,
            userId: null
         },

        validated: false,
        addingItem: true,  
        formIsValid:true,
        
      }
      componentDidMount(){
          this.props.onEmptyErrorMsg();
          if(this.props.itemId){
            const item = {...this.state.item};
            item["itemId"] = this.props.itemId;
            this.setState({item});
            this.getItemHandler(this.props.itemId);
          }
          
      }
      setSubmitedDate = () => {
          const today = this.getCurrentDate();
          const item = {... this.state.item}
          item.submitedDate.value = today
          this.setState({item});
      }

     getCurrentDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
       return today;
    }
    inputChangeHandler = (event , inputIdentifier) => {
        const value = event.target.value;
        const item = {... this.state.item};
        item[inputIdentifier].value = value;
        this.setState({item});    
    }

    addItemHandler =  (event) => {
        const form = event.currentTarget;
        console.log("event" ,form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setSubmitedDate();
        this.setState({validated:true}, () => {
            console.log("final_ state", this.state);
            console.log("userId item", this.props.userId);
            console.log("itemsId", this.props.itemsId);
             this.props.onSetItems(this.state.item,this.props.userId,this.props.token);
            //  this.props.onAddItems(this.props.itemsId,this.props.userId, this.props.token);
             this.props.history.goBack();

        });

    };

    getItemHandler = (itemId) => {
        getItem(itemId)
        .then(response => {
            console.log("respone getItem",response);
            this.setState((prevState) => {
                return {
                    item: { ...response, ...prevState.item }
                }
            })
        })
        .catch(error => {
            console.log(error);   
            throw new Error("error",error);
        })
    }
    

    modifyItemHandler = () => {
        // checkValidity 


    }
    deleteItemHandler = () => {
        removeItemFromItems(this.state.item.itemId)
        .then(res => {
            console.log("remove item from item successfully",res)
        }).catch(err => {
            throw new Error(err.message)
        })

        removeItemFromUsers(this.state.item.itemId,this.state.item.userId)
        .then(res => {
            console.log("remove item from user successfully",res)
        }).catch(err => {
            throw new Error(err.message)
        })

        removeImags(this.state.item.images)
        .then(res => {
            console.log("remove images from storage successfully",res)
        }).catch(err => {
            throw new Error(err.message)
        })
    }
    cancelItemHandler = () => {
        this.props.history.goBack();
    }
    handleSwitchChange = () => {
        const item = {... this.state.item}
        for(let keys in item["forBarterSwitch"]){
            if(keys === "value"){
                item["forBarterSwitch"][keys] = !item["forBarterSwitch"][keys]
            }
        }
         this.setState({item},() => {
            console.log("switchBarter", this.state.item.forBarterSwitch.value);
         });
       
    }
    // callback function
    getImagesHandler = (images) => {
        const item = {... this.state.item}
        item["images"] = images
        this.setState({item},() => {
            console.log("images" , this.state.item.images);
        });
    }
    render() {
        let errorLB = null;
        if(!this.state.formIsValid) {
            errorLB = ( <label className={styles.label}>Please enter the required information</label>)
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
            
            <Form noValidate validated={this.state.validated}>
                    <Form.Label className={styles.font_title}>Item's Information :</Form.Label>
                    <div className={[styles.div ,styles.font_desc].join(' ')}>
                        {/* <Form.Group as={Row} controlId="exampleForm.ControlInput1"> */}
                        <Form.Group as={Row} controlId="validationCustom01">
                            <Form.Label className={styles.font_desc} column sm="3">Title</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                required  
                                type="text" 
                                value={this.state.item.title.value} 
                                placeholder="Title" 
                                onChange={(event) => this.inputChangeHandler(event,"title")}
                                />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                Please choose a title.
                            </Form.Control.Feedback>
                         </Form.Group> 
                         <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={styles.font_desc} column sm="3">Descripton</Form.Label>
                            <Col sm="9">
                                <Form.Control  
                                as="textarea" 
                                value={this.state.item.description.value} 
                                rows="3" 
                                onChange={(event) => this.inputChangeHandler(event,"description")}/>
                            </Col>
                         </Form.Group>
                         {/* <Form.Group as={Row} controlId="exampleForm.ControlInput1"> */}
                         <Form.Group as={Row} controlId="validationCustom02">
                            <Form.Label className={styles.font_desc} column sm="3">Country</Form.Label>
                            <Col sm="9">
                                 <Form.Control   
                                 required
                                 type="text" 
                                 value={this.state.item.country.value} 
                                 placeholder="Country" 
                                 onChange={(event) => this.inputChangeHandler(event,"country")}
                                 />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                Please choose a country.
                            </Form.Control.Feedback>
                         </Form.Group> 
                         {/* <Form.Group as={Row} controlId="exampleForm.ControlInput1"> */}
                         <Form.Group as={Row} controlId="validationCustom03">
                            <Form.Label className={styles.font_desc} column sm="3">City</Form.Label>
                            <Col sm="9">
                                 <Form.Control  
                                 required 
                                 type="text" 
                                 value={this.state.item.city.value} 
                                 placeholder="City" 
                                 onChange={(event) => this.inputChangeHandler(event,"city")}
                                 />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                Please choose a city.
                            </Form.Control.Feedback>
                         </Form.Group> 
                         <Form.Group as={Row} controlId="ControlInput1">
                            <Form.Label className={styles.font_desc} column sm="4" md="4">Submited Date</Form.Label>
                            <Col sm="8" md="8">
                                 <Form.Control 
                                 name="submitedDate"
                                 plaintext 
                                 readOnly 
                                 defaultValue={this.getCurrentDate()} />
                            </Col>
                         </Form.Group>
                    </div>
                        <Form.Label  className={styles.font_title}>Looking for :</Form.Label>
                    <div className={[styles.div ,styles.font_desc].join(' ')}>
                    {/* <Form.Group as={Row} controlId="exampleForm.ControlInput1"> */}
                    <Form.Group as={Row} controlId="validationCustom04">
                            <Form.Label className={styles.font_desc} column sm="3">Title</Form.Label>
                            <Col sm="9">
                                <Form.Control  
                                required 
                                type="text" 
                                value={this.state.item.lookingfor_title.value} 
                                placeholder="Title" 
                                onChange={(event) => this.inputChangeHandler(event,"lookingfor_title")} 
                                 />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                Please choose a title.
                            </Form.Control.Feedback>
                         </Form.Group> 
                         <Form.Group as={Row} controlId="ControlTextarea2">
                            <Form.Label className={styles.font_desc} column sm="3">Descripton</Form.Label>
                            <Col sm="9">
                                <Form.Control  
                                as="textarea" 
                                value={this.state.item.lookingfor_description.value} 
                                rows="3" 
                                onChange={(event) => this.inputChangeHandler(event,"lookingfor_description")} />
                            </Col>
                         </Form.Group>
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
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <Button  title="CANCLE" clicked={this.cancelItemHandler}/>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <Button  title="ADD" type="submit" clicked={this.addItemHandler} />
                     </Col>
                     <Col xs={3} sm={3} md={3} lg={3}>
                        <Button  title="MODIFY" clicked={this.modifyItemHandler}/>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <Button  title="DELETE" clicked={this.deleteItemHandler}/>
                    </Col>
                </Row>
            
        </Container>

        )
   }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated,
        userId: state.auth.userId,
        token: state.auth.token,
        
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onEmptyErrorMsg: () => dispatch(actions.emptyErrorMsg()),
        onSetItems:(item, userId,token) => dispatch(actions.setItems(item, userId, token)),
        // onAddItems:(items, userId ,token) => dispatch(actions.addItems(items, userId, token))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Item);