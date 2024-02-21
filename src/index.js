import React from 'react';
import ReactDOM from 'react-dom';

import Name  from './components/name';
import Lorem from './components/practice';
import Nav from "./components/nav";
import About from './components/About';
import Footer from "./components/footer";
ReactDOM.render(
  <div>
        <Nav/>
        <div className='trans' style={{display:"flex",flexDirection:"column",width:"100%"}}>
              <div style={{height:"550px"}}>
              <Name/>
              </div>
              <div>
              <Lorem/>
              </div>
        </div>
        <div>
        <About/>
        </div>
        <div>
        <Footer/>
        </div>
  </div>
  ,document.querySelector(".root"))

