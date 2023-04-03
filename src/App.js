import React from 'react';
import './App.css';
import Login from './app/components/Login';
import Dashboard from './app/components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      

      <Route path="/">
      <h1 className='mt-5'>
          BIENVENIDO!!!  CONOCE LOS MEJORES LUGARES PARA COMER, DIVERTIRTE Y MUCHAS COSAS MAS
      </h1>
      <Login/>
      </Route>
      
      <Route  path="/dashboard">
         <Dashboard/>
      </Route>
     
    </div>
    </Router>
  );
}

export default App;
