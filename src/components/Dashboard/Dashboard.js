import React,{Component} from 'react';
import Button from '../Share/Button/Button.addItem/Button_AddItem';
import styles from './Dashboard.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import ItemsSummary from './ItemsSummary/ItemsSummary';
import {connect} from 'react-redux';
import {getItemsByUserId} from '../../api/itemApi';

class  Dashboard extends Component {
    state = {
        itemsList: []
    }
    componentDidMount() {
        const items = [];
        getItemsByUserId(this.props.userId)
        .then(response => {
            console.log("response get user dashboard", response);
            for(let item in response.data){
                items.push({
                    ...response.data[item],
                    itemId: item
                });         
            }
            this.setState({itemsList: items}, () =>{
                console.log("items in state", this.state.itemsList)
            });

        }).catch(err => {
            console.log(err);
            throw new Error(err.message);
        })
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
                    <ItemsSummary 
                    items={this.state.itemsList}
                    />
                </Row>

            </Container>

        )
    }
} 
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);