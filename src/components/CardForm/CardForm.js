import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCard({ title, columnId: props.columnId }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button>Add Card</Button>
    </form>
  );
};

export default CardForm;
