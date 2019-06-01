import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Icon
} from '@material-ui/core';

import styles from '../styles';

class Footer extends React.Component {
  render() {
    return (
      <>
        <BottomNavigation
          className={styles.footer.bottomNavigation}
          value={this.props.value}
          showLabels
        >
          <BottomNavigationAction
            label="News"
            value="news"
            icon={<Icon>description</Icon>}
            onClick={() => {
              location.href = '/news/list';
            }}
          />
          <BottomNavigationAction
            label="Bookmark"
            value="bookmark"
            icon={<Icon>bookmark</Icon>}
          />
          <BottomNavigationAction
            label="Quiz"
            value="quiz"
            icon={<Icon>spellcheck</Icon>}
          />
        </BottomNavigation>
      </>
    );
  }
}

export default Footer;
