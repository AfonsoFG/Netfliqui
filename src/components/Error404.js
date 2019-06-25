import React, { Component, Fragment } from 'react'
import { SectionHeader, SectionFooter } from './../components'

class Error404 extends Component {
    
    render() {
        return (
        <Fragment>
            <SectionHeader/>
            <div className="container pageBody page404">
                <div className='row'>
                    <div className='col-md-12 main'>
                        <h3>ERRO</h3>
                        <div className="text-center mt150">
                            <span className="big">Erro 404</span>
                            <br/>
                            <span className="small">Página não encontrada</span>
                        </div>
                    </div>
                </div>
            </div>
            <SectionFooter/>
        </Fragment>
        )
    }
}

export default Error404