import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment'
import {Row,Container, Col,Form} from 'react-bootstrap';

import Button from '../Button/Button';
import Images from '../../Share/Item/Images/Images';
import * as actions from '../../../store/actions/index';
import {getItem} from '../../../api/itemApi';
import defaultItem from './utils/defaultItem';
import styles from './Item.module.css';

class Item extends Component {
     state = {
         item : null,
        validated: false,
        addingItem: true,  
        formIsValid:true,
        updatedImgsFile: null
        
      }
      componentDidMount(){
        this.props.onEmptyErrorMsg();
        if(this.props.location?.state?.itemId){
            console.log("^^^^this.props.itemId in item",this.props.location.state.itemId)
            this.getItemHandler(this.props.location.state.itemId);
        } else {
            console.log("&&&&& without item id");
            const item = {...defaultItem};
            const today = this.getCurrentDate();
            item.submitedDate.value = today
            this.setState({item});      
          }
          
      }
      componentDidUpdate(preProps) {
          if(this.props.isLoading !== preProps.isLoading) {
              if(this.props.isLoading === false) {
                this.props.history.goBack();
              }
          }
      }
    //   setSubmitedDate = () => {
    //       const today = this.getCurrentDate();
    //       const item = {... this.state.item}
    //       item.submitedDate.value = today
    //       this.setState({item});
    //   }

     getCurrentDate = () => {
       const today = moment().format('L');
       return today;
     }
     getSubmitedDate = () => {

     }
    inputChangeHandler = (event , inputIdentifier) => {
        const value = event.target.value;
        const item = {... this.state.item};
        item[inputIdentifier].value = value;
        this.setState({item});    
    }

    addItemHandler =  (event) => {
        
        event.preventDefault();
        event.stopPropagation();
        // debugger
        const form = event.currentTarget;
        console.log("form" ,form);
        console.log("form.checkValidity()" ,form.checkValidity());
        // debugger
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("@@@@@@@@@@@@@@@@@@Failed");
                
        
        }else{
            // debugger
            // this.setSubmitedDate();
            
            console.log("final_ state", this.state);
            console.log("userId item", this.props.userId);
            console.log("itemsId", this.props.itemsId);
            
            this.props.onSetIsLoadingTrue(true);
            this.props.onSetItems(this.state.item,this.state.updatedImgsFile,this.props.userId,this.props.token);    
        } 
        this.setState({validated : true});
    };

    getItemHandler = (itemId) => {
        getItem(itemId)
        .then(response => {
            console.log("respone getItem",response.data);
            this.setState({ item: response.data });
        })
        .catch(error => {
            console.log(error);   
            throw new Error("error",error);
        })
    }

    
    

    modifyItemHandler = () => {
        const Updatedimages = this.state.updatedImgsFile;

        this.props.onSetIsLoadingTrue(true);
        this.props.onUpdateItem(this.props.location.state.itemId,this.state.item,Updatedimages,this.props.userId,this.props.token);
        console.log("isupdated",this.props.isUpdated);

    }
    deleteItemHandler = () => {
        this.props.onSetIsLoadingTrue(true);
        this.props.onRemoveItemFromItems(this.props.location.state.itemId)
        .then(res => {
            console.log("remove item from item successfully",res)
        }).catch(err => {
            throw new Error(err.message)
        })

        this.props.onRemoveItemFromUsers(this.props.location.state.itemId,this.props.userId)
        .then(res => {
            console.log("remove item from user successfully",res)
        }).catch(err => {
            throw new Error(err.message)
        })
        if(this.state.item.images){
            this.props.onRemoveImags(this.state.item.images)
            .then(res => {
            console.log("remove images from storage successfully",res)
            }).catch(err => {
            throw new Error(err.message)
            })
        }
        
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
    getImagesHandler = (images,updatedImagesFile) => {

        const item = {... this.state.item}
        item["images"] = images
        this.setState({item,updatedImgsFile:updatedImagesFile},() => {
            console.log("(((((((((images" , this.state.item.images);
        });
    }
    
    render() {
        const { item, formIsValid } = this.state;
        
        if(!item) return null;

        let errorLB = null;
        if(!formIsValid) {
            errorLB = ( <label className={styles.label}>Please enter the required information</label>)
        }
    
        const itemElementsArray = [];
        for (let key in item) {
            itemElementsArray.push({
                id: key,
                config:item[key]
            });
        }
        

        let itemForm = null;
        itemForm = (
            
            <Form  id="FORMID" noValidate validated={this.state.validated}  onSubmit={this.addItemHandler}>
                    <Form.Label className={styles.font_title}>Item's Information :</Form.Label>
                    <div className={[styles.div ,styles.font_desc].join(' ')}>
                        {/* <Form.Group as={Row} controlId="exampleForm.ControlInput1"> */}
                        <Form.Group as={Row} controlId="validationCustom01">
                            <Form.Label className={styles.font_desc} column sm="3">Title</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                required  
                                type="text" 
                                value={item.title.value} 
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
                                value={item.description.value} 
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
                                 value={item.country.value} 
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
                                 value={item.city.value} 
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
                                 defaultValue={item.submitedDate.value} />
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
                                value={item.lookingfor_title.value} 
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
                                value={item.lookingfor_description.value} 
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
                        <Images onGetImagesProps={this.getImagesHandler} 
                        itemimages={item.images 
                        ? item.images
                        :[null,null,null]} />
                        <Row>
                        
                            <Col className={styles.space}  >
                                <div className='custom-control custom-switch'>
                                    <input
                                    type='checkbox'
                                    checked={item.forBarterSwitch.value}
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
                        {/* <Button  title="ADD" type="submit"  form="FORMID"  /> */}
                        {this.props.location?.state?.itemId
                        ? <Button  title="ADD ITEM" type="submit"  form="FORMID"  disabled={true}/>
                        :<Button  title="ADD ITEM" type="submit"  form="FORMID"  />
                        }

                     </Col>
                     <Col xs={3} sm={3} md={3} lg={3}>
                        {this.props.location?.state?.itemId
                            ? <Button  title="MODIFY" type="button"  clicked={this.modifyItemHandler}/>
                            : <Button  title="MODIFY" type="button" clicked={this.modifyItemHandler} disabled={true}/>
                        }   
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        {this.props.location?.state?.itemId
                            ? <Button  title="DELETE" type="button" clicked={this.deleteItemHandler}/>
                            : <Button  title="DELETE" type="button" clicked={this.deleteItemHandler} disabled={true}/>
                        }

                      
                    </Col>
                </Row>
            
        </Container>

        )
   }
}

const mapStateToProps = ({auth, item}) => {
    return {
        error: auth.error,
        isAuthenticated: auth.isAuthenticated,
        userId: auth.userId,
        token: auth.token,
        isLoading : item.isLoading,
        isUpdated : item.isUpdated
        
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onEmptyErrorMsg: () => dispatch(actions.emptyErrorMsg()),
        onSetItems:(item, updatedImgsFile,userId,token) => dispatch(actions.setItems(item, updatedImgsFile,userId, token)),
        onSetIsLoadingTrue:(isLoading) => dispatch(actions.setIsLoadingTrue(isLoading)),
        onUpdateItem:(itemId, item,Updatedimages,userId,token) => dispatch(actions.updateItem(itemId, item,Updatedimages,userId,token)),
        onRemoveItemFromItems:(itemId) => dispatch(actions.removeItemFromItems(itemId)),
        onRemoveItemFromUsers:(itemId,userId) => dispatch(actions.removeItemFromUsers(itemId,userId)),
        onRemoveImags:(images) => dispatch(actions.removeImags(images))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Item);