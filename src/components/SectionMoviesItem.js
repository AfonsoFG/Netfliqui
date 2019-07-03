import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';

class SectionMoviesItem extends Component {
    render() {
        return (
            <Col lg={2} sm={4} className={"videoitem"}>
                <div className="v-img">
                    <Link to={"/movie/" + this.props.movie.id }>
                        <img src={"assets/img/movies/" + this.props.movie.img } alt="" className="img-responsive" />
                    </Link>
                    <div className="time">{this.props.movie.runtime} mins</div>
                </div>
                <Row className="v-details">
                    <Col xs={6} className="oscars">
                        <span>IMDB</span> <b>{ this.props.movie.imdb_rating}</b>
                    </Col>
                    <Col xs={6} className="oscars">
                        <span>Oscars</span> <b>{this.props.movie.oscars}</b>
                    </Col>
                </Row>
                <div className="v-desc">
                    <Link to={"/movie/" + this.props.movie.id }>{this.props.movie.title}</Link>
                </div>
            </Col>
        )
    }
}

export default SectionMoviesItem