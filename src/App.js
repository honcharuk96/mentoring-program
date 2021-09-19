import React from 'react';
import './App.css';
import MyHeader from './HelloText';
import Toogle from './Toogle/ToogleComponent';
import Search from './Search/Search'



function App() {
  return (
    <div className="App">
        <MyHeader/>
        <Toogle/>
        <Search/>
    </div>
  );
}

export default App;
