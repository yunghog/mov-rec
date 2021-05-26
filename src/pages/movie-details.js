import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import CardsArray from  '../components/cards-array'
import VideoArray from  '../components/video-array'
import CardsArray2 from  '../components/cards-array-2'
import {Keys} from  '../components/api-key'
import {FaLink} from 'react-icons/fa'
import defaultBackdrop  from  '../assets/images/default-backdrop.jpg'
class MovieDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      movieId: '',
      thisMovie: '',
      similarMovies:  [],
      cast: '',
      videos: '',
      reviews: ''
    }
  }

  componentDidMount(){
    this.setState({
      movieId:this.props.match.params.movieId
    })
    this.getMovieDetails(this.props.match.params.movieId);
    this.getSimilarMovies(this.props.match.params.movieId);
    this.getCredits(this.props.match.params.movieId);
    this.getVideos(this.props.match.params.movieId);
  }
  getMovieDetails = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+Keys+"&language=en-US".replaceAll(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        thisMovie: res.data
      })
    })
  }
  getCredits = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+Keys+"&language=en-US".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        cast: res.data
      })
    })
  }
  getSimilarMovies = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"/similar?api_key="+Keys+"&language=en-US&page=1".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        similarMovies: res.data.results,
      })
    })
  }
  getVideos = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key="+Keys+"&language=en-US&page=1".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        videos: res.data,
      })
    })
  }
  getReviews = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"/reviews?api_key="+Keys+"&language=en-US&page=1".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        reviews: res.data,
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
    const videos = this.state.videos.results;
    return(
      <div>
        <Container fluid>
          <Row noGutters>
            <Col>
              <div className="movie-backdrop">
                <div  className="movie-backdrop-title">
                  <h2>{movie.title}</h2>
                </div>
                <div className="movie-backdrop-image">
                  {movie.backdrop_path && <img  src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path}/>}
                  {movie.backdrop_path==null && <img src={defaultBackdrop} /> }
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
                {movie.tagline && <h5>{movie.tagline}</h5>}
                <div style={{width:'100%', overflow:'hidden'}}>
                  {movie.genres && movie.genres.map(i=>
                    <a className="genre"  key={i.id}>{i.name}</a>
                  )}
                </div>
                <p>{movie.overview}</p>
                  <div className="highlight1">
                    <li>Release : {movie.release_date}</li>
                    <li>TMDB Rating : {movie.vote_average}</li>
                    {movie.production_companies && <li>Production : { movie.production_companies.map(comp=>
                        <li key={comp.id}>{comp.name},</li>
                      )}</li>}
                    <li style={{textTransform:"uppercase"}}>Language : {movie.original_language}</li>
                    {movie.budget>0 && <li>Budget : ${movie.budget/100}</li> }
                    {movie.homepage && <li><a href={movie.homepage} target="_blank"><FaLink/> Visit homepage</a></li>}
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
          <Row>
            <Col>
              {videos && videos.length>0 && <VideoArray title="Videos" list={videos}/> }
            </Col>
          </Row>
          <br/>
          <CardsArray2 list={cast} title="Movie Cast"/>
          <br/>
          {similar.length>0 &&<CardsArray list={similar} title="Similar Movies and shows" type="movie"/>}
        </Container>
      </div>

    )
  }
}
export default MovieDetails
