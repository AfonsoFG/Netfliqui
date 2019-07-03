import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ImgGenre extends Component {

    
    render() {
        return (
            <span>
                <span className="col-md-4">
                    <Link to={"genres/" + this.props.genre.id }>
                        <img src={"/assets/img/genres/" + this.props.genre.img} alt="" />
                        <br />
                        {this.props.genre.name}
                    </Link>
                </span>
            </span>
        )
    }
}

export default ImgGenre