import React, { Component } from 'react';
import NavbarLanding from './NavbarLanding';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLatestCourses } from '../../actions/courseActions';
import Spinner from '../common/Spinner';
import CourseLandingItem from '../courses/CourseLandingItem';

class Landing extends Component {

	constructor(props) {
        super(props);
        this.state = {
            loadedCourse: [],
            loading: false
        }
	}

	componentWillMount() {    
		this.props.getLatestCourses();
		console.log(this.props)
	  }
	componentWillReceiveProps(nextProps) {
        
    	const { course, loading } = nextProps;

        	if(nextProps.course.course) {
            	const loadedCourse = nextProps.course.course;
            	this.setState({loadedCourse: loadedCourse})       
			}
		}
	
    render() {

		const { loadedCourse, loading} = this.state;
		let courseLandingItem;
		console.log("STATE RENDER", this.state)
        if (loadedCourse === null || loading) {
            return (<Spinner />);
		  }
		else {
			courseLandingItem = loadedCourse.map(course => (
				<CourseLandingItem
				key={course._id}
				id={course._id}
				title={course.title}
				desc={course.desc}
				date={course.nextSessions[0].from}
				/>
			))
		}
    
    return (
		<div>
		<NavbarLanding />
        <div>
        {/* // Start Banner Area */}
		<section className= "banner-area relative">
			<div className="overlay overlay-bg"></div>
			<div className="container">
				<div className="row fullscreen align-items-center">
					<div className="col-lg-8">
						<div className="banner-content text-center">
							<h1 className="text-uppercase text-white">La plateforme de la formation professionnelle</h1>
							<br />
							<p className="text-uppercase text-white">Nous vous proposons les meilleures formations numériques pour accompagner votre carrière.</p>
							<Link class="primary-btn banner-btn" to="/courses">Je trouve ma formation</Link>

						</div>
					</div>
				</div>
			</div>
		</section>
		{/* // End Banner Area */}
	    {/* // Start Publish Area */}
		<section id="blog" className="section-full">
			<div className="container">
				<p className="text-uppercase"><strong>Dernières formations proposées</strong></p>
				<div className="row">
					{courseLandingItem}
				</div>
            </div>
		</section>

		{/* // End Publish Area */}
		{/* // Start shuffle Area */}
		<section id="protfolio" className="section-full">
			<div className="container">

			<p className="text-uppercase"><strong>Nos catégories</strong></p>

			<div id="filter-content" className="row no-gutters mt-70">
				<div className="mix category-1 col-lg-3 col-md-4 col-sm-6 single-filter-content content-1" data-myorder="1">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Developpement</h5>
					</div>
				</div>
				<div className="mix category-1 category-5 category-3 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-2" data-myorder="2">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Business</h5>
					</div>
				</div>
				<div className="mix category-1 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-3" data-myorder="3">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Informatique et Logiciels</h5>
					</div>
				</div>
				<div className="mix category-2 category-3 category-6 col-lg-3 col-md-4 col-sm-6 single-filter-content content-4" data-myorder="4">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Marketing</h5>
					</div>
				</div>
				<div className="mix category-1 category-4 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-5" data-myorder="5">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Numérique</h5>
					</div>
				</div>
				<div className="mix category-1 category-3 category-5 category-6 col-lg-3 col-md-4 col-sm-6 single-filter-content content-6" data-myorder="6">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Multimédia</h5>
					</div>
				</div>
				<div className="mix category-2 category-4 category-3 col-lg-3 col-md-4 col-sm-6 single-filter-content content-7" data-myorder="7">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Developpement Personnel</h5>
					</div>
				</div>
				<div className="mix category-2 category-6 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-8" data-myorder="8">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Formation</h5>
					</div>
				</div>
			</div>
		</div>
		</section>
		{/* // End shuffle Area */}
		{/* // Start Digital Studio */}
		<section className="section-full studio-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="studio-content">
							<p className="text-uppercase text-white">Professionnels</p>
							<h2 className="h1 text-white text-uppercase mb-20">La plateforme privilégiée <br /> des organismes de la formation</h2>
							<p className="text-white mb-30">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

								</p>
							<a href="/" className="primary-btn text-white d-inline-flex align-items-center">Proposer une formation <span class="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* // End Digital Studio */}
        </div>
		</div>
        
    )
    }
}

Landing.propTypes = {
    getLatestCourses: PropTypes.func.isRequired,
    course: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    course: state.course,
})

export default connect (mapStateToProps,
    { getLatestCourses }
    )
    (Landing);