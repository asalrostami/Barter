import React from 'react';
import image1 from '../../../assets/Images/bg.jpg';
import image3 from '../../../assets/Images/barter3.jpg';
import image2 from '../../../assets/Images/barter2.jpg';
import styles from './Header.module.css';
import { Carousel} from 'react-bootstrap'

const header = (props) => {
  
   return (
    <Carousel>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.Size}`}
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Barter</h3>
          <p>Somewhere that you can trust</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img
      className={`d-block w-100 ${styles.Size}`}
      src={image3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>   
   );
}

export default header;