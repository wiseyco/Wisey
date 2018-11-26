import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DbFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav>
            <ul className="footer-menu">
              <li>
                <Link to="/">
                    Accueil du site
                </Link>
              </li>
              <li>
                <Link to="/courses">
                    Formation
                </Link>
              </li>
              <li>
                <Link to="/profile">
                    Mon profile
                </Link>
              </li>
              <li>
                <Link to="/">
                    Blog
                </Link>
              </li>
          </ul>
          <p className="copyright text-center">
            &copy; {new Date().getFullYear()} 
            <Link to="http://www.wisey.co"> Wisey.co</Link>, made with love for a better world
            </p>
          </nav>
        </div>
      </footer>
    )
  }
}

export default DbFooter;