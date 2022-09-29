import PropTypes from 'prop-types';

import { StyledFilter } from './Filter.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <StyledFilter htmlFor="">
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </StyledFilter>
    </>
  );
};

Filter.propsTypes = {
  filter: PropTypes.string,
};

export default Filter;
