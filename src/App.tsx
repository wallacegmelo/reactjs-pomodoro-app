import React from 'react';

import GlobalStyles from './global/GlobalStyles';

import { Header, ViewFinder } from './components'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ViewFinder />
    </>
  );
}

export default App;
