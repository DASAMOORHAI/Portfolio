import React from 'react';
import { Route } from 'react-router-dom';
import  { Provider } from 'react-redux';
import store from '../store.js';
import LandingPage from '../components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </div>
    </Provider>
  );
}

export default App;
