import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';


class Navbar extends Component {

    render () {
    
    return (
        <div> 
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark second-navbar">
        <Link class="navbar-brand" to="/">wiseyco</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Formations<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/profile">Profil <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Login/>
                </li>
            </ul>

        </div>
    </nav>

        </div>
    )
    }
}

export default Navbar;