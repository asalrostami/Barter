import React,{Component} from 'react';
import Button from '../Share/Button/Button';
import styles from './Dashboard.module.css';
import {Container,Row,Col,Tabs,Tab} from 'react-bootstrap'

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
                <Row >
                    <h2>My Items</h2>
                </Row>
                <Row className={styles.textCenter}>
                    <Button title="Add New Item" clicked={this.addItemHandler} />
                </Row>
                <Row>
                    

                </Row>

            </Container>

        )
    }
} 

export default Dashboard;