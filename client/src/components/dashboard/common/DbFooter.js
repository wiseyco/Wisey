import React, { Component } from 'react'

class DbFooter extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <nav>
            <ul class="footer-menu">
              <li>
                <a href="#">
                    Home
                </a>
              </li>
              <li>
                <a href="#">
                    Company
                </a>
              </li>
              <li>
                <a href="#">
                    Portfolio
                </a>
              </li>
              <li>
                <a href="#">
                    Blog
                </a>
              </li>
          </ul>
          <p class="copyright text-center">
            &copy; {new Date().getFullYear()} 
            <a href="http://www.wisey.co"> Wisey.co</a>, made with love for a world
            </p>
          </nav>
        </div>
      </footer>
    )
  }
}

export default DbFooter;