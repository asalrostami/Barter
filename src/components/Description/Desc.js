import React, {Component} from 'react';
import styles from './Desc.module.css';
import pic from '../../assets/Images/trade1.jpg';

class Desc extends Component  {
    render(){
        return(
            <div className={styles.desc}>
                <img src={pic}  className={styles.image}/>
                <div className={styles.text}>
                   <h1>Your request has been approved</h1>
                </div>
            </div>
        )
    }
   
}

export default Desc;