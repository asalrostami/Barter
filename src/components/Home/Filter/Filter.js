import React, {Component} from 'react';
import { MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";

class Filter extends Component  {

    render(){
        return (
               <div id="wrapper" className="d-flex align-items-center bd-highlight mb-3 example-parent">
                    <div  className="p-2 flex-grow-1 bd-highlight col-example">
                        <MDBCol md="12">
                            <div className="input-group md-form form-sm form-1 pl-0">
                                <div className="input-group-prepend">
                                    <span className="input-group-text  orange lighten-1 lighten-3 border border-warning" id="basic-text1">
                                        <MDBIcon className="text-white" icon="search" />
                                    </span>
                                </div>
                                <input className="form-control rounded-right my-0 py-1 block-example border border-warning" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                        </MDBCol>
                    </div>
                    <div className="p-2 bd-highlight col-example"></div>
                    <div className="p-2 bd-highlight col-example">
                        <MDBDropdown className="responsive">
                            <MDBDropdownToggle caret color="amber darken-1">
                            <span className="mr-2 "> All  </span> 
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                                <MDBDropdownItem>All</MDBDropdownItem>
                                <MDBDropdownItem>last week</MDBDropdownItem>
                                <MDBDropdownItem>last month</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>
            );
        }
}

export default Filter;