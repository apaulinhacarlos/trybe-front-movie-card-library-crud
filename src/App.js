import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MovieList } />
      <Route
        path="/movies/:id"
        render={ (props) => <MovieDetails { ...props } /> }
      />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="/" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
