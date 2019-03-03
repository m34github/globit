import React from 'react';
import { Container, Spinner } from 'native-base';

const Loader = () => {
  return (
    <Container style={style.loader}>
      <Spinner />
    </Container>
  );
};

const style = {
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Loader;
