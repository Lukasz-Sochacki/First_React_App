import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();

  const [title, setValue] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setValue('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title:</label>
      <TextInput
        value={title}
        onChange={(event) => setValue(event.target.value)}
      />
      <label>Icon:</label>
      <TextInput
        value={icon}
        onChange={(event) => setIcon(event.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
