import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { updateFilters } from '../../actions/courseActions';

import Checkbox from './Checkbox';

const availableCourses = [
  'Marketing',
  'Management',
  'Numérique',
  'Développement',
  'Stratégie',
  'Droit'
];

class Filter extends Component {

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
      console.log("ON FILTRE")
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
      console.log("ON DELETE")
  } else {
      this.selectedCheckboxes.add(label);
      console.log("ON ADD")
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  createCheckbox = (label) => (
    <Checkbox
        classes="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
    />
  )

  createCheckboxes = () => (
    availableCourses.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="filters">
        {this.createCheckboxes()}
      </div>
    );
  }
}

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array,
}

const mapStateToProps = state => ({
  filters: state.items,
})

export default connect(mapStateToProps, { updateFilters })(Filter);