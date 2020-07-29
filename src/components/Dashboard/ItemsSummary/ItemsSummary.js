import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Item from './itemSummary/ItemSummary';
import styles from './ItemsSummary.module.css';

const itemsSummary = (props) => {
    const itemsList = props.items;
    const getValidImage = (images) => {
        let img = "";
        // images.forEach((image,i) => {
        //     if(image){
        //         img = images[i];
        //             break;
        //     } 
        // })
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
    return(
        <Container fluid className={styles.Content}>
            {
                itemsList.map(item => {
                    const img = getValidImage(item.images);
                    console.log("img in ItemsSummary",img)
                    return (
                        <Row className={styles.row}>
                            <Col xs={12} md={12} lg={12}>
                                <Item 
                                key={item.itemId}
                                // image={item.images[0]}
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