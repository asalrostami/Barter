import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Item from './itemSummary/ItemSummary';
import styles from './ItemsSummary.module.css';

const itemsSummary = (props) => {
    const itemsList = props.items;
   
    return(
        <Container fluid className={styles.Content}>
            {
                 itemsList.map(item => (
                    <Row className={styles.row}>
                        <Col xs={12} md={12} lg={12}>
                            <Item 
                            image={item.images}
                            title={item.title.value}
                            submitedDate={item.submitedDate.value}
                            forBarterSwitch={item.forBarterSwitch.value}
                            />
                        </Col> 
                    </Row>
                ))
            }

            {/* <Row className={styles.row}>
                <Col xs={12} md={12} lg={12}>
                    <Item />
                </Col>
                
            </Row>
            <Row className={styles.row}>
                <Col xs={12} md={12} lg={12}>
                    <Item />
                </Col>
            </Row>
            <Row className={styles.row}>
                <Col xs={12} md={12} lg={12}>
                    <Item />
                </Col>
            </Row> */}
        </Container>   
    );
}

export default itemsSummary;