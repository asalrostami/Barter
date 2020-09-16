import React, {Component} from 'react';
import {FormControl,Col,Row,Container,Form,Button,InputGroup} from 'react-bootstrap';
import styles from './Filter.module.css';


class Filter extends Component  {
    constructor(props){
        super(props);
        this.state = {
            filterValue: ""
        };
    }
    
    handleInputChange = (event) => {
        this.setState({filterValue : event.target.value}, () => {
            console.log("filterValue in filter",this.state.filterValue);
        });
       
        
    }
    handleDropdownChange = (event) => {
        this.props.onChangeValue(event.target.value);
    }
    searchBtnHandler = () => {
        this.props.onChangeValue(this.state.filterValue);
    }
    render(){
        
        return (
          
                <Container fluid className={styles.Content}>
                    <Row className={styles.row}>
                       <Col xs={7} md={8}>
                            <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                className={`mr-sm-2 ${styles.numeral}`}
                                placeholder="Enter Item Name"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                onChange={this.handleInputChange}
                                />
                                <InputGroup.Append>
                                   <Button className={styles.numeral}  variant="outline-warning" onClick={this.searchBtnHandler}>Search</Button>
                                </InputGroup.Append>
                            </InputGroup>

                            </div>
                        </Col>
                
                        <Col xs={5} md={4}>
                            <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control className={styles.numeral} as="select" onChange={this.handleDropdownChange}>
                                <option>All Items</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                </Form.Control>
                            </Form.Group>
                            </Form>
                        </Col> 
                        
                    </Row>
                </Container>   
        
            );
        }
}

export default Filter;