import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import React from 'react';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarWrapper}>
          <a href='/'>
            <i className={styles.icon + ' fa fa-tasks'}></i>
          </a>
          <ul>
            <li className={styles.links}>
              <a href='/'>Home</a>
            </li>
            <li className={styles.links}>
              <a href='/favorite'>Favorite</a>
            </li>
            <li className={styles.links}>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
