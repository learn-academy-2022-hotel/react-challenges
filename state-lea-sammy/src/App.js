import React, {useState} from 'react';
import SquareBox from './components/squareBox';

const App = () => {
  return (
    <>
      <h1>Color Box</h1>
      <h3>Color Box 1</h3>
      < SquareBox />
      <h3>Color Box 2</h3>
      < SquareBox />
      <h3>Color Box 3</h3>
      < SquareBox />
    </>
  )
}

export default App;
