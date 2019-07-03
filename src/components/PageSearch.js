import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter } from './'
import { Link } from "react-router-dom";
import { Grid as Container, Row, Col, DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

class PageSearch extends Component {

    render() {
        return (
            <Fragment>
                <SectionHeader />
                <div className="content-wrapper">
                    <Container>
                        <Row>
                            <div className="v-search">
                                <Container>
                                    <Row className="s-title">
                                        <Col lg={10} sm={9} xs={6}>Filter Search Results&nbsp;&nbsp;<i className="fa fa-chevron-up hidden-xs" aria-hidden="true"></i>
                                        </Col>
                                        <div className="col-lg-2 col-sm-3 col-xs-6 pull-right"><span className="hidden-xs">About</span> 60,254 results</div>
                                    </Row>
                                    <Row>
                                        <div className="col-lg-2 col-sm-4 col-xs-6 search-group">
                                            <div className="search-group-transform">
                                                <div className="s-s-title"><i className="cv cvicon-cv-calender"></i> <span>Upload Date:</span><span className="caret"></span></div>
                                                <ul>
                                                    <li> <Link to="#">Last hour</Link></li>
                                                    <li> <Link to="#">Today</Link></li>
                                                    <li> <Link to="#" className="active">This week</Link></li>
                                                    <li> <Link to="#">This month</Link></li>
                                                    <li> <Link to="#">This year</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-4 col-xs-6 search-group">
                                            <div className="search-group-transform">
                                                <div className="s-s-title"><i className="cv cvicon-cv-play-circle"></i> <span>Type:</span><span className="caret"></span></div>
                                                <ul>
                                                    <li> <Link to="#" className="active">Video</Link></li>
                                                    <li> <Link to="#">Channel</Link></li>
                                                    <li> <Link to="#">Playlist</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-4 search-group col-xs-12">
                                            <div className="s-s-title title-transform"><i className="cv cvicon-cv-watch-later"></i>Duration: <span className="visible-xs">(Minutes)</span></div>
                                            <ul className="hidden-xs">
                                                <li> <Link to="#">Short (&lt; 5 min)</Link></li>
                                                <li> <Link to="#" className="active">Medium (&lt; 10 min)</Link></li>
                                                <li> <Link to="#">Long (&gt; 20 min)</Link></li>
                                            </ul>
                                            <div className="visible-xs">
                                                <div className="duration-range"><input type="text"/></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-4 search-group col-xs-12">
                                           
                                                
                                       
                                        </div>
                                        <div className="col-lg-3 col-sm-4 search-group col-xs-12">
                                            <div className="s-s-title title-transform"><i className="cv cvicon-cv-star"></i> Features</div>
                                            <div className="features">
                                                 <Link to="#"><div className="feature">4K</div></Link>
                                                 <Link to="#"><div className="feature active">HD</div></Link>
                                                 <Link to="#"><div className="feature">3D</div></Link>
                                                <div className="clearfix"></div>
                                            </div>
                                            <ul className="hidden-xs">
                                                <li> <Link to="#">Subtitles</Link></li>
                                                <li> <Link to="#">Purchased</Link></li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <Row className="clearsearch">
                                        <div className="col-xs-6 visible-xs">
                                             <Link to="#"><i className="cv cvicon-cv-next"></i>Collapse</Link>
                                        </div>
                                        <div className="col-lg-12 col-sm-12 col-sx-6 ta-r">
                                             <Link to="#"><i className="cv cvicon-cv-cancel"></i> Clear all filters</Link>
                                        </div>
                                    </Row>
                            </Container>
                            </div>
                        </Row>

                        <div className="content-wrapper head-div">
                            <Container>
                                <Row>
                                    <div className="col-lg-12">

                            
                                        <div className="content-block">
                                            <div className="cb-header">
                                                <div className="row">
                                                    <div className="col-lg-10 col-xs-10">
                                                        <ul className="list-inline">
                                                            <li>Search Results  <Link to="#">"Uncharted 4"</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-2 col-xs-2">
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-video video-mobile-02">
                                                <div className="row">
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                     <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-4.png" alt=""/></Link>
                                                                    <div className="time">15:19</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                     <Link to="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    2,729,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 55%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                     <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-5.png" alt=""/></Link>
                                                                    <div className="time">4:23</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                     <Link to="single-video-tabs.html">Amazing Facts About Nebulas ...</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    429,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 79%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                     <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-6.png" alt=""/></Link>
                                                                    <div className="time">7:18</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                     <Link to="single-video-tabs.html">3DS Games Of 2016 that blew our mind</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    630,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 83%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                     <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-7.png" alt=""/></Link>
                                                                    <div className="time">27:18</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                     <Link to="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    10,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 43%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                     <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-8.png" alt=""/></Link>
                                                                    <div className="time">5:18</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                     <Link to="single-video-tabs.html">There Can Only Be One! Introducing Tanc ...</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    453,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 79%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                     <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-9.png" alt=""/></Link>
                                                                    <div className="time">34:18</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                    <Link to="single-video-tabs.html">Game of Thrones Season 6: Event Promo</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    1,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 93%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                    <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-10.png" alt=""/></Link>
                                                                    <div className="time">6:18</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                    <Link to="single-video-tabs.html">Mirror's Edge Catalyst Beta: PS4 vs Xbox One</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    420,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 73%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                                        <div className="h-video row">
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-img">
                                                                     <Link to="single-video-tabs.html"><img src="assets/img/demo/sv-11.png" alt=""/></Link>
                                                                    <div className="time">21:18</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-6">
                                                                <div className="v-desc">
                                                                     <Link to="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</Link>
                                                                </div>
                                                                <div className="v-views">
                                                                    50,347 views
                                                                </div>
                                                                <div className="v-percent"><span className="v-circle"></span> 94%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content-block head-div head-arrow mb-40">
                                            <div className="head-arrow-icon">
                                                <i className="cv cvicon-cv-next"></i>
                                            </div>
                                        </div>
                                              
                                    </div>
                                </Row>
                            </Container>
                        </div>


                    </Container>
                </div>
                <SectionFooter />
            </Fragment>
        )
    }
}

export default PageSearch