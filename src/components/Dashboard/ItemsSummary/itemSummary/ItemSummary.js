import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from './ItemSummary.module.css';
import img from '../../../../assets/Images/noPhoto.png';
import Button from '../../../Share/Button/Button';
// import {getImage} from '../../../../api/itemApi';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';

class ItemSummary extends Component {
   state = {
       finalImgUrl : this.props.downloadedImgURL
   }
    componentDidMount() {
        const url =  "";
        // console.log("image in itemSummary",this.props.image);
        if(this.props.image){
            this.props.onSetIsLoadingTrue(true);
            this.props.onGetImage(this.props.image)
            .then(response => {
                console.log("response in itemSummary",response);
            })   
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
   
    render() {
        return(
            <Container className={styles.row}>
                    <Row >
                        <Col xs={3} md={3} lg={3} className={styles.col}>
                            <img className={styles.image}  src={this.state.finalImgUrl} alt="image" />
                        </Col>
                        <Col xs={6} md={6} lg={6} className={styles.font}>
                            <Row as={Row}>
                                <label className={styles.title}>Title : </label>
                                <label className={styles.title}>{this.props.title}</label>
                            </Row>
                            <Row as={Row}>
                                <label className={styles.title}>Title : </label>
                                <label className={styles.title}>{this.props.submitedDate}</label>
                            </Row>
                        </Col>
                        <Col xs={3} md={3} lg={3} >
                            <Row>
                                <Col className={styles.col_center}>
                                    { this.props.forBarterSwitch 
                                    ? <label className={styles.font,styles.font_color}>For Barter</label>
                                    :  <label className={styles.font,styles.font_color}>----</label>
                                    }
                                    {/* <label className={styles.font,styles.font_color} id={props.forBarterSwitch ? 'msg' : null}>For Barter</label> */}
                                </Col>
                                
                            </Row>
                            <Row className={styles.btn}>
                                <Col className={styles.col_center}>
                                    <Button title="Modify"></Button>
                                </Col>
                            
                            </Row>
                        </Col>
                    </Row>
                </Container>      
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

export default connect(mapStateToProps,mapDispatchToProps)(ItemSummary);