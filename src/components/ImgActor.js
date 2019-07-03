import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ImgActor extends Component {
    render() {
        return (
            <Link to={"actor/" + this.props.actor.id } className="col-md-2">
                <img src={"/assets/img/actors/" + this.props.actor.img} alt="" /><br/>
                { this.props.actor.name }
            </Link>      
        )
    }
}

export default ImgActor