import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const omegaLinks = this.props.omegas.map(omega => (
            <li className="nav-item" key={omega.alias}>
                <NavLink exact to={`/omegas/${omega.alias}`} className="nav-link">{omega.alias}</NavLink>
            </li>
        ))
        return (
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <a className='navbar-brand' href="/omegas">Omegas</a>
        
            <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/omegas" className="nav-link">Home</NavLink> 
                    </li>
                    {omegaLinks}
                </ul>
            </div>

           
            </nav>
        )
    }
}
export default Navbar;
