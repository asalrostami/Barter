import React from 'react';
import {Modal} from 'react-bootstrap';
import Button from '../../Share/Button/Button';


const customModel = (props) => {
  return (
    <Modal show={props.show} backdrop="static"
    keyboard={false}
    centered>
     <Modal.Header >
       <Modal.Title>Delete the image</Modal.Title>
     </Modal.Header>
     <Modal.Body>Do you want to delete this image?</Modal.Body>
     <Modal.Footer>
     <Button title="CLOSE" clicked={props.handleClose} />
     <Button title="YES" clicked={props.deleteImage} />
     </Modal.Footer>
   </Modal>
    
 )
}


export default customModel;