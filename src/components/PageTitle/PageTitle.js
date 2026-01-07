import styles from './PageTitle.module.scss';
import React from 'react';

const PageTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default PageTitle;
