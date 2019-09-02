import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class OmegaMutantDetails extends Component {
    render() {
        let { omega } = this.props;
        return (
            <div>
                <h1>{omega.alias}</h1>
                <h2>{omega.omegaPower}</h2>
                <Link to="/omegas">Back</Link>

            </div>
        )
    }
}

export default OmegaMutantDetails;
