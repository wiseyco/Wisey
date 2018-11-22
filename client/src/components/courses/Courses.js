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
                    <div className="content">
                    <div className="container-fluid">
                        <div className="container search-header">
                            <div className="text-center">
                               <h1 className="text-center">Découvrez toutes nos formations</h1>
                             </div>
                        </div>  
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-user text-center">
                                <br />
                                <h6>Filtres</h6>
                                <br />
                                <Filter />
                            </div>
                        </div>

                    <div className="col-md-8">
                        <div className="row module-search-row">
                            {courseCards}
                        </div>
                    </div>  
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