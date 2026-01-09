import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateString, getSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();

  const searchStringInput = useSelector(getSearchString);
  const [searchString, setSearchString] = useState(searchStringInput);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateString(searchString));
    setSearchString('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        placeholder='Search...'
        type='text'
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
