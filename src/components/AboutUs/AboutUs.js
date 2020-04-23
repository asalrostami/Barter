import React from 'react';
import styles from './AboutUs.module.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import image from '../../assets/Images/barter.jpg'

const aboutUs = () => {
    return(
        <MDBContainer>
            <MDBRow className={styles.row}>
                <MDBCol sm="8">
                    <div>
                   <p> In trade, barter (derived from baretor) is a system of exchange where participants in a transaction directly exchange goods or services for other goods or services without using a medium of exchange, such as money.
                     Economists distinguish barter from gift economies in many ways; barter, for example, features immediate reciprocal exchange, not delayed in time.</p>
                     <p> Barter usually takes place on a bilateral basis, but may be multilateral (i.e., mediated through a trade exchange). 
                      In most developed countries, barter usually only exists parallel to monetary systems to a very limited extent. Market actors use barter as a replacement for money as the method of exchange in times of monetary crisis, 
                      such as when currency becomes unstable (e.g., hyperinflation or a deflationary spiral) or simply unavailable for conducting commerce.</p><p>Economists since the times of Adam Smith (1723-1790), looking at non-specific pre-modern societies as examples, 
                      have used the inefficiency of barter to explain the emergence of money, of "the" economy, and hence of the discipline of economics itself.</p><p>However, no ethnographic studies have shown that any present or past society has used barter without any other medium of exchange or measurement,
                       nor have anthropologists found evidence that money emerged from barter, instead finding that gift-giving (credit extended on a personal basis with an inter-personal balance maintained over the long term) was the most usual means of exchange of goods and services.</p> 
                    </div>
                </MDBCol>
                <MDBCol sm="4">
                    <img 
                    src={image}
                    className="img-fluid z-depth-1-half"
                    alt="Barter" />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};

export default aboutUs;