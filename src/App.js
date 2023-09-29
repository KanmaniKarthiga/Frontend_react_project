import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import LinkCompo from './Components/LinkCompo'
import AllStore from './Components/Datastore/AllStore'
import FooterCompo from './Components/Navbar/Footer'


function App() {
  return (
    <>
      
      <BrowserRouter>
        <LinkCompo/>
        <AllStore/>
        <FooterCompo/>
      </BrowserRouter>
      
    </>
  );
  
}

export default App;
