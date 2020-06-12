import React from 'react';
import { Formik} from 'formik';
import {Form} from 'react-bootstrap';
import * as Yup from 'yup';
import styles from './Auth.module.css';
import Button from '../Share/Button/Button';

const auth = (props) => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        password: Yup.string()
          .min(3, 'Too Short!')
          .max(9, 'Too Long!')
          .required('Required')    
      });
    return(
        <>
        <div className={styles.head}>
            <p className={styles.p}>Login</p>
        </div>
        <div className={styles.div}>
            <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                // onSubmit={values => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
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
                        <a href="/">Forget Password?</a>
                    </div>
                    <div className={styles.div2}>
                         <Button title="LOGIN" type="submit" disabled={isSubmitting} />
                    </div>
                    <div className={styles.div2} style={{marginTop: "50px"}}>
                         <p>Don't have an account?<a href="/"> SignUp</a></p>
                    </div>
                    
               
                </Form>
            )}
          </Formik>
        </div>
        </>
    )
};

export default auth;