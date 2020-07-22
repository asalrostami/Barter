import React,{Component} from 'react';
import Button from '../Share/Button/Button.addItem/Button_AddItem';
import styles from './Dashboard.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import ItemsSummary from './ItemsSummary/ItemsSummary';

class  Dashboard extends Component {
    state = {
        key: 'myItems'
    }
    addItemHandler = () => {
        this.props.history.push('/dashboard/item');
        
    }
    render() {
        return (
            <Container fluid="md" className={styles.Cont}>
                <Row  className={styles.font_title}>
                    <p>My Items</p>
                </Row>
                <Row className={styles.textCenter}>
                    <Col xs={12} md={12} lg={12}>
                        {/* <Button variant="warning" size="sm"  onClick={this.addItemHandler}>Add New Item</Button> */}
                       <Button  title="Add New Item" clicked={this.addItemHandler} />
                    </Col>
                    
                </Row>
                <Row>

                    <ItemsSummary />
                </Row>

            </Container>

        )
    }
} 

export default Dashboard;