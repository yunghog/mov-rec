import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Home from  './pages/home'
import MovieDetails  from  './pages/movie-details'
import ShowDetails  from  './pages/show-details'
import PersonDetails  from  './pages/person-details'
import SearchResults  from  './pages/search-results'
import About from './pages/about'
function App() {
  return (
    <div>
    <div className="content-wrap">
    <Header/>
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route path="/movie/:movieId" component={MovieDetails}/>
      <Route path="/show/:showId" component={ShowDetails}/>
      <Route path="/people/:peopleId" component={PersonDetails}/>
      <Route path="/search/:query" component={SearchResults}/>
    </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
