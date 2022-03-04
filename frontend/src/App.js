import React from 'react';
import './App.scss';
import Contactbooks from './Pages/ContactbooksComponent/views';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AddContactPage from './Pages/AddContact/view';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header/>
      <Switch>
            <Route exact path="/" component={Contactbooks}/>  
            <Route exact path="/add" component={AddContactPage}/>
      </Switch>
      </div>
    </Router>  
  );  
}

export default App;
