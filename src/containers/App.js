import React from 'react';
import { Route } from 'react-router-dom';
import  { Provider } from 'react-redux';
import store from '../store.js';
import Home from '../components/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path='/'>
          <Home />
        </Route>
      </div>
    </Provider>
  );
}

export default App;
