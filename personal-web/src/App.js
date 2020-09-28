import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'; 
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from './Components'
import Resume from './Components/Resume'
import Portofolio from './Components/Portofolio';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    <CssBaseline />
    <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/portofolio" component={Portofolio} />
    <Route path="/resume"  component={Resume} />
    <Route exact path="/"  component={Home}/>
    </Switch>
    </>
    
  );
}

export default App;
