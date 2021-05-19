import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'

class MovieDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      movieId: '',
      thisMovie: ''
    }
  }
  componentDidMount(){
    this.setState({
      movieId:this.props.match.params.movieId
    })
    this.getMovieDetails(this.props.match.params.movieId);
  }
  getMovieDetails = (id) =>{
    let url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US".replace(" ","");
    console.log(url);
    Axios.get(url).then(res=>{
      console.log(res.data);
      this.setState({
        thisMovie: res.data
      })
    })
  }
  render(){
    const movie = this.state.thisMovie;
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
                  <img  src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path}/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
        <Container>
          <Row>
            <Col md={3}>
              <div className="movie-poster">
                <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path}/>
              </div>
            </Col>
            <Col md={9}>
              <div className="movie-details">
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}
export default MovieDetails
