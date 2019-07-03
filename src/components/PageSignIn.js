import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter } from './'
import { Link } from "react-router-dom";
import { Grid as Container, Row, Col } from 'react-bootstrap';

class PageSignIn extends Component {

    render() {
        return (
            <Fragment>
                <SectionHeader />
                    <Container className="bg-image">
                        <Row>
                            <div className="login-wraper">
                                <div className="hidden-xs">
                                    <img src="assets/img/demo/login.jpg" alt="" />
                                </div>
                                <div className="banner-text hidden-xs">
                                    <div className="line"></div>
                                    <div className="b-text">
                                        Watch <span className="color-active">millions<br/> of</span> <span className="color-b1">v</span><span className="color-b2">i</span><span className="color-b3">de</span><span className="color-active">os</span> for free.
                                    </div>
                                    <div className="overtext">Over 6000 videos uploaded Daily. </div>
                                </div>
                                <div className="login-window">
                                    <div className="l-head">
                                        Log Into Your Circle Account
                                    </div>
                                    <div className="l-form">
                                        <form action="/login">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <label className="checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="arrow"></span>
                                                    </label> <span>Remember me on this computer</span>
                                                    <span className="text2">(not recomended on public or shared computers)</span>
                                                </label>
                                            </div>
                                            <Row>
                                                <div className="col-lg-7">
                                                    <button type="submit" className="btn btn-cv1">Login</button>
                                                </div>
                                                <div className="hidden-xs">
                                                    <div className="col-lg-1 ortext">or</div>
                                                    <div className="col-lg-4 signuptext"><Link to="/signup">Sign Up</Link></div>
                                                </div>
                                            </Row>
                                            <Row className="hidden-xs">
                                                <div className="col-lg-12 forgottext">
                                                    <Link to="/forgotpass">Forgot Username or Password?</Link>
                                                </div>
                                            </Row>
                                            <Row className="visible-xs">
                                                <Col xs={6}>
                                                    <div className="forgottext"><Link to="#">Forgot Password?</Link></div>
                                                </Col>
                                                <Col xs={6}>
                                                    <div className="signuptext text-right">
                                                        <Link to="/signup">Sign Up</Link>
                                                    </div>
                                                </Col>
                                            </Row>
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

export default PageSignIn