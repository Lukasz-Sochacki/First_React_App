import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = (props) => {
  const [title, setValue] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.action({ title: title, icon: icon });
    setValue('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit}>
      Title:
      <input
        type='text'
        value={title}
        onChange={(event) => setValue(event.target.value)}
      />
      Icon:
      <input
        type='text'
        value={icon}
        onChange={(event) => setIcon(event.target.value)}
      />
      <button>Add column</button>
    </form>
  );
};

export default ColumnForm;
