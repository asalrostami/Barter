import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import Button from '../../Share/Button/Button';



class CustomModel extends Component {
  
    // shouldComponentUpdate(nextProps, nextState) {
    //   return nextState.show !== nextProps.show ;
    // }
   
        render() {
        return (
           <Modal show={this.props.show} backdrop="static"
           keyboard={false}
           centered>
            <Modal.Header >
              <Modal.Title>Delete the image</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this image?</Modal.Body>
            <Modal.Footer>
            <Button title="CLOSE" clicked={this.props.handleClose} />
            <Button title="YES" clicked={this.props.deleteImage} />
            </Modal.Footer>
          </Modal>
           
        )
    }
}

export default CustomModel;