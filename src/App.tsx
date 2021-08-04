import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components';
import { Products, Home } from './pages';

function App() {
  return (
    <div className="container">
      <Header />

      <Route path="/" component={Home} exact />
      <Route path="/:id" component={Products} />
    </div>
  );
}

export default App;
