import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getCourses } from '../../actions/profileActions';
import CourseCard from './CourseCard';
import Navbar from '../layout/Navbar';
import { getCourses } from '../../actions/profileActions';


class Courses extends Component {

    componentDidMount () {
        this.props.getCourses();
    }

    render () {

        const { courses } = this.props.course;
        let courseItems;
        
            if (courses.length > 0) {
                
                courseItems = courses.map(profile => (
                    <CourseCard key={course._id} course={course} />
                ))
                
            } else {
                courseItems = <h4>No courses found...</h4>
            }
    
    return (
        <div> 
            <Navbar />
                <section className="section profile-section">
                             <div className="search-header-bg">
                                <div className="container search-header">
                                    <div className="text-center">
                                        <h1 className="text-center">Découvrez toutes nos formations</h1>
                                        <h5 className="text-center">Devenez expert sur un métier passionnant et décrochez un emploi. Garanti.
                                        </h5>
                                    </div>
                                    <br />
                                    <div className="container search-items-container">
                                    <div className="row search-items-row justify-content-between align-items-center">
                                        <div className="col-md-3">
                                        <button type="button" className="btn btn-outline-primary search-btn">Marketing</button>
                                        </div>
                                        <div className="col-md-3">
                                        <button type="button" className="btn btn-outline-secondary search-btn">Management</button>
                                        </div>
                                        <div className="col-md-3">
                                        <button type="button" className="btn btn-outline-success search-btn">Numérique</button>
                                        </div>
                                        
                                    </div>
                                </div>
                                <br />
                                </div>
                             </div>
                                <div className="container">
                                    <div className="row module-search-row">
                                        <div className="col-md-4">
                                            {courseItems}
                                        </div>
                                    </div>
                                </div>
                </section>
        </div>
    )
    }
}
Courses.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    course: state.course
})

export default connect (mapStateToProps, { getCourses }) (Courses);