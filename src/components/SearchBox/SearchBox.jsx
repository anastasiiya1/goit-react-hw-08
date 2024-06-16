import { useDispatch, useSelector } from 'react-redux';
import { changeFilter} from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors'
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const handleSearchChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.form}>
      <label className={css.label} htmlFor="userQuery">
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        name="userQuery"
        id="userQuery"
        value={search}
        onChange={handleSearchChange}
        placeholder="Enter a name to search..."
      />
    </div>
  );
}

export default SearchBox;