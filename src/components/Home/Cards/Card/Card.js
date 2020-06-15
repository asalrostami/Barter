import React from 'react';
import image1 from '../../../../assets/Images/barter2.png';
import {Card} from 'react-bootstrap';
import styles from './Card.module.css';
import CardDesc from './CardDesc/CardDesc';
import Button from '../../../Share/Button/Button';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../../../store/actions/auth';


const card = (props) => {
  const confirmHandler = () => {
    if(!props.isAuthenticated){
      props.history.push('/auth');
    }
  }
    return (
        <Card className={styles.padding}>
          <Card.Img variant="top" src={image1}/>
          <Card.Body className="text-center">
            <Card.Title>Card title</Card.Title>
              <CardDesc />
            <Button  title="I'm Interested" clicked={confirmHandler}/>
          </Card.Body>
        </Card>
    );
}
const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.isAuthenticated
  };
}

export default withRouter(connect(mapStateToProps)(card));