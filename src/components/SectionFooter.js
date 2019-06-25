import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Grid as Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Logo } from '../assets/img/logos/netfliqui.svg';

class SectionFooter extends Component {

    scrollToTop = () => {
        Scroll.animateScroll.scrollToTop();
    }

    componentDidMount = () => {
        this.scrollToTop();
    }

    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col lg={3} xs={12}>
                            <a className="navbar-brand" href="index.html">
                                <Logo />
                            </a>
                        </Col>
                        <Col lg={3}>
                            <div class="link-title">The same pages</div>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/press">Press</Link></li>
                                <li><Link to="/copy">Copyright</Link></li>
                                <li><Link to="/help">Help</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} sm={4} xs={12}>
                            <div class="link-title">The same pages</div>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/press">Press</Link></li>
                                <li><Link to="/copy">Copyright</Link></li>
                                <li><Link to="/help">Help</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} sm={4} xs={12}>
                            <div className="footer-icons">
                                <Link to="#"><i className="fa fa-facebook-square"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-github"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default SectionFooter;