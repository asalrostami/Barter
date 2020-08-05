import React, {Component} from 'react';
import {Row,Col,Image} from 'react-bootstrap';
import styles from './Images.module.css';
import Model from '../../../UI/Model/Model';

class Images extends Component {
    state = {
        selectedId:null,
        selectedFile: null,
        imagePreviewUrl: null,
        imgURLList: [null,null,null],
        showModel: false
    }

    // for(let i=0; i < 3; i++) {
    //    if(!imageList[i]) imagList[i] === null;
    // }
    // this.setState({
    //     imgURLList = imagList;
    //    })
    fileChangedHandler = (event) => {
        // console.log("e.id",event.target.id);
        this.setState({
          selectedFile: event.target.files[0]
        })
        const imgURL = URL.createObjectURL(event.target.files[0]);
        console.log("image name", event.target.files[0].name);
        const index = Number(event.target.id);

        const list = this.state.imgURLList;
        list[index] = event.target.files[0];
        // list[index] = imgURL;
        this.setState({
                imagePreviewUrl: imgURL,
                imgURLList: list
              },() => {
                console.log("imgURLList", this.state.imgURLList);
              });
       
          // callback function
          this.props.onGetImages(list);
      }

      onChangeSubImageHandler = () => {
        const reveiwImageURL = this.state.imagePreviewUrl;

      }
      modelCloseHandler = () => {
        this.setState({showModel: false})
      }
      deleteImageHandler = () => {
        // const selectedURL = this.state.imagePreviewUrl;
        const selectedURL = this.state.selectedFile;
        const list = this.state.imgURLList 
        const selectedURLIndex = list.indexOf(selectedURL);
       
        console.log("selectedURLIndex delete",selectedURLIndex)
        if(selectedURLIndex > -1) {
            list.splice(selectedURLIndex, 1, null);
        }
        
        let imgPreviewSet = null;
         list.map((url) => {
          if(url !== null) {
            //  imgPreviewSet = url;
            imgPreviewSet = URL.createObjectURL(url)
          }
        })
        console.log("list after delete",list)
        this.setState({imgURLList:list,imagePreviewUrl:imgPreviewSet }
        , this.togglePopup)
      }
      onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
     }

     togglePopup = () => {  
      this.setState({ showModel: !this.state.showModel});  
      }  
      
    displayImageHandler = (index) => {
        const imgList = this.state.imgURLList;
        const imgURL = URL.createObjectURL(imgList[index]);
        console.log("imgURL", imgURL);
        this.setState({imagePreviewUrl: imgURL,selectedFile:imgList[index]})
        // this.setState({imagePreviewUrl: imgList[index]})

    }
    render(){
        console.log("array lenght1",this.state.imgURLList.length);
      let picture =  this.state.imgURLList.map((url,index) => (
       !url ? ( <Col className={styles.col} xs="4" sm="4" md="4" key={`${url} ${index}`}>
                    <div>
                        <input className={styles.display} type="file"  id={index}
                         onChange={this.fileChangedHandler} /> 
                         <label className={styles.label} htmlFor={index}>upload image</label>
                      </div>
                </Col>
                ) 
             : ( <Col className={styles.col} xs="4" sm="4" md="4" key={`${url} ${index}`}>
                     <Image className={styles.image_sub} src={URL.createObjectURL(url)}  
                     onClick={() => this.displayImageHandler(index)} 
                    rounded 
                    /> 
                </Col>
                 
                )
      )
      );
             
        return (
          
            <div>
               {this.state.showModel ? 
                       <Model show={this.state.showModel}
                       handleClose={this.togglePopup}
                       deleteImage={this.deleteImageHandler} />
                      : null}
                  <Row><Col>
                      <Image className={styles.image} src={this.state.imagePreviewUrl} rounded />
                  </Col> </Row>
                  <Row>
                    <Col xs="12" sm="12" md="12">
                      <button className={styles.button} 
                      disabled={this.state.imagePreviewUrl == null ? true : false} 
                      onClick={this.togglePopup}>Delete this Image</button>
                    </Col>
                  </Row>
                    <Row className={styles.row}>
                        {picture}
                    {/* </Col> */}
                        {/* <Col className={styles.col} xs="0" sm="1,5" md="1.5"></Col> */}
                    </Row>

            </div>
        )              
    }
}


export default Images;