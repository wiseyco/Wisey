import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import axios from 'axios';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Spinner from '../common/spinner';
import { getCourses } from '../../actions/courseActions';
import CourseCard from './CourseCard';
import Filter from './Filter';

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadedCourse: [],
            loading: false
        }
    }

    // componentWillMount () {
    //     const { filters } = this.props;
    //     this.props.handleGetCourses(filters);

    // }

    // componentWillReceiveProps = nextProps => {
    //     if(nextProps.course.course) {
    //         const loadedCourse = nextProps.course.course;
    //         this.setState({loadedCourse: loadedCourse})
    //     }
    // }

    componentWillMount() {
        const { filters } = this.props;
    
        this.handleGetCourses(filters);
      }
    
      componentWillReceiveProps(nextProps) {

        const { filters: nextFilters } = nextProps;

        if(nextProps.course.course) {
            const loadedCourse = nextProps.course.course;
            this.setState({loadedCourse: loadedCourse})       
        }
            
        if (nextFilters !== this.props.filters) {
          this.handleGetCourses(nextFilters);
        }
      }
    
      handleGetCourses = (filters = this.props.filters) => {
        this.setState({ loading: true });
        this.props.getCourses(filters, () => {
          this.setState({ loading: false });
        });
      }


    render () {

        const { loadedCourse } = this.state;
        let courseCards;

            if (loadedCourse) {
                courseCards = loadedCourse.map(course => (
                    <CourseCard
                    key={course._id}
                    course={course}
                    title={course.title}
                    categories={course.categories[0]}
                    // duration={course.duration[0]}
                    // ofDays={course.duration[1]}
                    
                    />
                ))
            } 
            else {
                courseCards = <h4>No course found...</h4>
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
                                        {/* <div className="col-md-3">
                                        <button type="button" className="btn btn-outline-primary search-btn">Marketing</button>
                                        </div>
                                        <div className="col-md-3">
                                        <button type="button" className="btn btn-outline-secondary search-btn">Management</button>
                                        </div>
                                        <div className="col-md-3">
                                        <button type="button" className="btn btn-outline-success search-btn">Numérique</button>
                                        </div> */}
                                        <Filter />
                                    </div>
                                </div>
                                <br />
                              
                                </div>

                             </div>
                                <div className="container">
                                    <div className="row module-search-row">
                                            {courseCards}
                                    </div>
                                 </div>
                    </section>
        </div>
    )
    }
}

Courses.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    course: state.course,
    filters: state.filters.items,
})

export default connect (mapStateToProps,
    { getCourses }
    )
    (Courses);