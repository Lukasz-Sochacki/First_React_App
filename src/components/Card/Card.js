import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavorite = (event) => {
    event.preventDefault();
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button className={styles.favoriteButton} onClick={handleFavorite}>
        <i className={clsx(isFavorite ? 'fa fa-star' : 'fa fa-star-o')} />
      </button>
    </li>
  );
};

export default Card;
