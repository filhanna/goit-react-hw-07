import css from './Fiender.module.css';
import PropTypes from 'prop-types';
import { updateFilter } from '../../redux/contactSlice';
import { useDispatch } from 'react-redux';
export const Fiender = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Search contacts by name"
      value={value}
      onChange={event => {
        dispatch(updateFilter(event.target.value));
      }}
      className={css.formInput}
    />
  );
};
Fiender.proptype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
