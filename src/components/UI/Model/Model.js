import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import Button from '../../Share/Button/Button';



class CustomModel extends Component {
  
    shouldComponentUpdate(nextProps, nextState) {
      // return nextState.show !== this.state.show || nextProps.children !== this.props.children;
    }
   
        render() {
        return (
           <Modal show={this.props.show} backdrop="static"
           keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Delete the image</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this image?</Modal.Body>
            <Modal.Footer>
            <Button title="YES" clicked={this.props.handleClose} />
            </Modal.Footer>
          </Modal>
           
        )
    }
}

export default CustomModel;