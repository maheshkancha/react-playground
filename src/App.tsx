import React from 'react';
import Counter from './components/Counter/Counter';
import './App.css';
import Scroll from './components/Scroll';

const App = () => {
  return (
    <div className='app-container'>
      <Counter />
      <Scroll />
    </div>
  );
};

export default App;
