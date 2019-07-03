import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter } from './'
import { Link } from "react-router-dom";
import { Grid as Container, Row, Col } from 'react-bootstrap';

class PageSignUp extends Component {

    render() {
        return (
            <Fragment>
                <SectionHeader />
                    <Container className="bg-image">
                        <Row>
                            <div className="login-wraper">
                                <div className="hidden-xs">
                                    <img src="assets/img/demo/login.jpg" alt=""/>
                                </div>
                                <div className="banner-text hidden-xs">
                                    <div className="line"></div>
                                    <div className="b-text">
                                        Watch <span className="color-active">millions<br/> of</span> <span className="color-b1">v</span><span className="color-b2">i</span><span className="color-b3">de</span><span className="color-active">os</span> for free.
                                    </div>
                                    <div className="overtext">
                                        Over 6000 videos uploaded Daily.
                                    </div>
                                </div>
                                <div className="login-window">
                                    <div className="l-head">
                                        Sign Up for Free
                                    </div>
                                    <div className="l-form">
                                        <form action="/register">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="sample@gmail.com"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="**********"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword2">Re-type Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="**********"/>
                                            </div>
                                            <Row>
                                            <Col lg={7}>
                                                <button type="submit" className="btn btn-cv1">Sign Up</button>
                                            </Col>
                                                <div className="hidden-xs">
                                                    <div className="col-lg-1 ortext">or</div>
                                                    <div className="col-lg-4 signuptext">
                                                        <Link to="/signin">Sign In</Link>
                                                    </div>
                                                </div>
                                            </Row>
                                            <Row className="hidden-xs">
                                                <div className="col-lg-12 forgottext">
                                                    <Link to="#">By clicking "Sign Up" I agree to circle's Terms of Service.</Link>
                                                </div>
                                            </Row>
                                            <div className="visible-xs text-center mt-30">
                                                <span className="forgottext"><Link to="/">Already have an account?</Link></span>
                                                <span className="signuptext"><Link to="/">Login here</Link></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                <SectionFooter />
            </Fragment>
        )
    }
}

export default PageSignUp