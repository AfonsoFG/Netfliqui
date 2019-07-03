import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from 'react-bootstrap';

class SectionActorsItem extends Component {

    render() {
        
        let d_b = '';

        if (this.props.actor.date_birth !== '0000-00-00') {
            d_b = new Date(this.props.actor.date_birth).toISOString().slice(0, 10);
        } else {
            d_b = 'unknown'
        }

        return (
            <Col lg={2} sm={4} className={"videoitem"}>
                <div className="v-img">
                    <Link to={"/actor/" + this.props.actor.id }>
                        <img src={"assets/img/actors/" + this.props.actor.img } alt="" className="img-responsive" />
                    </Link>
                </div>
                <div className="v-details clearfix">
                    <Col className="oscars pull-left">
                        <span>BD</span> <b>{ d_b }</b>
                    </Col>
                    <Col className="oscars text-right pull-right">
                        <span><i className="fa fa-star"></i></span> <b>{ this.props.actor.oscars }</b>
                    </Col>
                </div>
                <div className="v-desc">
                    <Link to={"/actor/" + this.props.actor.id }>{this.props.actor.name}</Link>
                </div>
            </Col>
        )
    }
}

export default SectionActorsItem