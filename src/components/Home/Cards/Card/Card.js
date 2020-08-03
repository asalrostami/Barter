import React,{Component} from 'react';
import img from '../../../../assets/Images/noPhoto.png';
import {Card} from 'react-bootstrap';
import styles from './Card.module.css';
import CardDesc from './CardDesc/CardDesc';
import Button from '../../../Share/Button/Button';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../../../store/actions/index';


class CardItem extends Component {
  state = {
    finalImgUrl : this.props.downloadedImgURL
}
 componentDidMount() {
  const url =  "";
  // console.log("image in card",this.props.image);
  if(this.props.image){
      this.props.onSetIsLoadingTrue(true);
      this.props.onGetImage(this.props.image)
      .then(response => {
          console.log("response in card",response);
      })   
  }else {
    this.setState({finalImgUrl:img})
  }  
 }

 componentWillReceiveProps(nextProps) {
  // console.log("downloadedImgURL in shouldComponentUpdate" ,this.props.downloadedImgURL);
  // console.log("nextisloading in shouldComponentUpdate" ,nextProps.downloadedImgURL);
  if(this.props.downloadedImgURL !== nextProps.downloadedImgURL) {
      for(let obj of nextProps.downloadedImgURL){
          // console.log("obj in itemSummary",Object.keys(obj)[0])
          if(this.props.image === Object.keys(obj)[0]){
              this.setState({finalImgUrl:Object.values(obj)[0]});
          }
      }
     
  }else {
      this.setState({finalImgUrl:img})
  }
}
  confirmHandler = () => {
    if(!this.props.isAuthenticated){
      this.props.history.push('/auth');
    }else{
      this.props.history.push('/desc');
    }
  }
  render(){
    return(
      <Card className={styles.padding}>
          <Card.Img variant="top" src={this.state.finalImgUrl} className={styles.img}/>
          <Card.Body className="text-center">
            <Card.Title>{this.props.title}</Card.Title>
              <CardDesc 
               city={this.props.city}
               submitedDate={this.props.submitedDate}
               lookingfor={this.props.lookingfor}
               forBarterSwitch={this.props.forBarterSwitch}
               />
            <Button  title="I'm Interested" clicked={this.confirmHandler}/>
          </Card.Body>
        </Card>
    )
  }

}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.isAuthenticated,
      downloadedImgURL: state.item.downloadedImgURL
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onEmptyErrorMsg: () => dispatch(actions.emptyErrorMsg()),
      onSetIsLoadingTrue:(isLoading) => dispatch(actions.setIsLoadingTrue(isLoading)),
      onGetImage:(imgName) => dispatch(actions.getImage(imgName)),
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CardItem));