import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import CardsArray from  '../components/cards-array'
import CardsArray2 from  '../components/cards-array-2'
import {FaLink} from 'react-icons/fa'
class MovieDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      movieId: '',
      thisMovie: '',
      similarMovies:  [],
      cast: ''
    }
  }
  componentDidMount(){
    this.setState({
      movieId:this.props.match.params.movieId
    })
    this.getMovieDetails(this.props.match.params.movieId);
    this.getSimilarMovies(this.props.match.params.movieId);
    this.getCredits(this.props.match.params.movieId);
  }
  getMovieDetails = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        thisMovie: res.data
      })
    }).catch(error=>{
      let url2="https://api.themoviedb.org/3/tv/"+id+"?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US".replace(" ","");
      Axios.get(url2).then(res=>{
        this.setState({
          thisMovie: res.data
        })
      })
    })
  }
  getCredits = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        cast: res.data
      })
    }).catch(error =>{
      url= "https://api.themoviedb.org/3/tv/"+id+"/credits?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US".replace(" ","");
      Axios.get(url).then(res=>{
        this.setState({
          cast: res.data
        })
      })
    })
  }
  getSimilarMovies = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US&page=1".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        similarMovies: res.data.results,
      })
    }).catch(error =>{
      url= "https://api.themoviedb.org/3/tv/"+id+"/similar?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US".replace(" ","");
      Axios.get(url).then(res=>{
        this.setState({
          similarMovies: res.data.results
        })
      })
    })
  }
  componentDidUpdate(){
    if(this.state.movieId != this.props.match.params.movieId){
      window.location.reload();
    }
  }
  render(){
    const movie = this.state.thisMovie;
    const similar = this.state.similarMovies;
    const cast = this.state.cast.cast;
    return(
      <div>
        <Container fluid>
          <Row noGutters>
            <Col>
              <div className="movie-backdrop">
                <div  className="movie-backdrop-title">
                  <h2>{movie.title}</h2>
                  {movie.name && <h2>{movie.name}</h2>}
                </div>
                <div className="movie-backdrop-image">
                  <img  src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path}/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
        <Container>
          <Row>
            <Col md={9}>
              <div className="movie-details">
                <h1>{movie.title}</h1>
                {movie.name && <h1>{movie.name}</h1>}
                {movie.tagline && <h5>{movie.tagline}</h5>}
                {movie.genres && movie.genres.map(i=>
                  <a className="genre"  key={i.id}>{i.name}</a>
                )}
                <p>{movie.overview}</p>
                  <div className="highlight1">
                    {movie.release_date && <li>Release : {movie.release_date}</li>}
                    <li>TMDB Rating : {movie.vote_average}</li>
                    {movie.production_companies && <li>Production : { movie.production_companies.map(comp=>
                        <li key={comp.id}>{comp.name},</li>
                      )}</li>}
                    <li style={{textTransform:"uppercase"}}>Language : {movie.original_language}</li>
                    {movie.budget>0 && <li>Budget : ${movie.budget/100}</li> }
                    {movie.created_by &&
                      <li>
                        Created by :
                        {movie.created_by.map(c=>
                          <li key={c.id}>{c.name},</li>
                        )
                        }
                      </li>
                    }
                    <li><a href={movie.homepage} target="_blank"><FaLink/> Visit homepage</a></li>
                  </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="movie-poster">
                <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path}/>
              </div>
            </Col>
          </Row>
          <br/>
          <CardsArray2 list={cast} title="Movie Cast"/>
          <br/>
          {similar.length>0 &&<CardsArray list={similar} title="Similar Movies and shows"/>}
        </Container>
      </div>

    )
  }
}
export default MovieDetails
