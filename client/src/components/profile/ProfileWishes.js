import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProfileWishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      try: null
    }
  }

  render() {
    return (
      <div className="row profile-wishlist-row">
        <div className="col-md-3">
          <img className="card-img-top" src="http://eticeo.com/wp-content/uploads/2016/11/SERVICE-FORMATION-2-1030x617.jpg" alt="Card cap1" />
        </div>
        <div className="col-md-6">
          <h5>{this.props.title}</h5>
        </div>
        <div className="col-md-3">
          <Link to={`/course/${this.props._id}`} className="primary-btn btn-primary">Voir</Link>
        </div>
        <hr/>
      </div>
    )
  }
}

export default ProfileWishes;
