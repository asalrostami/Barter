import React from 'react';
import image1 from '../../../assets/Images/bg.jpg';
import image3 from '../../../assets/Images/barter3.jpg';
import image2 from '../../../assets/Images/barter2.jpg';
import image4 from '../../../assets/Images/trade2.jpg';
import styles from './Header.module.css';
import { Carousel} from 'react-bootstrap'

const header = (props) => {
  
   return (
     <div className={styles.Content} >
    <Carousel >
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.Size}`}
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Barter</h3>
          <p>Where you can trust</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img
      className={`d-block w-100 ${styles.Size}`}
      src={image4}
      alt="Second slide"
    />
  </Carousel.Item>
    </Carousel> 
    </div>  
   );
}

export default header;