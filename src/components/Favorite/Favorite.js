import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return <PageTitle>No favorite cards...</PageTitle>;
  }

  return (
    <Container>
      <PageTitle>Favorite Cards:</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </ul>
      </article>
    </Container>
  );
};

export default Favorite;
