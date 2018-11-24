import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import star from '../../img/icons/star.png';
import Moment from 'react-moment';
import { addToWishList, removeFromWishList } from '../../actions/courseActions';
import { connect } from 'react-redux';


class CourseCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    }
  }

  componentDidMount() {
    const { course } = this.props;
    this.findUserLikes(course.likes);
  }

  onLikeClick = id => {
    this.props.addToWishList(id);
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  onDislikeClick = id => {
    this.props.removeFromWishList(id);
    this.setState({
      isLiked: !this.state.isLiked
    })
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

  render() {

    const { course } = this.props;
    let wish;

    if (this.state.isLiked === true) {
      wish = (
        <span onClick={() => this.onDislikeClick(course._id)} className="wish-card" title="Supprimer de ma liste de souhaits">
          <i className="fas fa-heart"></i>
        </span>
      );

    } else {
      wish = (
        <span onClick={() => this.onLikeClick(course._id)} className="wish-card" title="Ajouter à ma liste de souhaits">
          <i className="far fa-heart"></i>
        </span>
      );
    }
 

    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
        {wish}
        <div className="box">
          <h2>{this.props.title} <br /><br /><span>{this.props.categories}</span></h2>
          <span><Moment format="DD/MM/YYYY">{this.props.date}</Moment></span>
          <br />
          <br />
          <img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />
          <br />
          <br />
          <div className="course-card-desc">
          <p>{this.props.desc}</p>
          </div>
          <hr />
          <Link to={`/course/${course._id}`}><h4>Voir la formation</h4></Link>
          <span>
          </span>
        </div>
      </div>
    </div>
    );
  }
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addToWishList: PropTypes.func.isRequired,
  removeFromWishList: PropTypes.func.isRequired,  
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { addToWishList, removeFromWishList }
)(CourseCard);
