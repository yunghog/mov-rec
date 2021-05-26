import React from 'react'
import Axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
// components
import SearchCon from  '../components/search-con'
import CardsArray from  '../components/cards-array'
import Splash from  '../components/splash'


class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      trendingMovies: [],
      trendingShows: [],
      latestMovies: [],
      isLoading: false,
      key : process.env.REACT_APP_TMDB_API_KEY
    }
  }
  getTrendingMovies = () => {
      Axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key="+this.state.key).then(res=>{
        this.setState({
          trendingMovies:res.data.results,
        })
      })
  }
  getTrendingShows = () => {
      Axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key="+this.state.key).then(res=>{
        this.setState({
          trendingShows:res.data.results
        })
      })
  }
  getLatestMovies = () => {
      Axios.get("https://api.themoviedb.org/3/movie/popular?api_key="+this.state.key+"&language=en-US&page=1").then(res=>{
        this.setState({
          latestMovies:res.data.results
        })
      })
  }
  setLoad=()=>{
    this.setState({
      isLoading: false
    })
  }
  componentDidMount(){
    this.setState({
      isLoading: true
    })
    setTimeout(this.setLoad,3000);
    this.getTrendingMovies();
    this.getTrendingShows();
    this.getLatestMovies();
    }
  render(){
    return(
      <section data-aos="fade-up">
        {this.state.isLoading && <Splash/>}
        {!this.state.isLoading && <div style={{paddingBottom:'50px'}}>
          <Container fluid>
            <Row noGutters>
              <Col>
                <SearchCon/>
              </Col>
            </Row>
          </Container>
          <br/>
          <CardsArray list={this.state.trendingMovies} title="Trending movies"/>
          <br/>
          <CardsArray list={this.state.latestMovies} title="Popular Movies and  Shows" type="movie"/>
          <br/>
          <CardsArray list={this.state.trendingShows} title="Trending shows"/>
        </div>}
      </section>
    )
  }
}
export default Home
