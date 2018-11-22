import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { updateFilters } from '../../actions/courseActions';

import Checkbox from './Checkbox';

const availableCourses = [
  'Marketing',
  'Communication',
  'Management',
  'Organisation',
  'RH',
  'Comptabilité',
  'Finance',
  'Informatique',
  'Digital',
  'Langues'
];

class Filter extends Component {

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
  } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  createCheckbox = (label) => (

    <Checkbox
        classes="filters-available-size text-center"
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