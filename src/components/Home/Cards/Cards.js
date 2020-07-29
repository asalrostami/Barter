import React from 'react';
import Card from './Card/Card';
import {Container,Row,Col } from 'react-bootstrap';
import styles from './Cards.module.css';


const cards = (props) => {
    const itemsList = props.items;
    const getValidImage = (images) => {
        let img = "";
        for(let i = 0; i < images.length ; i++){
            console.log("images length",images.length )
            console.log("images in loop",images )
            if(images[i]){
                img = images[i];
                console.log("i in items length",i )
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
                        const img = getValidImage(item.images);
                        console.log("img in ItemsSummary",img)
                        return (
                            <Col xs={12} sm={6} md={6} lg={3}>
                                <Card  
                                 key={item.itemId}
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