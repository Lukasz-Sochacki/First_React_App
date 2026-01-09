import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavorite = (event) => {
    event.preventDefault();
    dispatch(toggleCardFavorite(id));
  };

  const handleRemove = (event) => {
    event.preventDefault();
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <div className={styles.buttons}>
        <button className={styles.favoriteButton} onClick={handleFavorite}>
          <i className={clsx(isFavorite ? 'fa fa-star' : 'fa fa-star-o')} />
        </button>
        <button className={styles.removeButton} onClick={handleRemove}>
          <i className={'fa fa-trash'} />
        </button>
      </div>
    </li>
  );
};

export default Card;
