import React, { Component } from 'react';
import { Row, Col, DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { SectionMoviesItem } from './'
import { Context } from '../context';

class SectionSimilarMovies extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            totalPages: 1,
            pageLimit: 12,
            currentPage: 0,
            sort: 'title',
            order: 'asc'
        }
    }

    componentDidMount() {
        this.context.fetchMovies();
        this.context.subscribeMovies((movies) => {
            const pageLimit = this.state.pageLimit;
            const totalPages = Math.ceil(movies.length / pageLimit);
            this.setState({ movies, totalPages });
        });
    }
  
    printMovies = () => {
        let listaMovies = this.state.movies;

        if (this.state.order === 'desc') {
            listaMovies.sort((a, b) => (a[this.state.sort] < b[this.state.sort]) ? 1 : -1)
        } else {
            listaMovies.sort((a, b) => (a[this.state.sort] > b[this.state.sort]) ? 1 : -1)
        }


        let movies = [];

        const offset = (this.state.currentPage ) * this.state.pageLimit; // -1

        const currentMovies = listaMovies.slice(offset, offset + this.state.pageLimit);

        if (currentMovies.length > 0) {
            currentMovies.map((movie) => {
                return movies.push(
                    <SectionMoviesItem movie={ movie } key={ movie.id } />
                );
            });
        }

        return movies;
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
                            <h3>All movies</h3>
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
                                    <MenuItem onClick={() => this.handleSortChange('title|asc')}><i className="cv cvicon-cv-relevant"></i> Title ASC</MenuItem>
                                    <MenuItem onClick={() => this.handleSortChange('title|desc')}><i className="cv cvicon-cv-relevant"></i> Title DESC</MenuItem>
                                    <MenuItem onClick={() => this.handleSortChange('release_date|asc')}><i className="cv cvicon-cv-calender"></i> Release date ASC</MenuItem>                                    
                                    <MenuItem onClick={() => this.handleSortChange('release_date|asc')}><i className="cv cvicon-cv-calender"></i> Release date DESC</MenuItem>                                    
                                    <MenuItem onClick={() => this.handleSortChange('imdb_rating|asc')}><i className="cv cvicon-cv-star"></i> IMDB Rating ASC</MenuItem>
                                    <MenuItem onClick={() => this.handleSortChange('imdb_rating|desc')}><i className="cv cvicon-cv-star"></i> IMDB Rating DESC</MenuItem>
                                    <MenuItem onClick={() => this.handleSortChange('runtime|asc')}><i className="cv cvicon-cv-watch-later"></i> Longest ASC</MenuItem>
                                    <MenuItem onClick={() => this.handleSortChange('runtime|desc')}><i className="cv cvicon-cv-watch-later"></i> Longest DESC</MenuItem>
                                </DropdownButton>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    <Row className="cb-content videolist">
                        {this.printMovies()}
                    </Row>
                </section>
        )
    }
}

SectionSimilarMovies.contextType = Context;

export default SectionSimilarMovies