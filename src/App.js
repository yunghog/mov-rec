import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from  './pages/home'
import MovieDetails  from  './pages/movie-details'
import PersonDetails  from  './pages/person-details'
function App() {
  return (
    <div>
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/movie/:movieId" component={MovieDetails}/>
      <Route path="/people/:peopleId" component={PersonDetails}/>
    </Router>
    </div>
  );
}

export default App;
