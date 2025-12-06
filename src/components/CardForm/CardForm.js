import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.action({ title: title }, props.columnId);
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
