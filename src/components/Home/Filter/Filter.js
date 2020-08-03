import React, {Component} from 'react';
import {FormControl,Col,Row,Container,Form,Button,InputGroup} from 'react-bootstrap';
import styles from './Filter.module.css';


class Filter extends Component  {
    state = {
        timePeriod: ""
    }
    handleInputChange = (event) => {
        this.setState({timePeriod : event.target.value}, () => {
            console.log("timePeriod in filter",this.state.timePeriod);
        });
        this.props.onChangeValue(event.target.value);
        
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
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                   <Button className={styles.numeral}  variant="outline-warning">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>

                            </div>
                        </Col>
                
                        <Col xs={5} md={4}>
                            <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control className={styles.numeral} as="select" onChange={this.handleInputChange}>
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