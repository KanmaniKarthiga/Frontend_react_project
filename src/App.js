import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import LinkCompo from './Components/LinkCompo'
import AllStore from './Components/Datastore/AllStore'


function App() {
  return (
    <>
      
      <BrowserRouter>
        <LinkCompo/>
        <AllStore/>
      </BrowserRouter>
    </>
  );
  
}

export default App;
