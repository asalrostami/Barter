import React, {Component} from 'react';
import {FormControl,Col,Row,Container,Form,Button,InputGroup} from 'react-bootstrap';
import styles from './Filter.module.css';


class Filter extends Component  {

    render(){
        return (
            <div  className={styles.Content}>
                <Container fluid>
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
                                <Form.Control className={styles.numeral} as="select">
                                <option>All Items</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                </Form.Control>
                            </Form.Group>
                            </Form>
                        </Col> 
                        
                    </Row>
                </Container>   
            

                </div>
                // <div id="wrapper" className="d-flex align-items-center bd-highlight mb-3 example-parent">
                //          <div  className="p-2 flex-grow-1 bd-highlight col-example">
                //              <Col md="12">
                //              <Form inline className="input-group-prepend">
                //                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                //                      <Button variant="outline-warning">Search</Button>
                //                    </Form>
                //              </Col>
                //         </div>
                //           <div className="p-2 bd-highlight col-example"></div>
                //      <div className="p-2 bd-highlight col-example">
                //      <Form>
                //              <Form.Group controlId="exampleForm.ControlSelect1">
                //                  <Form.Control as="select">
                //                  <option>All Items</option>
                //                  <option>Last Week</option>
                //                  <option>Last Month</option>
                //                  </Form.Control>
                //              </Form.Group>
                //              </Form>
                //         </div> 
                //      </div>


          
            //    <div id="wrapper" className="d-flex align-items-center bd-highlight mb-3 example-parent">
            //         <div  className="p-2 flex-grow-1 bd-highlight col-example">
            //             <Col md="12">
            //                 <div className="input-group md-form form-sm form-1 pl-0">
            //                     <div className="input-group-prepend">
            //                         <span className="input-group-text  orange lighten-1 lighten-3 border border-warning" id="basic-text1">
            //                             {/* <MDBIcon className="text-white" icon="search" /> */}
            //                         </span>
            //                     </div>
            //                     <input className="form-control rounded-right my-0 py-1 block-example border border-warning" type="text" placeholder="Search" aria-label="Search" />
            //                 </div>
            //             </Col>
            //         </div>
             //         <div className="p-2 bd-highlight col-example"></div>
            //         <div className="p-2 bd-highlight col-example">
            //             <MDBDropdown className="responsive">
            //                 <MDBDropdownToggle caret color="amber darken-1">
            //                 <span className="mr-2 "> All  </span> 
            //                 </MDBDropdownToggle>
            //                 <MDBDropdownMenu basic>
            //                     <MDBDropdownItem>All</MDBDropdownItem>
            //                     <MDBDropdownItem>last week</MDBDropdownItem>
            //                     <MDBDropdownItem>last month</MDBDropdownItem>
            //                 </MDBDropdownMenu>
            //             </MDBDropdown>
            //         </div> */}
                // </div>
            
            );
        }
}

export default Filter;