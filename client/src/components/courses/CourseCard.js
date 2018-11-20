import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import isEmpty from '../../validation/is-empty';

class CourseCard extends Component {
  render() {
    // const { course } = this.props;

    return (
        <div className="card">
            <div className="box">
                    <h2>Formation React Native<br /><br /><span>Développement</span></h2>
                    <img src="img/icons/calendar_small.png" alt="" />&nbsp;<span>10 janvier 2019</span>
                <br />
                <br />
                    <img src="img/icons/star_small.png" alt="" />&nbsp;<span>4,6 / 5</span>
                <br />
                <br />
                    <p>
                        Définissez la stratégie informatique d'une organisation et dirigez une équipe technique dans le développement.
                     </p>
                <hr />
                    <a href="/"><h4>Voir la formation</h4></a>
                    <span>
                    </span>
            </div>
        </div>
    );
  }
}

// CourseItem.propTypes = {
//   course: PropTypes.object.isRequired
// };

export default CourseCard;
