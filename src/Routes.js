import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import OmegaMutants from './OmegaMutants';
import OmegaMutantDetails from './OmegaMutantDetails';

class Routes extends Component {
    render() {
        const getMutant = props => {
            let alias = props.match.params.alias;
            let currentMutant = this.props.omegas.find(
              omegas => omegas.alias.toLowerCase() === alias.toLowerCase()
            ); 
            return <OmegaMutantDetails {...props} omega={currentMutant} />;
          }
        return (
            <div>
                <Switch>
                    <Route exact path='/omegas' render={() => <OmegaMutants omegas={this.props.omegas}/>} />
                    <Route exact path='/omegas/:alias' render={getMutant} />
                    <Redirect to='/omegas' />
                </Switch>
            </div>
        )
    }
}
export default Routes;
