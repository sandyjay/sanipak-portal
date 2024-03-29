import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

//redux
import { useSelector, useDispatch } from "react-redux";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap";

// actions
import { loginUser } from "../../store/actions";

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import logoDark from "../../assets/images/logo-dark.png";

const Login = (props) => {
  //meta title
  document.title = "Login | San-i-pak - Vite React Admin & Dashboard Template";
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "admin@theclaymedia.com" || "",
      password: "123456" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    },
  });

  const { error } = useSelector((state) => ({
    error: state.Login.error,
  }));

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          verticalAlign: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Row className='justify-content-center'>
          <Col style={{ textAlign: "center" }}>
            <img
              width='350px'
              src='https://res.cloudinary.com/devstroke/image/upload/v1698152589/logo-dark_dziasa.png'
              alt=''
              className='img-fluid'
            />
          </Col>
        </Row>
        <div className='account-pages my-5 '>
          <Container>
            <Row className='justify-content-center'>
              <Col md={8} lg={6} xl={5}>
                <Card className='overflow-hidden'>
                  <div className='bg-primary bg-soft'>
                    <Row>
                      <Col xs={8}>
                        <div className='text-primary p-4'>
                          <h5 className='text-primary'>Welcome Back !</h5>
                          <p>
                            Sign in to continue to San-I-Pak Customer Portal
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <CardBody className='pt-0'>
                    {/* <div>
                    <Link to='/' className='auth-logo-light'>
                      <div className='avatar-md profile-user-wid mb-4'>
                        <span className='avatar-title rounded-circle bg-light'>
                          <img
                            src={logo}
                            alt=''
                            className='rounded-circle'
                            height='34'
                          />
                        </span>
                      </div>
                    </Link>
                  </div> */}
                    <div className='p-2'>
                      <Form
                        className='form-horizontal'
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        {error ? <Alert color='danger'>{error}</Alert> : null}

                        <div className='mb-3'>
                          <Label className='form-label'>Email</Label>
                          <Input
                            name='email'
                            className='form-control'
                            placeholder='Enter email'
                            type='email'
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={
                              validation.touched.email &&
                              validation.errors.email
                                ? true
                                : false
                            }
                          />
                          {validation.touched.email &&
                          validation.errors.email ? (
                            <FormFeedback type='invalid'>
                              {validation.errors.email}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className='mb-3'>
                          <Label className='form-label'>Password</Label>
                          <Input
                            name='password'
                            value={validation.values.password || ""}
                            type='password'
                            placeholder='Enter Password'
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.password &&
                              validation.errors.password
                                ? true
                                : false
                            }
                          />
                          {validation.touched.password &&
                          validation.errors.password ? (
                            <FormFeedback type='invalid'>
                              {validation.errors.password}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className='form-check'>
                          <input
                            type='checkbox'
                            className='form-check-input'
                            id='customControlInline'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='customControlInline'
                          >
                            Remember me
                          </label>
                        </div>

                        <div className='mt-3 d-grid'>
                          <button
                            className='btn btn-primary btn-block'
                            type='submit'
                          >
                            Log In
                          </button>
                        </div>

                        <div className='mt-4 text-center'>
                          <Link to='/forgot-password' className='text-muted'>
                            <i className='mdi mdi-lock me-1' />
                            Forgot your password?
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className='mt-5 text-center'>
                  <p>
                    Don&#39;t have an account ?{" "}
                    <Link to='/register' className='fw-medium text-primary'>
                      {" "}
                      Request one now{" "}
                    </Link>{" "}
                  </p>
                  <p>
                    © {new Date().getFullYear()} San-i-pak. Crafted with{" "}
                    <i className='mdi mdi-heart text-danger' /> by theclaymedia
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
