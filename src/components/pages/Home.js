import './Home.css';
import React, { Component } from 'react'
import Footer from '../Footer';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="bg bg-left">
                            <a className="nav-link" href="/userinfo"><h2>Speak </h2></a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="bg bg-right">
                            <a className="nav-link" href="/listen"><h2>Listen</h2></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
            </>
        )
    }
}



