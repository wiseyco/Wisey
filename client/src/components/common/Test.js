import React, { Component } from 'react'
import Navbar from '../layout/Navbar';

class Test extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className= "banner-become-a-tc relative">
          <div className="container">
            <div className="row fullscreen align-items-center">
              <div className="col-md-6">
                <div className="banner-content text-center">
                  <h1 className="text-uppercase">Faites décoller votre activité.</h1>
                  <br />
                  <p className="text-uppercase ">Inscrivez gratuitement votre centre de formation et référencez votre entreprise et vos parcours.</p>
                  <a href="/" className="primary-btn banner-btn text-dark">Je suis professionnel de la formation</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Test;
