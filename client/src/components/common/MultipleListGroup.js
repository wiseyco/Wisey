import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const MultipleListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options,
  disabled
}) => {

  const selectOptions = options.map(option => 
    <option key={option.label} value={option.value}>
      {option.label}
    </option>  
  )

  return (
    <div className='form-group'>
      <select
        multiple
        className={classnames('form-control', {
          'is-invalid': error
        })}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {selectOptions}
      </select>
      {info && <small className='form-text text-muted' >{info}</small>}
      {error && <div className='invalid-feedback' >{error}</div>}
    </div>
  );
};

MultipleListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default MultipleListGroup;