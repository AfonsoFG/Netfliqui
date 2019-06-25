import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid as Container, Row, Col, DropdownButton, ButtonToolbar, MenuItem, InputGroup, FormControl, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { ReactComponent as Logo } from '../assets/img/logos/netfliqui.svg';

class SectionHeader extends Component {

    render() {
        return (
            <Fragment>
                <header>
                    <Container className="navbar-container">
                        <Row>
                            <Col xs={3} className="visible-xs">
                                <a href="http://afonsogomes.com" className="btn-menu-toggle"><i className="cv cvicon-cv-menu"></i></a>
                            </Col>
                            <Col lg={2} sm={4} xs={3}>
                                <a className="navbar-brand" href="index.html">
                                    <Logo />
                                </a>
                            </Col>
                            <Col lg={2} sm={8} className={"hidden-xs"}>
                                <ul className="list-inline menu">
                                    <li className="color-active">
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li><a href="index.html">Home Page</a></li>
                                            <li><a href="single-video.html">Single Video Page</a></li>
                                            <li><a href="single-video-youtube.html">Single Video Youtube Embedded Page</a></li>
                                            <li><a href="single-video-vimeo.html">Single Video Vimeo Embedded Page</a></li>
                                            <li><a href="upload.html">Upload Video Page</a></li>
                                            <li><a href="upload-edit.html">Upload Video Edit Page</a></li>
                                            <li><a href="search.html">Searched Videos Page</a></li>
                                            <li><a href="channel.html">Single Channel Page</a></li>
                                            <li><a href="channels.html">Channels Page</a></li>
                                            <li><a href="single-video-tabs.html">Single Videos Page With Tabs</a></li>
                                            <li><a href="single-video-playlist.html">Single Videos Page With Playlist</a></li>
                                            <li><a href="history.html">History Page</a></li>
                                            <li><a href="categories.html">Browse Categories Page</a></li>
                                            <li><a href="categories_side_menu.html">Browse Categories Side Menu Page</a></li>
                                            <li><a href="subscription.html">Subscription Page</a></li>
                                            <li><a href="login.html">Login Page</a></li>
                                            <li><a href="signup.html">Signup Page</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={6} sm={8} xs={3}>
                                <form action="search.html" method="post">
                                    <div className="topsearch">
                                        <i className="cv cvicon-cv-cancel topsearch-close"></i>
                                        <InputGroup>
                                            <InputGroup.Addon id="sizing-addon2">
                                                <i className="fa fa-search"></i>
                                            </InputGroup.Addon>
                                            <FormControl type="text" />
                                            <DropdownButton
                                                componentClass={InputGroup.Button}
                                                className="btn-default"
                                                id="input-dropdown-addon"
                                                title={<i className="cv cvicon-cv-video-file"></i>}>
                                                <MenuItem><i className="cv cvicon-cv-relevant"></i> Relevant</MenuItem>
                                                <MenuItem><i className="cv cvicon-cv-calender"></i> Recent</MenuItem>
                                                <MenuItem><i className="cv cvicon-cv-view-stats"></i> Viewed</MenuItem>
                                                <MenuItem><i className="cv cvicon-cv-star"></i> Top Rated</MenuItem>
                                                <MenuItem><i className="cv cvicon-cv-watch-later"></i> Longest</MenuItem>
                                            </DropdownButton>
                                        </InputGroup>
                                    </div>
                                </form>
                            </Col>
                            <Col lg={2} sm={4} className="hidden-xs">
                                <div className="selectuser pull-right">
                                    <ButtonToolbar className={'pull-right dropdown'}>
                                        <DropdownButton
                                            className={'btn-default btn-esp'}
                                            title={'Sort'}
                                            id={'dropdownMenu1'}
                                            noCaret={false}>
                                            <MenuItem>Login</MenuItem>
                                            <MenuItem>Registar</MenuItem>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="mobile-menu">
                        <div className="mobile-menu-head">
                            <a className="navbar-brand" href="index.html">
                                <Logo />
                            </a>
                        </div>
                        <div className="mobile-menu-content">
                            <div className="mobile-menu-user">
                                <p>Bailey Fry </p>
                                <span className="caret"></span>
                            </div>
                            <a href="http://afonsogomes.com" className="btn mobile-menu-upload">
                                <i className="cv cvicon-cv-upload-video"></i>
                            </a>
                            <div className="mobile-menu-list">
                                <ul>
                                    <li>
                                        <a href="http://afonsogomes.com">
                                            <i className="cv cvicon-cv-play-circle"></i>
                                            <p>Popular Videos</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://afonsogomes.com">
                                            <i className="cv cvicon-cv-playlist"></i>
                                            <p>Browse Categories</p>
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="mobile-menu-categories">
                                            <li className="color-active">
                                                <a href="http://afonsogomes.com">Pages <span className="caret"></span></a>
                                                <ul>
                                                    <li><a href="index.html">Home Page</a></li>
                                                    <li><a href="single-video.html">Single Video Page</a></li>
                                                    <li><a href="single-video-youtube.html">Single Video Youtube Embedded Page</a></li>
                                                    <li><a href="single-video-vimeo.html">Single Video Vimeo Embedded Page</a></li>
                                                    <li><a href="upload.html">Upload Video Page</a></li>
                                                    <li><a href="upload-edit.html">Upload Video Edit Page</a></li>
                                                    <li><a href="search.html">Searched Videos Page</a></li>
                                                    <li><a href="channel.html">Single Channel Page</a></li>
                                                    <li><a href="channels.html">Channels Page</a></li>
                                                    <li><a href="single-video-tabs.html">Single Videos Page With Tabs</a></li>
                                                    <li><a href="single-video-playlist.html">Single Videos Page With Playlist</a></li>
                                                    <li><a href="history.html">History Page</a></li>
                                                    <li><a href="categories.html">Browse Categories Page</a></li>
                                                    <li><a href="categories_side_menu.html">Browse Categories Side Menu Page</a></li>
                                                    <li><a href="subscription.html">Subscription Page</a></li>
                                                    <li><a href="login.html">Login Page</a></li>
                                                    <li><a href="signup.html">Signup Page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="http://afonsogomes.com">
                                            <i className="cv cvicon-cv-liked"></i>
                                            <p>Liked Videos</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://afonsogomes.com">
                                            <i className="cv cvicon-cv-history"></i>
                                            <p>History</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://afonsogomes.com">
                                            <i className="cv cvicon-cv-purchased"></i>
                                            <p>Purchased Videos</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="http://afonsogomes.com" className="btn mobile-menu-logout">Log out</a>
                        </div>
                    </div>

                    <Container>
                        <Row className="navbar-container2">
                            <Col lg={4} sm={12} xs={12}>
                                <div className="h-icons">
                                    <a href="http://afonsogomes.com">
                                        <OverlayTrigger
                                            key={'top'}
                                            placement={'top'}
                                            overlay={
                                                <Tooltip id={'tooltip-top'}>
                                                    Liked Videos
                                                </Tooltip>
                                            }>
                                                <i className="cv cvicon-cv-liked"></i>
                                        </OverlayTrigger>
                                    </a>
                                    <a href="http://afonsogomes.com">
                                        <OverlayTrigger
                                            key={'top'}
                                            placement={'top'}
                                            overlay={
                                                <Tooltip id={'tooltip-top'}>
                                                    Watch later
                                                </Tooltip>
                                            }>
                                                <i className="cv cvicon-cv-watch-later"></i>
                                        </OverlayTrigger>
                                    </a>
                                    <a href="http://afonsogomes.com">
                                        <OverlayTrigger
                                            key={'top'}
                                            placement={'top'}
                                            overlay={
                                                <Tooltip id={'tooltip-top'}>
                                                    Saved playlists
                                                </Tooltip>
                                            }>
                                                <i className="cv cvicon-cv-play-circle"></i>
                                        </OverlayTrigger>
                                    </a>
                                    <a href="http://afonsogomes.com">
                                        <OverlayTrigger
                                            key={'top'}
                                            placement={'top'}
                                            overlay={
                                                <Tooltip id={'tooltip-top'}>
                                                    History
                                                </Tooltip>
                                            }>
                                                <i className="cv cvicon-cv-history"></i>
                                        </OverlayTrigger>
                                    </a>
                                </div>
                            </Col>
                            <Col lg={8} sm={12} className={'hidden-xs'}>
                                <div className="h-resume">
                                    <div className="play-icon">
                                        <a href="http://afonsogomes.com"><i className="cv cvicon-cv-play"></i></a>
                                    </div>
                                    Resume:  <span className="color-default">Daredevil Season 2 : Episode 6 </span>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>

                </header>
            </Fragment>
        );
    }
}

export default SectionHeader