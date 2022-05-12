import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
export default class App extends Component {
  
  render() {
    return (
      < div >
        <BrowserRouter>
        <Navbar/>
        
        <Routes>
        <Route exact  path="/" element={<News key ="general" pagesize={9} country="in" category="general"/>}></Route>
        <Route exact  path="/entertainment" element={<News key ="entertainment" pagesize={9} country="in" category="entertainment"/>}></Route>
        <Route exact  path="/bussiness" element={<News key ="bussiness" pagesize={9} country="in" category="bussiness"/>}></Route>
        <Route exact  path="/health" element={<News key ="health" pagesize={9} country="in" category="health"/>}></Route>
        <Route exact  path="/science" element={<News key ="science" pagesize={9} country="in" category="science"/>}></Route>
        <Route exact  path="/sports" element={<News key ="sports" pagesize={9} country="in" category="sports"/>}></Route>
        <Route exact  path="/technology" element={<News key ="technology" pagesize={9} country="in" category="technology"/>}>
        </Route>
        </Routes>
        
        </BrowserRouter>        
      </div>
      
    )
  }
}
