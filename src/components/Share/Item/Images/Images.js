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
        const index = Number(event.target.id);
        let reader = new FileReader();
         
        reader.onloadend = () => {
          const list = this.state.imgURLList;
          list[index] = reader.result;
          this.setState({
            imagePreviewUrl: reader.result,
            imgURLList: list
          });
        }
     
       reader.readAsDataURL(event.target.files[0])
        // console.log("reader url" , file);
      }

      onChangeSubImageHandler = () => {
        const reveiwImageURL = this.state.imagePreviewUrl;

      }
      modelCloseHandler = () => {
        this.setState({showModel: false})
      }
      deleteImageHandler = () => {
        const selectedURL = this.state.imagePreviewUrl;
        const list = this.state.imgURLList
        const selectedURLIndex = list.indexOf(selectedURL);
        if(selectedURLIndex > -1) {
            list.splice(selectedURLIndex, 1, null);
        }
        let imgPreviewSet = null;
         list.map((url) => {
          if(url !== null) {
             imgPreviewSet = url;
          }
        })
        this.setState({imgURLList:list,imagePreviewUrl:imgPreviewSet }
        , this.togglePopup)
      }
      onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
    //     axios.post("http://localhost:8000/upload", data, { 
    //        // receive two    parameter endpoint url ,form data
    //    })
    //  .then(res => { // then print response status
    //      console.log(res.statusText)
    //   })
     }

     togglePopup = () => {  
      this.setState({ showModel: !this.state.showModel});  
      }  
      
    displayImageHandler = (index) => {
        const imgList = this.state.imgURLList;
        this.setState({imagePreviewUrl: imgList[index]})
       console.log("index",index );
      //  console.log("img url",this.state.imagePreviewUrl)
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
                     <Image className={styles.image_sub} src={url}  
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