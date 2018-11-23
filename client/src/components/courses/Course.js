import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../layout/Navbar';
import Spinner from '../common/Spinner';
import { getCourseById } from '../../actions/courseActions';
// import calendar from '../../img/icons/calendar.png';
// import controls from '../../img/icons/controls.png';
// import hourglass from '../../img/icons/hourglass.png';
// import training from '../../img/icons/training.png';
import star from '../../img/icons/star.png';
// import TextFieldGroup from '../common/TextFieldGroup';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import Moment from 'react-moment';
import { addToWishListOne, removeFromWishListOne} from '../../actions/courseActions';

class Course extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadedCourse: [],
      loading: true,
      isLiked: false
    }
  }

  componentDidMount () {
      if (this.props.match.params.id) {
          this.props.getCourseById(this.props.match.params.id)
      }
  }

  componentWillReceiveProps(nextProps) {

    const { course, loading } = nextProps;
    
    if(course.course) {
      const loadedCourse = course.course;
      this.setState({loadedCourse: loadedCourse, loading: false})       
    }
    this.findUserLikes(course.course.likes);
  }

  findUserLikes = likes => {

    const { auth } = this.props;

    if(likes.filter(like => like.user === auth.user.id).length > 0) {
      this.setState({
        isLiked: true
      })
    } else {
      this.setState({
        isLiked: false
      })
    }
  }

  onLikeClick = id => {
    this.props.addToWishListOne(id);
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  onDislikeClick = id => {
    console.log('id :', id);
    this.props.removeFromWishListOne(id);
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {

    const { loadedCourse, loading} = this.state;
    console.log('course ID:', loadedCourse._id);
    console.log('Course Object :', this.props.course);

    if (loading) {
      return (<Spinner />);
    }

    let wish;

    if (this.state.isLiked === true) {
      wish = (
        <span onClick={() => this.onDislikeClick(loadedCourse._id)} className="wish-one-course" title="Supprimer de ma liste de souhaits">
          <i className="fas fa-heart"></i>
        </span>
      );

    } else {
      wish = (
        <span onClick={() => this.onLikeClick(loadedCourse._id)} className="wish-one-course" title="Ajouter à ma liste de souhaits">
          <i className="far fa-heart"></i>
        </span>
      );
    }

  return (
      <div className="module-page"> 
          <Header />
          <section className="section module-section">
          <div className="content">
              <div className="container-fluid">
                <div className="row">

                  <div className="col-md-4">
                    <div className="card card-user">
                      <div className="card-image">
                        <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
                      </div>
                      <div className="card-body">
                        <div className="author">
                          <a href="/tc-profile">
                            <img className="avatar border-gray" src="https://image.freepik.com/icones-gratuites/logo-de-pomme_318-40184.jpg" alt="..." />
                            <h6>Pro Formation</h6>
                            <h4 className="title">{loadedCourse.title}</h4>
                          </a>
                          <br />
                        <p className="description">
                        <span>{loadedCourse.categories}</span>
                        </p>
                        <img src={star} alt=""/><img src={star} alt=""/><img src={star} alt=""/><img src={star} alt=""/><img src={star} alt=""/>
                      </div>
                      <br/>

                      {wish}
                      <hr/>
                      <br/>
                      <p className="description text-center">{loadedCourse.desc}</p>
                    
                          <div className="row module-info text-center">
                                <div className="col-12">
                                  <span><Moment format="DD/MM/YYYY">
                                    {loadedCourse.nextSessions[0].from}
                                  </Moment></span>
                              </div>
                          </div>
                          <br />
                          {/* <div className="row module-info text-center">
                                <div className="col-12">
                                  <span>5 jours</span>
                              </div>
                          </div>
                          <br /> */}
                          <div className="row module-info text-center">
                                <div className="col-12">
                                  <span>{loadedCourse.price} €</span>
                              </div>
                          </div>
                          <br />
                          <div className="description text-center">
                              <p><strong>Prérequis : </strong>
                              {loadedCourse.requirements}
                              </p>
                          </div>
                    </div>
                    <div className="button-container mr-auto ml-auto">
                      
                    </div>
                  </div>
                </div>

                  <div className="col-md-8">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title"><strong>Résumé de la formation</strong></h3>
                      </div>
                      <div className="card-body">

                        <form>

                          <div className="row">
                            <div className="col-md-10 pr-1">
                              <label>
                              {loadedCourse.syllabus[0].title}
                              </label>
                              <p>
                              {loadedCourse.syllabus[0].desc}
                              </p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-10 pr-1">
                              <label>
                              {loadedCourse.syllabus[1].title}
                              </label>
                              <p>
                              {loadedCourse.syllabus[1].desc}
                              </p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-10 pr-1">
                              <label>
                              {loadedCourse.syllabus[2].title}
                              </label>
                              <p>
                              {loadedCourse.syllabus[2].desc}
                              </p>
                            </div>
                          </div>
                          <input
                            type="submit"
                            className="btn btn-primary primary-btn"
                            value="Profil de l'organisme"/>

                          <div className="clearfix"></div>

                        </form>

                      </div>
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

Course.propTypes = {
  auth: PropTypes.object.isRequired,
  getCourseById: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  addToWishListOne: PropTypes.func.isRequired,
  removeFromWishListOne: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourseById, addToWishListOne, removeFromWishListOne }
)(Course);