import React, { Component } from 'react';
import { Row, Col, DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { SectionActorsItem } from './'
import { Context } from '../context';

class SectionActors extends Component {

    constructor(props) {
        super(props)

        this.state = {
            actors: [],
            totalPages: 1,
            pageLimit: 12,
            currentPage: 0,
            sort: 'oscars',
            order: 'desc',
        }
    }

    componentDidMount() {
        this.context.fetchActors();
        this.context.subscribeActors((actors) => {
            const pageLimit = this.state.pageLimit;

            if ('gender' in this.props) {
                const gender = this.props.gender;
                actors = actors.filter(function (e) {
                    return e.gender === gender;
                });
            }

            const totalPages = Math.ceil(actors.length / pageLimit);

            this.setState({ actors, totalPages });
        });
    }
  
    printActors = () => {
        let listaActors = this.state.actors;

        if (this.state.order === 'desc') {
            listaActors.sort((a, b) => (a[this.state.sort] < b[this.state.sort]) ? 1 : -1)
        } else {
            listaActors.sort((a, b) => (a[this.state.sort] > b[this.state.sort]) ? 1 : -1)
        }

        let actors = [];

        const offset = (this.state.currentPage ) * this.state.pageLimit; // -1

        const currentActors = listaActors.slice(offset, offset + this.state.pageLimit);

        if (currentActors.length > 0) {
            currentActors.map((actor) => {
                return actors.push(
                    <SectionActorsItem actor={ actor } key={ actor.id } />
                );
            });
        }

        return actors;
    }


    handlePaginationClick = data => {
        let selected = data.selected + 1;

        this.setState({
            currentPage: selected
        })
    }

    handleSortChange = value => {

        let [sort, order] = value.split('|');


        this.setState({
            order, sort
        })
    }

    render() {
        return (
            
                <section className="content-block">
                    <Row className="cb-header">
                        <Col lg={3} xs={12}>
                            <h3>All actors</h3>
                        </Col>
                        <Col lg={6} xs={12} className="text-center">
                            <ReactPaginate
                                disableInitialCallback={ true }
                                initialPage = {parseInt(this.props.currentPage) -1}
                                activeClassName={'active'}
                                pageCount={parseInt(this.state.totalPages)}
                                pageRangeDisplayed={5}
                                marginPagesDisplayed={2}
                                containerClassName={"pagination"}
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                onPageChange={this.handlePaginationClick}
                            />
                        </Col>
                        <Col lg={3} xs={12}>
                            <ButtonToolbar className={'pull-right bg-clean'}>
                                <DropdownButton
                                    className={'btn-default btn-esp'}
                                    title={'Sort'}
                                    id={'dropdown-basic'}
                                    noCaret={false}>
                                    <MenuItem onClick={() => this.handleSortChange('name|asc')}><i className="cv cvicon-cv-relevant"></i> Name ASC</MenuItem>
                                    <MenuItem onClick={() => this.handleSortChange('name|desc')}><i className="cv cvicon-cv-relevant"></i> Name DESC</MenuItem>
                                    <MenuItem onClick={() => this.handleSortChange('date_birth|asc')}><i className="cv cvicon-cv-calender"></i> Birth date ASC</MenuItem>                                    
                                    <MenuItem onClick={() => this.handleSortChange('date_birth|desc')}><i className="cv cvicon-cv-calender"></i> Birth date DESC</MenuItem>                                    
                                    <MenuItem onClick={() => this.handleSortChange('oscars|asc')}><i className="cv cvicon-cv-calender"></i> Oscars ASC</MenuItem>                                    
                                    <MenuItem onClick={() => this.handleSortChange('oscars|desc')}><i className="cv cvicon-cv-calender"></i> Oscars DESC</MenuItem>                                    
                                </DropdownButton>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    <Row className="cb-content videolist">
                        {this.printActors()}
                    </Row>
            </section>
            
        )
    }
}

SectionActors.contextType = Context;

export default SectionActors