import React,{Component} from 'react';
import {connect} from 'react-redux'
import { Formik} from 'formik';
import {Form} from 'react-bootstrap';
import * as Yup from 'yup';
import styles from './Auth.module.css';
import Button from '../Share/Button/Button';
import * as actions from '../../store/actions/auth';
import { Link } from "react-router-dom";

class  Auth extends Component {
    render() {
        const LoginSchema = Yup.object().shape({
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
            password: Yup.string()
              .min(3, 'Too Short!')
              .max(9, 'Too Long!')
              .required('Required')    
          });
          const handleChange = () => {
            
          }
         
          console.log("auth",this.props.isAuthenticated);

          let errorMessage = null;

        if(this.props.error){
            errorMessage = (
                 <p>{this.props.error.message}</p>
            )
        }
        return (
           
            <>
             
            <div className={styles.head}>
                <span className={styles.p}>Login</span>
                {errorMessage}
            </div>
           
            <div className={styles.div}>
                <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    this.props.onAuth(values.email, values.password,false);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setSubmitting
                    /* and other goodies */
                }) => (
        
                    <Form onSubmit={handleSubmit} className={styles.form}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                            placeholder="Enter email" 
                            />
                            <Form.Text className={styles.text_color} >
                            {errors.email && touched.email && errors.email}
                            </Form.Text>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password} 
                            placeholder="Password" 
                            />
                            <Form.Text className={styles.text_color} >
                            {errors.password && touched.password && errors.password}
                            </Form.Text>
                        </Form.Group>
                        
                        <div className={styles.div3}>  
                           <Link to="/auth/reset">Forget Password?</Link>
                        </div>
                        <div className={styles.div2}>
                             <Button title="LOGIN" type="submit"/>
                        </div>
                        <div className={styles.div2} style={{marginTop: "50px"}}>
                             <p>Don't have an account?<Link to={"/auth/signup"}>SignUp</Link></p>
                        </div>
                        
                   
                    </Form>
                )}
              </Formik>
            </div>
            </>
                
        )
    }
} 
const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onEmptyErrorMsg: () => dispatch(actions.emptyErrorMsg())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);