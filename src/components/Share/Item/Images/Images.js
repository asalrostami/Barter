import React, {Component} from 'react';
import {Row,Col,Image} from 'react-bootstrap';
import styles from './Images.module.css';
import Model from '../../../UI/Model/Model';
import * as actions from '../../../../store/actions/index';
import { connect } from 'react-redux';

class Images extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedId:null,
      selectedFile: null,
      imagePreviewUrl: null,
      imgURLList: [null,null,null],
      imgNameList:[null,null,null],
      showModel: false,
      previousImages : [null,null,null]
    };
  }
    
  convertedImages = (images) => {
      let imgArray = [];
      if(!Array.isArray(images)){
          imgArray[Object.keys(images)] = Object.values(images)[0]; 
          return imgArray
      }else{
          return images
      }
  } 
 
  //  componentDidMount() {
  //   // this.setState({imgURLList:[img,img,img]});
  //    const convertedImages = this.convertedImages(this.props.itemimages)
  //    console.log("convertedImages componentDidMount1",convertedImages);
  //   if(convertedImages){
  //    const download =  downloadImage(convertedImages);
  //    console.log("responce download images",download);
  //   //   convertedImages.map((imgName) => {
  //   //     if(imgName){
  //   //     this.props.onSetIsLoadingTrue(true);
  //   //     this.props.onGetImage(imgName)
  //   //     .then(response => {
  //   //         console.log("response in image componentDidMount1",response);
  //   //     })  
  //   //     }
  //   //   })        
  //   // }
  //  }
  // }

   componentDidMount() {
    let listImgsFile = [];
    let listImgsName = [];
    const imagesObject = this.props.downloadedImgURL;
    console.log("@@@@ ",this.props.itemimages);
    const convertedImages = this.convertedImages(this.props.itemimages)
    this.setState({previousImages:convertedImages});
    console.log("@@@@ ",convertedImages);
   
   if(convertedImages){
     convertedImages.map((imgName) => {
      //  debugger
       if(imgName){
       for(let i in imagesObject){
         const obj = imagesObject[i];
         if(Object.keys(obj)[0] === imgName && !listImgsFile.includes(Object.values(obj)[0])){
           listImgsFile.push(Object.values(obj)[0]); 
           listImgsName.push(imgName); 
           this.setState({imagePreviewUrl:Object.values(obj)[0]});
          //  console.log("****file from storage",convertURLToBlob(Object.values(obj)[0]))
          
         }
       }
      //  listImgsFile.push(imagURL);
       }else{
         listImgsFile.push(null); 
         listImgsName.push(null);  
       }
     })
       console.log("imagefile in componetDidMount in image",listImgsFile);
       console.log("imageName in componetDidMount in image",listImgsName);
       const threeItemList = [];
       const threeImagesName = [];
       if(listImgsFile.length < 3)
       { 
         for(let i=0; i<3 ; i++){
           if(listImgsFile[i]){
             threeItemList.push(listImgsFile[i])
             threeImagesName.push(listImgsName[i])
           }else{
             threeItemList.push(null);
             threeImagesName.push(null);
           }
         }
         listImgsFile = threeItemList;
         listImgsName = threeImagesName;
       }


       console.log("~~~~~threeItemList in componetDidMount in image",threeItemList);
       console.log("####listImgsFile in componetDidMount in image",listImgsFile);
       console.log("%%%%%listImgsName in componetDidMount in image",listImgsName);
       this.setState({imgURLList:listImgsFile});
       this.setState({imgNameList:listImgsName});
      
         
     
          
   }

  //  const imagesName = this.props.itemimages
  //  console.log("images in component did monts images", imagesName);
  //  this.setState({imgURLList:imagesName});
  }




  //  UNSAFE_componentWillReceiveProps(nextProps) {
  //   if(this.props.downloadedImgURL !== nextProps.downloadedImgURL) {
  //     const convertedImages = this.convertedImages(this.props.itemimages)
  //     let listImgsFile = [];
  //     if(convertedImages){
  //       convertedImages.map((imgName) => {
  //         if(imgName){
  //           for(let obj of nextProps.downloadedImgURL){
  //             if(imgName === Object.keys(obj)[0]){
  //               listImgsFile.push(Object.values(obj)[0]);
  //             }
  //           }
  //         }else{
  //           listImgsFile.push(null);  
  //         }
  //       })
  //       const threeItemList = [];
  //       if(listImgsFile.length < 3)
  //       { 
  //         for(let i=0; i<3 ; i++){
  //           if(listImgsFile[i]){
  //             threeItemList.push(listImgsFile[i])
  //           }else{
  //             threeItemList.push(null);
  //           }
  //         }
  //         listImgsFile = threeItemList;
  //       }
  //     }
  //     this.setState({imgURLList:listImgsFile});
        
  //   }else {
  //       this.setState({imgURLList:[img,img,img]})
  //   }
  // }



    fileChangedHandler = (event) => {
        // console.log("e.id",event.target.id);
        this.setState({
          selectedFile: event.target.files[0]
        })
        const imgURL = URL.createObjectURL(event.target.files[0]);
        console.log("image name", event.target.files[0].name);
        const index = Number(event.target.id);

        const list = this.state.imgURLList;
        const listNames = this.state.imgNameList;
        list[index] = event.target.files[0];
        listNames[index] = event.target.files[0].name
        // list[index] = imgURL;
        this.setState({
                imagePreviewUrl: imgURL,
                imgURLList: list,
                imgNameList: listNames
              },() => {
                console.log("imgURLList", this.state.imgURLList);
                console.log("imgNameList", this.state.imgNameList);
              });
       
          // callback function
          const updatedImagesFile = [];
          for(let file of this.state.imgURLList){
            if(file instanceof File ){
              updatedImagesFile.push(file);
            }
          }
          console.log("updatedImagesFile in images",updatedImagesFile);
          this.props.onGetImagesProps(listNames,updatedImagesFile);
      }

      onChangeSubImageHandler = () => {
        const reveiwImageURL = this.state.imagePreviewUrl;

      }
      modelCloseHandler = () => {
        this.setState({showModel: false})
      }
      deleteImageHandler = () => {
        const selectedimage = this.state.imagePreviewUrl;
        console.log("imagePreviewUrl delete" ,selectedimage);
        // const selectedURL = this.state.selectedFile;
        // console.log("selectedURL delete",selectedURL)
        const list = this.state.imgURLList 
        console.log("list delete",list)
        const listName = this.state.imgNameList 
        const selectedURLIndex = list.indexOf(selectedimage);
        // const selectedURLIndex = list.indexOf(selectedURL);
     
        console.log("selectedURLIndex delete",selectedURLIndex)
        if(selectedURLIndex > -1) {
            list.splice(selectedURLIndex, 1, null);
            listName.splice(selectedURLIndex, 1, null);
        }
        
        let imgPreviewSet = null;
         list.map((url) => {
          if(url !== null) {
            ( url instanceof File )
            ?  imgPreviewSet = URL.createObjectURL(url)
            : imgPreviewSet = url; 
            //  imgPreviewSet = url;
           
          }
        })
        console.log("list after delete",list)
        console.log("listName after delete",listName)
        this.setState({imgURLList:list,imagePreviewUrl:imgPreviewSet,imgNameList:listName }
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
        let imgURL = null;
       ( imgList[index] instanceof File )
        ? imgURL = URL.createObjectURL(imgList[index]) 
        : imgURL = imgList[index]
        // const imgURL = URL.createObjectURL(imgList[index]);
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

               {url instanceof File 
                  ?<Image className={styles.image_sub} src={URL.createObjectURL(url)}  
                  onClick={() => this.displayImageHandler(index)} 
                  rounded 
                  />
                  :<Image className={styles.image_sub} src={url}  
                  onClick={() => this.displayImageHandler(index)} 
                  rounded 
                  /> 
                }
                      
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
const mapStateToProps = state => {
  return {
      error: state.auth.error,
      token: state.auth.token,
      isLoading : state.item.isLoading,
      downloadedImgURL: state.item.downloadedImgURL
      
  };
};
const mapDispatchToProps = dispatch => {
  return {
      onEmptyErrorMsg: () => dispatch(actions.emptyErrorMsg()),
      onSetIsLoadingTrue:(isLoading) => dispatch(actions.setIsLoadingTrue(isLoading)),
      onGetImage:(imgName) => dispatch(actions.getImage(imgName)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Images);