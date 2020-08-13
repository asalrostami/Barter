import React from 'react';
import Card from './Card/Card';
import {Container,Row,Col } from 'react-bootstrap';
import styles from './Cards.module.css';


const cards = (props) => {
    const itemsList = props.items;
    // console.log("items in cards",itemsList);
    const getValidImage = (images) => {
        // debugger
        let img = "";
        for(let i = 0; i < images.length ; i++){
            // console.log("images length",images.length )
            // console.log("images in loop",images )
            if(images[i]){
                img = images[i];
                // console.log("i in items length",i )
                 break;
            } 
        } 
        return img;       
    } 
     return (
        <Container fluid className={styles.Content}>
            <Row className="row padding">
                {
                    itemsList.map(item => {
                        let img = null
                        if(item.images.length !== 0){
                            img = getValidImage(item.images);
                        }
                       
                        // console.log("img in ItemsSummary",img)
                        return (
                            <Col xs={12} sm={6} md={6} lg={3} 
                            key={`Cards-${item.itemId}`}>
                                <Card  
                                 image={img}
                                 title={item.title.value}
                                 city={item.city.value}
                                 submitedDate={item.submitedDate.value}
                                 lookingfor={item.lookingfor_title.value}
                                 forBarterSwitch={item.forBarterSwitch.value}/>
                            </Col>
                        )
                    })   
                }
                </Row>
        </Container>    
    );
}

export default cards;