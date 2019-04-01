import React from 'react';

import GlobalStyle from '../shared/styles/GlobalStyle';

import Timeline from './Timeline';

import Main from './Main';

const App = () => (
  <>
    <Main>
      <Timeline />
    </Main>
    <GlobalStyle />
  </>
);

export default App;
