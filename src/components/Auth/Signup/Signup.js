import React, {Component} from 'react';
import { Formik} from 'formik';
import {Form} from 'react-bootstrap';
import * as Yup from 'yup';
import Button from '../../Share/Button/Button';
import styles from './Signup.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth';


class Signup extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.onEmptyErrorMsg();
    }
    emptyField = (e) => {
        if(this.props.error) {

        }
    }
    render() {

        const SignupSchema = Yup.object().shape({
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
            password: Yup.string()
              .min(3, 'Too Short!')
              .max(9, 'Too Long!')
              .required('Required')    
          });
          if(this.props.isAuthenticated){
            this.props.history.push('/');
         }
         let errorMessage = null;
         let initialVals = { email: '', password: '' };
         if(this.props.error){
            errorMessage = (
                 <p>{this.props.error.message}</p>
            )
            initialVals = { email: '', password: '' };
            

        }
        return(
            <>
             <div className={styles.head}>
                 <span className={styles.p}>Create Your Account</span>
                 {errorMessage}
             </div>
             <div className={styles.div}>
                 <Formik
                 initialValues={{ email: '', password: '' }}
                 validationSchema={SignupSchema}
                 onSubmit={values => {
                     this.props.onAuth(values.email, values.password, true);
    
                     if(this.props.error) {
                        // resetForm({values: ''})
                    }
                    
                 }}
                 >
                 {({
                     values,
                     errors,
                     touched,
                     isValid,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     resetForm,
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
                         
                         <div className={styles.div2}>
                              <Button title="JOIN" type="submit"  />
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


export default connect(mapStateToProps,mapDispatchToProps)(Signup);