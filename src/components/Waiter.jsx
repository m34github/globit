import React from 'react';
import { CircularProgress } from '@material-ui/core';

import styles from '../styles';

const Waiter = () => (
  <>
    <section className={styles.waiter.main}>
      <CircularProgress size={80} />
    </section>
  </>
);

export default Waiter;
