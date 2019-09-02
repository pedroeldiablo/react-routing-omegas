import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './OmegaMutants.css';

class OmegaMutants extends Component {
    render() {
        return (
            <div className="OmegaList">
                <h1 className ="display-1 text-center">Confirmed Omegas</h1>
                <div className="container">
                    <div className="row">
                        {this.props.omegas.map(o => (
                            <div className="OmegaList-omegas col-xs-12 col-sm-6 col-md-4 text-center" key={o.alias}>
                                <Link to={`/omegas/${o.alias}`}>
                                    <h3>{o.alias}</h3>
                                </Link>

                            </div>

                        ))}
                        
                    </div>

                </div>

            </div>
        )
    }

}

export default OmegaMutants;
