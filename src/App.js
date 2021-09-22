import React, { Component } from 'react'
import Home from './components/home/Home'
import Login from './components/Login/Login'
import Movies from './components/Movies/Movies'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'
import Register from './components/Register/Register'
import {Redirect,Route,Switch} from "react-router-dom"
import telv from './components/Tv/telv'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
       <Switch>
         <ProtectedRoutes path="/home" component={Home}/>
         <ProtectedRoutes path="/Movies" component={Movies}/>
         <ProtectedRoutes path="/Tv" component={telv}/>
         <ProtectedRoutes path="/home" component={Home}/>

         <Route path="/Login" component={Login}/>
         <Route path="/Register" component={Register}/>
         <Redirect exact from="/" to="/Register"/>
         <Route path="*" component={NotFound}/>
         
       </Switch>
      </div>
    )
  }
}
