import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import User from './components/User';
import AddCat from './components/AddCat';
import AddDog from './components/AddDog';
import EditCat from './components/EditCat';
import EditDog from './components/EditDog';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
        <Route path="/cats" component={Cats} />
        <Route path="/dogs" component={Dogs} />
        <Route path="/add-cat" component={AddCat} />
        <Route path="/add-dog" component={AddDog} />
        <Route path="/edit-cat/:id" component={EditCat} />
        <Route path="/edit-dog/:id" component={EditDog} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;