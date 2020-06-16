import React,{Component} from 'react';
import styles from './ResetPass.module.css';
import { Formik} from 'formik';
import {Form} from 'react-bootstrap';
import * as Yup from 'yup';
import Button from '../../Share/Button/Button';


class ResetPass extends Component {
    render(){
        const SignupSchema = Yup.object().shape({
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
            password: Yup.string()
              .min(3, 'Too Short!')
              .max(9, 'Too Long!')
              .required('Required') ,
              comfirmedPassword: Yup.string()
              .min(3, 'Too Short!')
              .max(9, 'Too Long!')
              .required('Required')   
          });
        return(
            <div><h1>Reset Password</h1></div>
            // <>
            //  <div className={styles.head}>
            //      <span className={styles.p}>Create Your Account</span>
            //  </div>
            //  <div className={styles.div}>
            //      <Formik
            //      initialValues={{email: '', password: '',comfirmedPassword:'' }}
            //      validationSchema={SignupSchema}
            //      onSubmit={(values, { setSubmitting }) => {
            //         //  this.props.onAuth(values.email, values.password,true);
            //          // onSubmit={values => {
            //          setTimeout(() => {
            //          alert(JSON.stringify(values, null, 2));
            //          setSubmitting(false);
            //          }, 400);
            //      }}
            //      >
            //      {({
            //          values,
            //          errors,
            //          touched,
            //          handleChange,
            //          handleBlur,
            //          handleSubmit,
            //          isSubmitting,
            //          /* and other goodies */
            //      }) => (
         
            //          <Form onSubmit={handleSubmit} className={styles.form}>
            //              <Form.Group controlId="formBasicEmail">
            //                  <Form.Label>Email address</Form.Label>
            //                  <Form.Control type="email"
            //                  name="email"
            //                  onChange={handleChange}
            //                  onBlur={handleBlur}
            //                  value={values.email} 
            //                  placeholder="Enter email" 
            //                  />
            //                  <Form.Text className={styles.text_color} >
            //                  {errors.email && touched.email && errors.email}
            //                  </Form.Text>
            //              </Form.Group>
     
            //              <Form.Group controlId="formBasicPassword">
            //                  <Form.Label>Password</Form.Label>
            //                  <Form.Control type="password"
            //                  name="password"
            //                  onChange={handleChange}
            //                  onBlur={handleBlur}
            //                  value={values.password} 
            //                  placeholder="Password" 
            //                  />
            //                  <Form.Text className={styles.text_color} >
            //                  {errors.password && touched.password && errors.password}
            //                  </Form.Text>
            //              </Form.Group>
            //              <Form.Group controlId="formBasicPassword">
            //                  <Form.Label>Password</Form.Label>
            //                  <Form.Control type="password"
            //                  name="ConfirmedPassword"
            //                  onChange={handleChange}
            //                  onBlur={handleBlur}
            //                  value={values.password} 
            //                  placeholder="Confirm Password" 
            //                  />
            //                  <Form.Text className={styles.text_color} >
            //                  {errors.password && touched.password && errors.password}
            //                  </Form.Text>
            //              </Form.Group>
                         
            //              <div className={styles.div2}>
            //                   <Button title="JOIN" type="submit" disabled={isSubmitting} />
            //              </div>
                    
            //          </Form>
            //      )}
            //    </Formik>
            //  </div>
            //  </>
        )
    }
}

export default ResetPass;