import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter, ImgActor, ImgGenre } from '.'
import { Link } from "react-router-dom";
import { Grid as Container, Row, Col} from 'react-bootstrap';
import { Context } from '../context';

class PageMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: 'placeholder',
            movie: {},
            movieActors: {},
            movieGenres: {}

        }
    }

    componentDidMount() {
        
        // this.context.fetchMovie(this.props.match.params.id).then((movie) => { this.setState({title: movie.title})});

        this.context.subscribeMovie(this.props.match.params.id, (movie) => {
            this.setState({movie});
        });

        this.context.fetchMovieActors(this.props.match.params.id).then((movieActors) => {
              this.setState({ movieActors })
        });

        this.context.fetchMovieGenres(this.props.match.params.id).then((movieGenres) => {
            this.setState({ movieGenres })
      });

    }

    renderMovieActor = () => {
        let listaActors = this.state.movieActors;

        let actors = [];

        if (listaActors.length > 0) {
            listaActors.map((actor) => {
                return actors.push(
                    <ImgActor actor={ actor } key={ actor.id } />
                );
            });
        }
        return actors;
    }

    renderMovieGenre = () => {
        let listaGenres = this.state.movieGenres;

        let genres = [];

        if (listaGenres.length > 0) {
            listaGenres.map((genre) => {
                return listaGenres = genres.push(
                    <ImgGenre genre={ genre } key={ genre.id } />
                )
            });
        }
        
        return genres;
    }


    render() {
        return (
            <Fragment>
                <SectionHeader />

                <div className="content-wrapper single-video">
                    <Container>
                        <Row>

                            <Col lg={8} sm={12} xs={12}>
                                <div className="sv-video">
                                    <video poster={'/assets/img/movies/' + this.state.movie.img } controls="controls" width="100%" height="100%">
                                        <source src="/assets/vid/bunny.mp4" type='video/mp4'></source>
                                    </video>
                                    
                                </div>
                                <div className="acide-panel acide-panel-top">
                                    <Link to="/"><i className="cv cvicon-cv-watch-later" data-toggle="tooltip" data-placement="top" title="Watch Later"></i></Link>
                                    <Link to="/"><i className="cv cvicon-cv-liked" data-toggle="tooltip" data-placement="top" title="Liked"></i></Link>
                                    <Link to="/"><i className="cv cvicon-cv-flag" data-toggle="tooltip" data-placement="top" title="Flag"></i></Link>
                                </div>
                                <div className="author">
                                    <div className="col-md-3">
                                        <Link to="/"><img src={'/assets/img/movies/' + this.state.movie.img } alt="" className="img-responsive" /></Link>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="sv-name">
                                            <Link to="/">{ this.state.movie.title}</Link>
                                        </div>
                                    </div>
                 
                                    <div className="sv-views">
                                        <div className="sv-views-count">2,729,347 views</div>
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
                                        <div className="cast row clearfix">
                                            <div className="col-md-12">
                                                <h4>Cast</h4>
                                            </div>
                                            {this.renderMovieActor()}
                                        </div>
                                                   
                                        <div className="genre row clearfix">
                                            <div className="col-md-12"> 
                                                <h4>Genre</h4>
                                            </div>
                                            <p className="sv-tags">
                                                { this.renderMovieGenre() }
                                            </p>
                                        </div>


                                        <div className="similar-genre row clearfix">
                                            <div className="col-md-12"> 
                                                <h4>
                                                    <Link to="/" className="active" data-toggle=".similar-v">
                                                        <i className="cv cvicon-cv-play-circle"></i>
                                                        <span>Other movies in Action</span>
                                                    </Link>
                                                </h4>

                                            </div>
                                            <p className="sv-tags">
                                            </p>
                                        </div>
                                    </div>
                                                
                                    
                                    <div className="single-v-footer">
                                        <div className="similar-v single-video video-mobile-02">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="h-video row">
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-img">
                                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-12.png" alt="" /></Link>
                                                                <div className="time">7:18</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <Link to="single-video-tabs.html">3DS Games Of 2016 that blew our mind</Link>
                                                            </div>
                                                            <div className="v-views">630,347 views</div>
                                                            <div className="v-percent"><span className="v-circle"></span> 83%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="h-video row">
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-img">
                                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-13.png" alt="" /></Link>
                                                                <div className="time">23:18</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <Link to="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</Link>
                                                            </div>
                                                            <div className="v-views">2,630,347 views</div>
                                                            <div className="v-percent"><span className="v-circle"></span> 96%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="h-video row">
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-img">
                                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-14.png" alt="" /></Link>
                                                                <div className="time">15:36</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <Link to="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</Link>
                                                            </div>
                                                            <div className="v-views">71,347 views</div>
                                                            <div className="v-percent"><span className="v-circle"></span> 63%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="h-video row">
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-img">
                                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-7.png" alt="" /></Link>
                                                                <div className="time">27:18</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-xs-6">
                                                            <div className="v-desc">
                                                                <Link to="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</Link>
                                                            </div>
                                                            <div className="v-views">10,347 views</div>
                                                            <div className="v-percent"><span className="v-circle"></span> 43%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                               
                            </Col>


                            <div className="col-lg-4 col-xs-12 col-sm-12 hidden-xs">


                                <div className="list">
                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-1.png" alt="" /></Link>
                                                <div className="time">15:19</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Battlefield 3: Official Fault Line Gameplay</Link>
                                            </div>
                                            <div className="v-views">2,729,347 views</div>
                                            <div className="v-percent"><span className="v-circle"></span> 55%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-2.png" alt="" /></Link>
                                                <div className="time">4:23</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Kingdom Come: Deliverance ALPHA</Link>
                                            </div>
                                            <div className="v-views">429,347 views </div>
                                            <div className="v-percent"><span className="v-circle"></span> 79%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-3.png" alt="" /></Link>
                                                <div className="time">7:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Markiplier Reacts to Mean Comments</Link>
                                            </div>
                                            <div className="v-views">630,347 views</div>
                                            <div className="v-percent"><span className="v-circle"></span> 83%</div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>



                                <div className="caption">
                                    <div className="left">
                                        <Link to="/">Recomended Videos</Link>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>

                                
                                <div className="list">
                                    <div className="h-video row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-img">
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-4.png" alt="" /></Link>
                                                <div className="time">15:19</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-5.png" alt="" /></Link>
                                                <div className="time">4:23</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Amazing Facts About Nebulas ...</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-6.png" alt="" /></Link>
                                                <div className="time">7:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">3DS Games Of 2016 that blew our mind</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-7.png" alt="" /></Link>
                                                <div className="time">27:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-8.png" alt="" /></Link>
                                                <div className="time">5:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">There Can Only Be One! Introducing Tanc ...</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-9.png" alt="" /></Link>
                                                <div className="time">34:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Game of Thrones Season 6: Event Promo</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-10.png" alt="" /></Link>
                                                <div className="time">6:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Mirror's Edge Catalyst Beta: PS4 vs Xbox One</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-11.png" alt="" /></Link>
                                                <div className="time">21:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-12.png" alt="" /></Link>
                                                <div className="time">7:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">3DS Games Of 2016 that blew our mind</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-13.png" alt="" /></Link>
                                                <div className="time">23:18</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">Cornfield Chase Outlast II Official Gameplay</Link>
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
                                                <Link to="single-video-tabs.html"><img src="/assets/img/demo/sv-14.png" alt="" /></Link>
                                                <div className="time">15:36</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="v-desc">
                                                <Link to="single-video-tabs.html">No Man's Sky: 21 Minutes of Gameplay</Link>
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

PageMovie.contextType = Context;

export default PageMovie