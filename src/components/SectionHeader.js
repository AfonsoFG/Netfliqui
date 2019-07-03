import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid as Container, Row, Col, DropdownButton, MenuItem, InputGroup, Navbar, Nav, NavItem } from 'react-bootstrap';
import { ReactComponent as Logo } from '../assets/img/logos/netfliqui.svg';
import Select from 'react-select';
import { Context } from '../context';


let isLoadingExternally, isLoadingExternally2 = false;

class SectionHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            movies: [],
            actors: [],
            selecting: 'movies'
        }
    }

    componentDidMount() {

        isLoadingExternally = true;
        this.context.fetchMovies();
        this.context.subscribeMovies((movies) => {
            isLoadingExternally = false;
            this.setState({ movies });
        });

        isLoadingExternally2 = true;
        this.context.fetchActors();
        this.context.subscribeActors((actors) => {
            isLoadingExternally2 = false;
            this.setState({ actors });

        });
    }

    renderList = () => {

        if (this.state.selecting === 'movies') {
            return (this.state.movies.map(
                data => ({
                    value: data.id,
                    img: data.img,
                    label: data.title,
                })
            ))
        } else if (this.state.selecting === 'actors') {
            return (this.state.actors.map(
                data => ({
                    value: data.id,
                    img: data.img,
                    label: data.name,
                })
            ))
        }

    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    }
    /*
        optionRenderer = props => {
            return (
                <div {...props.innerProps}>
                    <img src={`assets/img/filmes/${props.data.img}`} height="50" alt="" /> {props.data.label}
                </div>
            );
        };
    */
    handleSelectTypeChange = type => {
        this.setState({ selecting: type });
    }

    render() {

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                padding: 20,
            }),
            control: () => ({

            }),
            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = 'opacity 300ms';

                return { ...provided, opacity, transition };
            }
        }


        return (
            <Fragment>
                <header>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/" className="navbar-brand"><Logo /></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight className="selectuser">
                                <NavItem eventKey={1} href="/signin">Sign in</NavItem>
                                <NavItem eventKey={2} href="#">Sign up</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Container>
                        <Row className="navbar-container2">
                            <Col lg={12}>
                                <form action="search.html" method="post">
                                    <div className="topsearch">
                                        <InputGroup>
                                            <InputGroup.Addon id="sizing-addon2"><i className="fa fa-search"></i></InputGroup.Addon>

                                            <Select
                                                name="pesquisa"
                                                className="form-control react-select-container"
                                                value={this.state.selectedOption}
                                                onChange={this.handleChange}
                                                clearable={true}
                                                searchable={true}
                                                isLoading={isLoadingExternally && isLoadingExternally2}
                                                options={this.renderList()}
                                                styles={customStyles}
                                                classNamePrefix="react-select"
                                            />
                                            <DropdownButton
                                                componentClass={InputGroup.Button}
                                                className="btn-default"
                                                id="btn-select"
                                                title="Search type">
                                                <MenuItem onClick={() => { this.handleSelectTypeChange('movies') }}><i className="cv cvicon-cv-video-file"></i> Movies</MenuItem>
                                                <MenuItem onClick={() => { this.handleSelectTypeChange('actors') }}><i className="cv cvicon-cv-star"></i> Actors</MenuItem>
                                            </DropdownButton>
                                        </InputGroup>
                                    </div>
                                </form>

                            </Col>
                        </Row>
                    </Container>

                </header>
            </Fragment>
        );
    }
}


SectionHeader.contextType = Context;


export default SectionHeader