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
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

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
                              <h4 className="title">{course.title}</h4>
                            </a>
                            <br />
                          <p className="description">
                          <span>{course.categories}</span>
                          </p>
                          <img src={star} alt=""/><img src={star} alt=""/><img src={star} alt=""/><img src={star} alt=""/><img src={star} alt=""/>
                        </div>
                        <br/>
                        <hr/>
                        <br/>
                        <p className="description text-center">
                        Etiam dignissim urna eget malesuada tincidunt. Sed pellentesque nibh non placerat pulvinar. Suspendisse sit amet augue quis felis ornare ultrices eu a lorem. Sed quis lectus in mauris fringilla scelerisque. Nulla faucibus tellus vitae nisi scelerisque, at sollicitudin nisi malesuada. Vestibulum at erat a felis ultrices ultricies vel eget lacus.
                          </p>
                      
                            <div className="row module-info text-center">
                                 <div className="col-12">
                                    <span>10 janvier 2019</span>
                                </div>
                            </div>
                            <br />
                            <div className="row module-info text-center">
                                 <div className="col-12">
                                    <span>5 jours</span>
                                </div>
                            </div>
                            <br />
                            <div className="row module-info text-center">
                                 <div className="col-12">
                                    <span>Présentiel</span>
                                </div>
                            </div>
                            <br />
                            <div className="description text-center">
                                <p><strong>Prérequis :</strong> </p>
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
                                <label>Chapitre 1</label>
                                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

</p>
                              </div>
                            </div>

                           <div className="row">
                              <div className="col-md-10 pr-1">
                                <label>Chapitre 2</label>
                                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

</p>
                              </div>
                            </div>

                           <div className="row">
                              <div className="col-md-10 pr-1">
                                <label>Chapitre 3</label>
                                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

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
    getCourseById: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    course: state.course
});

export default connect(mapStateToProps, { getCourseById }) (Course);