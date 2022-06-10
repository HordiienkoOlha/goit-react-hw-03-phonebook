import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ changeFilter }) => {
  return (
    <>
      <label className={s.label}>
        <h2>Find contacts by name </h2>
        <input type="text" placeholder="Search..." onChange={changeFilter} />
      </label>
    </>
  );
};

Filter.propTypes = {
  onSearch: PropTypes.func,
};

export default Filter;
