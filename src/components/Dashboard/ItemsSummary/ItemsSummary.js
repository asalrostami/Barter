import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Item from './itemSummary/ItemSummary';
import styles from './ItemsSummary.module.css';

const itemsSummary = (props) => {
    return(
        // <div className={styles.Content}>
            <Container fluid className={styles.Content}>
                <Row className={styles.row}>
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
                </Row>
            </Container>
        // </div>
    );
}

export default itemsSummary;