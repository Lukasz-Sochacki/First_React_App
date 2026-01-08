import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addList({ title, description }));
    setValue('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label>Title:</label>
      <TextInput
        value={title}
        onChange={(event) => setValue(event.target.value)}
      />
      <label>Description:</label>
      <TextInput
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
