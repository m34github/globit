import { css } from 'emotion';

const waiter = {
  main: css(`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `)
};

const footer = {
  bottomNavigation: css(`
    position: fixed;
    bottom: 0;
    width: 100vw;
  `)
};

const newsList = {
  main: css(`
    padding: 56px 0.5rem 56px 0.5rem;
  `),
  cardSection: css(`
    padding: 0.5rem;
  `),
  card: css(`
    display: flex;
    justify-content: space-between;
    height: 20vh;
  `),
  cardContent: css(`
    width: 11rem;
  `),
  cardMedia: css(`
    width: 20vh;
  `)
};

const newsDetail = {
  main: css(`
    padding: 56px 0 56px 0;
  `)
};

export default {
  waiter,
  footer,
  newsList,
  newsDetail
};
