import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter } from './'
import { Link } from "react-router-dom";
import { Grid as Container, Row, Col, DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

class PageMain extends Component {

    render() {
        return (
            <Fragment>
                <SectionHeader />

                <div className="content-wrapper">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <section className="content-block">
                                    <Row className="cb-header">
                                        <div className="col-lg-10 col-sm-10 col-xs-10">
                                            <a href="http://afonsogomes.com">Updates from Subscriptions</a>
                                        </div>
                                        <div className="col-lg-2 col-sm-2 col-xs-2">

                                            <ButtonToolbar className={'pull-right bg-clean'}>
                                                <DropdownButton
                                                    className={'btn-default btn-esp'}
                                                    title={'More'}
                                                    id={'dropdown-basic3'}
                                                    noCaret={false}>
                                                    <MenuItem><i className="cv cvicon-cv-relevant"></i> Relevant</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-calender"></i> Recent</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-view-stats"></i> Viewed</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-star"></i> Top Rated</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-watch-later"></i> Longest</MenuItem>
                                                </DropdownButton>
                                            </ButtonToolbar>


                                        </div>
                                    </Row>
                                    <Row className="cb-content avatars">
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava2.png" alt="" /><div className="note">1</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava3.png" alt="" /><div className="note">03</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava4.png" alt="" /><div className="note">10</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava5.png" alt="" /><div className="note">56</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava6.png" alt="" /><div className="note">6</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava7.png" alt="" /><div className="note">25</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava8.png" alt="" /><div className="note">23</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava9.png" alt="" /><div className="note">16</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava10.png" alt="" /><div className="note">3</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava11.png" alt="" /><div className="note">6</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava12.png" alt="" /><div className="note">98</div></a></div>
                                        <div className="col-lg-1 col-sm-2 col-xs-3"><a href="http://afonsogomes.com"><img src="assets/img/demo/ava1.png" alt="" /><div className="note">125</div></a></div>
                                    </Row>
                                </section>

                                <section className="content-block head-div">
                                    <Row className="cb-header">
                                        <Col lg={10} sm={10} xs={8}>
                                            <Link to="http://afonsogomes.com" className="color-active">Featured Videos</Link>
                                        </Col>
                                        <Col lg={2} sm={2} xs={4}> 
                                            <ButtonToolbar className={'pull-right bg-clean'}>
                                                <DropdownButton
                                                    className={'btn-default btn-esp'}
                                                    title={'Sort'}
                                                    id={'dropdown-basic'}
                                                    noCaret={false}>
                                                    <MenuItem><i className="cv cvicon-cv-relevant"></i> Relevant</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-calender"></i> Recent</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-view-stats"></i> Viewed</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-star"></i> Top Rated</MenuItem>
                                                    <MenuItem><i className="cv cvicon-cv-watch-later"></i> Longest</MenuItem>
                                                </DropdownButton>
                                            </ButtonToolbar>
                                        </Col>
                                    </Row>
                                    <Row className="cb-content videolist">
                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html"><img src="assets/img/demo/video1-1.png" alt="" /></a>
                                                    <div className="time">3:50</div>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">Man's Sky: 21 Minutes of New Gameplay - IGN First</a>
                                                </div>
                                                <div className="v-views">
                                                    27,548 views. <span className="v-percent"><span className="v-circle"></span> 78%</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html"><img src="assets/img/demo/video1-2.png" alt="" /></a>
                                                    <div className="time">15:19</div>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">GTA 5: Michael, Franklin, and Trevor in the Flesh</a>
                                                </div>
                                                <div className="v-views">
                                                    8,241,542 views. <span className="v-percent"><span className="v-circle"></span> 93%</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html"><img src="assets/img/demo/video1-3.png" alt="" /></a>
                                                    <div className="time">4:23</div>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">Battlefield 3: Official Fault Line Gameplay Trailer</a>
                                                </div>
                                                <div className="v-views">
                                                    2,729,347 views . <span className="v-percent"><span className="v-circle"></span> 95%</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html"><img src="assets/img/demo/video1-4.png" alt="" /></a>
                                                    <div className="time">7:18</div>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">Batman Arkham City: Hugo Strange Trailer</a>
                                                </div>
                                                <div className="v-views">
                                                    7,239,852 views. <span className="v-percent"><span className="v-circle"></span> 84%</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video last-row">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html"><img src="assets/img/demo/video1-5.png" alt="" /></a>
                                                    <div className="time">23:57</div>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">BATTALION 1944: TAKING ON BATTLEFIELD 5</a>
                                                </div>
                                                <div className="v-views">
                                                    19,130 views. <span className="v-percent"><span className="v-circle"></span> 78%</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video last-row">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html">
                                                        <img src="assets/img/demo/video1-6.png" alt="" />
                                                        <div className="watched-mask"></div>
                                                        <div className="watched">WATCHED</div>
                                                        <div className="time">7:27</div>
                                                    </a>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">Amazon Blocking VIDEO GAMES for Non-Prime...</a>
                                                </div>
                                                <div className="v-views">
                                                    185,525 views. <span className="v-percent"><span className="v-circle"></span> 93%</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video last-row">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html"><img src="assets/img/demo/video1-7.png" alt="" /></a>
                                                    <div className="time">12:58</div>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">Amazing Facts About Nebulas Inside Deep Universe</a>
                                                </div>
                                                <div className="v-views">
                                                    203,741 views. <span className="v-percent"><span className="v-circle"></span> 95%</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6} className={"videoitem"}>
                                            <div className="b-video last-row">
                                                <div className="v-img">
                                                    <a href="single-video-tabs.html"><img src="assets/img/demo/video1-8.png" alt="" /></a>
                                                    <div className="time">9:47</div>
                                                </div>
                                                <div className="v-desc">
                                                    <a href="single-video-tabs.html">Cornfield Chase - Outlast II Official Gameplay</a>
                                                </div>
                                                <div className="v-views">
                                                    202,513 views. <span className="v-percent"><span className="v-circle"></span> 84%</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>

                                
                                <section className="content-block head-div head-arrow">
                                    
                                    <div className="cb-header">
                                        <Row>
                                            <Col lg={10} sm={10} xs={8}>
                                                <a href="http://afonsogomes.com" className="color-active">Popular Channels</a>
                                            </Col>
                                            <Col lg={2} sm={2} xs={4}>
                                                <ButtonToolbar className={'pull-right bg-clean'}>
                                                    <DropdownButton
                                                        className={'btn-default btn-esp'}
                                                        title={'More'}
                                                        id={'dropdown-basic2'}
                                                        noCaret={false}>
                                                        <MenuItem><i className="cv cvicon-cv-relevant"></i> Relevant</MenuItem>
                                                        <MenuItem><i className="cv cvicon-cv-calender"></i> Recent</MenuItem>
                                                        <MenuItem><i className="cv cvicon-cv-view-stats"></i> Viewed</MenuItem>
                                                        <MenuItem><i className="cv cvicon-cv-star"></i> Top Rated</MenuItem>
                                                        <MenuItem><i className="cv cvicon-cv-watch-later"></i> Longest</MenuItem>
                                                    </DropdownButton>
                                                </ButtonToolbar>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="cb-content chanels-row">
                                        <Row>
                                            <Col lg={2} sm={4} xs={4}>
    
                                                <div className="b-chanel">
                                                    <a href="http://afonsogomes.com">
                                                        <img src="assets/img/demo/chanel-1.png" alt="" className="img-responsive" />
                                                        <div className="hover">
                                                            <span>Ray Simpson</span>
                                                            <span><i className="cv cvicon-cv-liked"></i> 5K</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={2} sm={4} xs={4}>
                                            
                                                <div className="b-chanel">
                                                    <a href="http://afonsogomes.com">
                                                        <img src="assets/img/demo/chanel-2.png" alt="" className="img-responsive" />
                                                        <div className="hover">
                                                            <span>Ray</span>
                                                            <span><i className="cv cvicon-cv-liked"></i> 215K</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={2} sm={4} xs={4}>
                                                <div className="b-chanel">
                                                    <a href="http://afonsogomes.com">
                                                        <img src="assets/img/demo/chanel-3.png" alt="" className="img-responsive" />
                                                        <div className="hover">
                                                            <span>Simpson</span>
                                                            <span><i className="cv cvicon-cv-liked"></i> 21</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={2} sm={4} xs={4}>
                                                <div className="b-chanel">
                                                    <a href="http://afonsogomes.com">
                                                        <img src="assets/img/demo/chanel-4.png" alt="" className="img-responsive" />
                                                        <div className="hover">
                                                            <span>Ray Simpson</span>
                                                            <span><i className="cv cvicon-cv-liked"></i> 134</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={2} sm={4} xs={4}>
                                                <div className="b-chanel">
                                                    <a href="http://afonsogomes.com">
                                                        <img src="assets/img/demo/chanel-5.png" alt="" className="img-responsive" />
                                                        <div className="hover">
                                                            <span>Simpson</span>
                                                            <span><i className="cv cvicon-cv-liked"></i> 1.6M</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={2} sm={4} xs={4}>
                                                <div className="b-chanel">
                                                    <a href="http://afonsogomes.com">
                                                        <img src="assets/img/demo/chanel-6.png" alt="" className="img-responsive" />
                                                        <div className="hover">
                                                            <apan>Ray</apan>
                                                            <span><i className="cv cvicon-cv-liked"></i> 265K</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </section>


                            </Col>
                        </Row>
                    </Container>
                </div>

                <SectionFooter />
            </Fragment>
        )
    }
}

export default PageMain