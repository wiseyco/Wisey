import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentTrainingCenter } from '../../actions/tcActions'
import Spinner from '../common/Spinner';
import Navbar from '../layout/Navbar'
import Graph from './graph/Graph'



import SideBar from './common/SideBar.js';
import DbNavBar from './common/DbNavBar';
import DbFooter from './common/DbFooter';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getCurrentTrainingCenter();
  }


  render() {

    // const { user } = this.props.auth;
    const { trainingCenter, loading } = this.props.trainingCenter;

    let dashboardContent;

    if(trainingCenter === null || loading) {
      dashboardContent = (
        
        <div className="wrapper">
            <SideBar />
            <div className="main-panel">
              <DbNavBar/>
            <div className="content">
                <Spinner />
              </div>
            <DbFooter />
            </div>
          </div>
        
      );

    } else {

      // Check if the logged in user has profile data
      if(Object.keys(trainingCenter).length > 0) {
        
        // User is logged in and IS a training center
        dashboardContent = (

          <div className="wrapper">
            <SideBar />
            <div className="main-panel">
              <DbNavBar/>
            <div className="content">
                <div className="container-fluid">
                  <Graph />
                </div>
              </div>
            <DbFooter />
            </div>
          </div>
          
        );

      } else {

        // User is logged in, but is NOT a training center
        dashboardContent = (
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
                      <Link to="/add-training-center" className="primary-btn banner-btn text-dark">
                        Je suis professionnel de la formation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }
    }

    return (
      <div>
        {dashboardContent}
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentTrainingCenter: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  trainingCenter: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  trainingCenter: state.trainingCenter,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentTrainingCenter }
)(Dashboard);