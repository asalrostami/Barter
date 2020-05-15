import React from 'react';
import Card from './Card/Card';
import {Container,Row,Col } from 'react-bootstrap';
import styles from './Cards.module.css';


const cards = (props) => {
    // const carsd = () => {
    //     if(this.props.items){
    //         const card = this.props.items.map(item => {
    //           return(
    //               <div className="card" style={{width: 30 + 'rem' }}>
    //                 <img className="card-img-top" src={t.imgSqSmall ? ( t.imgSqSmall) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
    //                   <div className="card-body">
    //                     <h1 className="card-title">{t.name}</h1>
    //                       <h2 className="card-text">{t.location} </h2>
    //                         <h4 className="card-text">{t.summary} </h4>
    //   <ul className="list-group list-group-flush">
    //                 <li className="list-group-item">Difficulty: {t.difficulty}</li>
    //                 <li className="list-group-item">Length: {t.length} miles</li>
    //                 <li className="list-group-item">Ascent: {t.ascent} ft, Descent: {t.descent} ft</li>
    //                 <li className="list-group-item">Conditions: {t.conditionStatus}, {t.conditionDetails} </li>
    //                 <li className="list-group-item">High: {t.high} ft, Low: {t.low}</li>
    //                 <li className="list-group-item">Stars: {t.stars}</li>
    //                 <li className="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a></li>
    //                 </ul>
    //                 </div>
    //             </div>
    //           )
            // })
            // return(
            //   <div className = "row">
            //     {trail}
            //   </div>
            // )
            // })
    // }
     return (
    //     <Fragment>
    //     <div>
    //       {this.cards()}
    //     </div>
    //   </Fragment>
        <div className={styles.Content}>
             <Container className= "container-fluid padding">
                <Row className="row padding">
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                         <Card />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <Card />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                         <Card />
                    </Col>
                </Row>
            </Container>
        </div>
       
    );
}

export default cards;