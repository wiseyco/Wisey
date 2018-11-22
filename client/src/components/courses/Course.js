import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import Spinner from '../common/Spinner';
import { getCourseById } from '../../actions/courseActions';
import calendar from '../../img/icons/calendar.png';
import controls from '../../img/icons/controls.png';
import hourglass from '../../img/icons/hourglass.png';
import training from '../../img/icons/training.png';
import star from '../../img/icons/star.png';

class Course extends Component {

    componentDidMount () {
        if (this.props.match.params.id) {
            this.props.getCourseById(this.props.match.params.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.course.course === null && this.props.course.loading) {
          this.props.history.push('/not-found');
        }
      }

    render () {

        const { course, loading } = this.props.course;
        if (course === null || loading) {
            return (<Spinner />);
          } 

        
    
    return (
        <div className="module-page"> 
            <Navbar />
            <section className="section module-section">

            <div className="container module-first-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="module-name">Formation react et node</h1>
                    </div>
                </div>
                <div className="row module-subtitle-row">
                    <div className="col-8">
                    <h4>Master Angular (Angular 5, incl. Angular 6), React + Redux (React 16) & Node. Payments, Stripe, AWS, Express included.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                            <img src={star} alt="" />&nbsp;
                            <img src={star} alt="" />&nbsp;
                            <img src={star} alt="" />&nbsp;
                            <img src={star} alt="" />&nbsp;
                            <img src={star} alt="" />&nbsp;
                            <span className="module-note"> 4,9 (200 notes). 9 participants inscrits</span>
                    </div>
                </div>
            </div>

            <div className="container-fluid module-second-container">
                <div className="row col-10 module-features-row">
                    <div className="col-xs-6 col-sm-4 col-md-3 text-center">
                        <img src={calendar} alt=""/>
                        <p>10 janvier 2019</p>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 text-center">
                        <img src={hourglass} alt=""/>
                        <p>5 jours</p>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 text-center">
                        <img src={controls} alt=""/>
                        <p>Bon niveau de Maths</p>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 text-center">
                        <img src={training} alt=""/>
                        <p>Présentiel</p>
                    </div>
                <div/>

            </div>
            </div>

            <div className="container module-third-container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h6>Contenu du programme</h6> 
                        <h2>Chapitre 1</h2>
                        <p></p>
                        <h2>Chapitre 2</h2>
                        <p></p>
                        <h2>Chapitre 3</h2>
                        <p></p>
                    </div>
                </div>

            </div>

        
            </section>
        </div>
    )
          
    }
}

Course.propTypes = {
    getCourseById: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    course: state.course
});

export default connect(mapStateToProps, { getCourseById }) (Course);