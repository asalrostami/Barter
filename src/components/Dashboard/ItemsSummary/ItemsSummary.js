import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Item from './itemSummary/ItemSummary';
import styles from './ItemsSummary.module.css';

const itemsSummary = (props) => {
    const itemsList = props.items;
    const getValidImage = (images) => {
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
    return(
        <Container fluid className={styles.Content}>
            {
                itemsList.map(item => {
                    let img = null
                    if(item.images){
                        img = getValidImage(item.images);
                        console.log("img in ItemsSummary",img)
                    }
                    
                    return (
                        <Row className={styles.row}
                        key={item.itemId}>
                            <Col xs={12} md={12} lg={12}>
                                <Item 
                                itemId={item.itemId}
                                image={img}
                                title={item.title.value}
                                submitedDate={item.submitedDate.value}
                                forBarterSwitch={item.forBarterSwitch.value}
                                />
                            </Col> 
                        </Row>
                    )
                })
            }
        </Container>   
    );
}

export default itemsSummary;