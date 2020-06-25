import React,{Component} from 'react';
import firebase from 'firebase/app';
import * as actions from '../../../store/actions/auth';
import styles from './ResetPass.module.css';
import { Formik} from 'formik';
import {Form} from 'react-bootstrap';
import * as Yup from 'yup';
import Button from '../../Share/Button/Button';
import {connect} from 'react-redux';
import { resetPassword } from '../../../api/authApi';


class ResetPass extends Component {
    componentDidMount() {
        this.props.onEmptyErrorMsg();
    }

  state = { loading: false };
  // handleReset = async () => {
  //   const { email, dispatch } = this.props;
  //   this.setState({ loading: true });
  //   await actions.resetPassword(email)(dispatch);
  //   // message or alert you want to display
  //   this.setState({ loading: false });
  // };
    render(){
        const ValidationSchema = Yup.object().shape({
            email: Yup.string()
              .label('Email')
              .email('Invalid email')
              .required('Please enter a registered email')  
          });
          // firebase init
          // let app = firebase.initializeApp({ ... });
          // let app = firebase.storage();
          // let app = firebase.auth();

          let errorMessage = null;
          if(this.props.error){
            errorMessage = (
                 <p>{this.props.error.message}</p>
            )
        }
        console.log("email1", this.props.email);
        return(
            <>
             <div className={styles.head}>
                 <span className={styles.p}>Forget Password ?</span>
                 {errorMessage}
             </div>
             <div className={styles.div}>
                 <Formik
                 initialValues={{email: '' }}
                 validationSchema={ValidationSchema}
                 onSubmit={values => {
                    
                    // this.props.onResetPassword(values.email).then(res => {
                    //     alert("you've received email to reset your password!");
                    //         this.props.history.push('/auth');
                    // }).catch(err => {
                    //     console.log("*************");
                    //     console.log("error", err.message);
                    // });
                    //  console.log("email2", this.props.email);

                    resetPassword(values.email).then((res) => {
                        this.props.onEmptyErrorMsg();
                        this.props.onResetPasswordSuccess(values.email); 
                        alert("you've received email to reset your password!");
                        this.props.history.push('/auth');
                    }).catch(err => {
                        console.log("error:", err.message);
                        this.props.onResetPasswordFail(err);
                    })
                     

                     
                        
    
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
                         
                         <div className={styles.div2}>
                              <Button title="SEND EMAIL" type="submit"  />
                              {/* disabled={!isValid || isSubmitting}  */}
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
      isAuthenticated: state.auth.isAuthenticated,
      email: state.auth.email
  };
};
const mapDispatchToProps = dispatch => {
  return {
      onResetPasswordSuccess: (email) => dispatch(actions.resetPasswordSuccess(email)),
      onResetPasswordFail: (error) => dispatch(actions.resetPasswordFail(error)),
      onEmptyErrorMsg: () => dispatch(actions.emptyErrorMsg())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(ResetPass);