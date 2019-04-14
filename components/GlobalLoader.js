import React from 'react';
import {
  Spinner,
  View
} from 'native-base';

import style from '../style';

const GlobalLoader = () => {
  return (
    <View style={style.globalLoader.root}>
      <Spinner />
    </View>
  );
};

export default GlobalLoader;
