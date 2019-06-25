import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter } from './'
import { Link } from "react-router-dom";
import { Grid as Container, Row, Col, DropdownButton, ButtonToolbar, MenuItem, Tabs, Tab, OverlayTrigger, Tooltip } from 'react-bootstrap';

class PageVideo extends Component {

    render() {
        return (
            <Fragment>
                <SectionHeader />

                <div className="content-wrapper single-video">
                    <Container>
                        <Row>




                            <div className="col-lg-8 col-xs-12 col-sm-12">
                                <div className="sv-video">
                                    <video poster="images/single-video.png" controls="controls" width="100%" height="100%">
                                        <source src="assets/img/demo/video-1.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
                                    </video>
                                    <span className="sv-play"><i className="cv cvicon-cv-play"></i></span>

                                </div>
                                <h1><a href="#">Analyzing the Mass Effect: Andromeda E3 2016 Trailer</a></h1>
                                <div className="acide-panel acide-panel-top">
                                    <a href="#"><i className="cv cvicon-cv-watch-later" data-toggle="tooltip" data-placement="top" title="Watch Later"></i></a>
                                    <a href="#"><i className="cv cvicon-cv-liked" data-toggle="tooltip" data-placement="top" title="Liked"></i></a>
                                    <a href="#"><i className="cv cvicon-cv-flag" data-toggle="tooltip" data-placement="top" title="Flag"></i></a>
                                </div>
                                <div className="author">
                                    <div className="author-head">
                                        <a href="#"><img src="assets/img/demo/channel-user.png" alt="" className="sv-avatar" /></a>
                                        <div className="sv-name">
                                            <div><a href="#">NaughtyDog</a> . 52 Videos</div>
                                            <div className="c-sub hidden-xs">
                                                <div className="c-f">
                                                    Subscribe
                                </div>
                                                <div className="c-s">
                                                    22,548,145
                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <a href="#" className="author-btn-add"><i className="cv cvicon-cv-plus"></i></a>
                                    </div>
                                    <div className="author-border"></div>
                                    <div className="sv-views">
                                        <div className="sv-views-count">
                                            2,729,347 views
                        </div>
                                        <div className="sv-views-progress">
                                            <div className="sv-views-progress-bar"></div>
                                        </div>
                                        <div className="sv-views-stats">
                                            <span className="percent">95%</span>
                                            <span className="green"><span className="circle"></span> 39,852</span>
                                            <span className="grey"><span className="circle"></span> 852</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="info">
                                  


                                <div>
                                                    <h4>Cast:</h4>
                                                    <p>Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher</p>

                                                    <h4>Category :</h4>
                                                    <p>Gaming , PS4 Exclusive , Gameplay , 1080p</p>

                                                    <h4>About :</h4>
                                                    <p>Three years after the events of Uncharted 3: Drake's Deception, Nathan Drake, now retired as a fortune hunter, has settled into a normal life with his wife Elena Fisher. His world is then turned upside down when his older brother Sam, long believed to be dead, suddenly reappears seeking Drake's help.</p>

                                                    <h4>Tags :</h4>
                                                    <p className="sv-tags">
                                                        <span><a href="#">Uncharted 4</a></span>
                                                        <span><a href="#">Playstation 4</a></span>
                                                        <span><a href="#">Gameplay</a></span>
                                                        <span><a href="#">1080P</a></span>
                                                        <span><a href="#">ps4Share</a></span>
                                                        <span><a href="#">+ 6</a></span>
                                                    </p>

                                                    <div className="row date-lic">
                                                        <div className="col-xs-6">
                                                            <h4>Release Date:</h4>
                                                            <p>2 Days ago</p>
                                                        </div>
                                                        <div className="col-xs-6 ta-r">
                                                            <h4>License:</h4>
                                                            <p>Standard</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                    



                                    <div className="content-block head-div head-arrow head-arrow-top visible-xs">
                                        <div className="head-arrow-icon">
                                            <i className="cv cvicon-cv-next"></i>
                                        </div>
                                    </div>


                                    
                                    <div className="single-v-footer">
                                        <div className="single-v-footer-switch">
                                            <a href="#" className="active" data-toggle=".similar-v">
                                                <i className="cv cvicon-cv-play-circle"></i>
                                                <span>Similar Videos</span>
                                            </a>
                                            <a href="#" data-toggle=".comments">
                                                <i className="cv cvicon-cv-comment"></i>
                                                <span>236 Comments</span>
                                            </a>
                                        </div>
                                        <div className="similar-v single-video video-mobile-02">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="h-video row">
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-img">
                                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-12.png" alt="" /></a>
                                                                <div className="time">7:18</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <a href="single-video-tabs.html">3DS Games Of 2016 that blew our mind</a>
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
                                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-13.png" alt="" /></a>
                                                                <div className="time">23:18</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <a href="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</a>
                                                            </div>
                                                            <div className="v-views">
                                                                2,630,347 views
                                            </div>
                                                            <div className="v-percent"><span className="v-circle"></span> 96%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="h-video row">
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-img">
                                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-14.png" alt="" /></a>
                                                                <div className="time">15:36</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <a href="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</a>
                                                            </div>
                                                            <div className="v-views">
                                                                71,347 views
                                            </div>
                                                            <div className="v-percent"><span className="v-circle"></span> 63%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="h-video row">
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-img">
                                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-7.png" alt="" /></a>
                                                                <div className="time">27:18</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <a href="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</a>
                                                            </div>
                                                            <div className="v-views">
                                                                10,347 views
                                            </div>
                                                            <div className="v-percent"><span className="v-circle"></span> 43%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comments">
                                            <div className="reply-comment">
                                                <div className="rc-header"><i className="cv cvicon-cv-comment"></i> <span className="semibold">236</span> Comments</div>
                                                <div className="rc-ava"><a href="#"><img src="assets/img/demo/ava5.png" alt="" /></a></div>
                                                <div className="rc-comment">
                                                    <form action="#" method="post">
                                                        <textarea rows="3">Share what you think?</textarea >
                                                        <button type="submit">
                                                            <i className="cv cvicon-cv-add-comment"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="comments-list">

                                                <div className="cl-header">
                                                    <div className="c-nav">
                                                        <h4 href="#" className="active">Popular <span className="hidden-xs">Comments</span></h4>
                                                    </div>
                                                </div>


                                                <div className="cl-comment">
                                                    <div className="cl-avatar"><a href="#"><img src="assets/img/demo/ava8.png" alt="" /></a></div>
                                                    <div className="cl-comment-text">
                                                        <div className="cl-name-date"><a href="#">BOWTZ pros</a> . 1 week ago</div>
                                                        <div className="cl-text">Really great story. You're doing a great job. Keep it up pal.</div>
                                                        <div className="cl-meta"><span className="green"><span className="circle"></span> 121</span> <span className="grey"><span className="circle"></span> 2</span> . <a href="#">Reply</a></div>
                                                        <div className="cl-replies"><a href="#">View all 5 replies <i className="fa fa-chevron-down" aria-hidden="true"></i></a></div>
                                                        <div className="cl-flag"><a href="#"><i className="cv cvicon-cv-flag"></i></a></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>

                                              

                                                <div className="cl-comment">
                                                    <div className="cl-avatar"><a href="#"><img src="assets/img/demo/ava2.png" alt="" /></a></div>
                                                    <div className="cl-comment-text">
                                                        <div className="cl-name-date"><a href="#">Isleifna</a> . 1 week ago</div>
                                                        <div className="cl-text">Omg thank you so much, idk how I couldn't figure out that master trap</div>
                                                        <div className="cl-meta"><span className="green"><span className="circle"></span> 245</span> <span className="grey"><span className="circle"></span> 19</span> . <a href="#">Reply</a></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>

                                                <div className="cl-comment">
                                                    <div className="cl-avatar"><a href="#"><img src="assets/img/demo/ava3.png" alt="" /></a></div>
                                                    <div className="cl-comment-text">
                                                        <div className="cl-name-date"><a href="#">Mark</a> . 2 days ago</div>
                                                        <div className="cl-text">you welcome could you watch my video plz dude you are awsome</div>
                                                        <div className="cl-meta"><span className="green"><span className="circle"></span> 516</span> <span className="grey"><span className="circle"></span> 64</span> . <a href="#">Reply</a></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>

                                                <div className="cl-comment">
                                                    <div className="cl-avatar"><a href="#"><img src="assets/img/demo/ava4.png" alt="" /></a></div>
                                                    <div className="cl-comment-text">
                                                        <div className="cl-name-date"><a href="#">High_on_meme</a> . 4 days ago</div>
                                                        <div className="cl-text">People allover the world took his music to heart and that music coming from his soul</div>
                                                        <div className="cl-meta"><span className="green"><span className="circle"></span> 95</span> <span className="grey"><span className="circle"></span> 0</span> . <a href="#">Reply</a></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>

                                                

                                            </div>
                                            </div>

                                    </div>
                                </div>
                                <div className="content-block head-div head-arrow visible-xs">
                                    <div className="head-arrow-icon">
                                        <i className="cv cvicon-cv-next"></i>
                                    </div>
                                    <div className="adblock2 adblock2-v2">
                                        <div className="img">
                                            <span>Google AdSense 300 x 250</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-xs-12 col-sm-12 hidden-xs">


                                <div className="list">
                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-1.png" alt="" /></a>
                                                <div className="time">15:19</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Battlefield 3: Official Fault Line Gameplay</a>
                                            </div>
                                            <div className="v-views">
                                                2,729,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 55%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-2.png" alt="" /></a>
                                                <div className="time">4:23</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Kingdom Come: Deliverance ALPHA</a>
                                            </div>
                                            <div className="v-views">
                                                429,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 79%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-3.png" alt="" /></a>
                                                <div className="time">7:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Markiplier Reacts to Mean Comments</a>
                                            </div>
                                            <div className="v-views">
                                                630,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 83%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>



                                <div className="caption">
                                    <div className="left">
                                        <a href="#">Recomended Videos</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="list">
                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-4.png" alt="" /></a>
                                                <div className="time">15:19</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</a>
                                            </div>
                                            <div className="v-views">
                                                2,729,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 55%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-5.png" alt="" /></a>
                                                <div className="time">4:23</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Amazing Facts About Nebulas ...</a>
                                            </div>
                                            <div className="v-views">
                                                429,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 79%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-6.png" alt="" /></a>
                                                <div className="time">7:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">3DS Games Of 2016 that blew our mind</a>
                                            </div>
                                            <div className="v-views">
                                                630,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 83%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-7.png" alt="" /></a>
                                                <div className="time">27:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</a>
                                            </div>
                                            <div className="v-views">
                                                10,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 43%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>



                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-8.png" alt="" /></a>
                                                <div className="time">5:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">There Can Only Be One! Introducing Tanc ...</a>
                                            </div>
                                            <div className="v-views">
                                                453,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 79%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>



                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-9.png" alt="" /></a>
                                                <div className="time">34:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Game of Thrones Season 6: Event Promo</a>
                                            </div>
                                            <div className="v-views">
                                                1,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 93%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>



                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-10.png" alt="" /></a>
                                                <div className="time">6:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Mirror's Edge Catalyst Beta: PS4 vs Xbox One</a>
                                            </div>
                                            <div className="v-views">
                                                420,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 73%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>



                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-11.png" alt="" /></a>
                                                <div className="time">21:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</a>
                                            </div>
                                            <div className="v-views">
                                                50,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 94%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>



                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-12.png" alt="" /></a>
                                                <div className="time">7:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">3DS Games Of 2016 that blew our mind</a>
                                            </div>
                                            <div className="v-views">
                                                630,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 83%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>



                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-13.png" alt="" /></a>
                                                <div className="time">23:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</a>
                                            </div>
                                            <div className="v-views">
                                                2,630,347 views
                            </div>
                                            <div className="v-percent"><span className="v-circle"></span> 96%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <a href="single-video-tabs.html"><img src="assets/img/demo/sv-14.png" alt="" /></a>
                                                <div className="time">15:36</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <a href="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</a>
                                            </div>
                                            <div className="v-views">
                                                71,347 views
                                                 </div>
                                            <div className="v-percent"><span className="v-circle"></span> 63%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>


                            </div>







                        </Row>
                    </Container>
                </div>

                <SectionFooter />
            </Fragment>
        )
    }
}

export default PageVideo