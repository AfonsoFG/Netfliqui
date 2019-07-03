import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter, SectionMovies, SectionActors } from './'
import { Grid as Container } from 'react-bootstrap';

class PageMain extends Component {
    render() {
        return (
            <Fragment>
                <SectionHeader />
                <div className="content-wrapper">
                    <Container>
                        <SectionMovies />
                        <SectionActors gender="F" />
                        <SectionActors gender="M" />
                    </Container>
                </div>
                <SectionFooter />
            </Fragment>
        )
    }
}



export default PageMain