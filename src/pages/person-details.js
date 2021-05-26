import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import CardsArray from  '../components/cards-array'
import {FaInstagram,FaTwitter} from 'react-icons/fa'
import {Keys} from  '../components/api-key'

class PersonDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      peopleId: '',
      people: '',
      featured: '',
      externalIds: ''
    }
  }
  componentDidMount(){
    this.setState({
      movieId:this.props.match.params.propleId
    })
    this.getPeople(this.props.match.params.peopleId)
    this.getCredits(this.props.match.params.peopleId)
    this.getSocials(this.props.match.params.peopleId)
  }
  getPeople = (id) =>{
    let url = "https://api.themoviedb.org/3/person/"+id+"?api_key="+Keys+"&language=en-US".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        people: res.data,
      })
    })
  }
  getCredits = (id) =>{
    let url = "https://api.themoviedb.org/3/person/"+id+"/combined_credits?api_key="+Keys+"&language=en-US".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        featured: res.data.cast
      })
    })
  }
  getSocials= (id) =>{
    let url = "https://api.themoviedb.org/3/person/"+id+"/external_ids?api_key="+Keys+"&language=en-US".replace(" ","");
    Axios.get(url).then(res=>{
      this.setState({
        externalIds: res.data
      })
    })
  }
  render(){
    const person = this.state.people;
    const featured = this.state.featured;
    const ids = this.state.externalIds;
    return(
      <div>
        <Container fluid>
          <Row noGutters>
            <Col>
              <div className="movie-backdrop person">
                <div  className="movie-backdrop-title">
                  <h2>{person.name}</h2>
                </div>
                <div className="movie-backdrop-image person-backdrop">
                  {featured[0] && <img  src={"https://image.tmdb.org/t/p/original"+featured[0].backdrop_path} alt="TrapTV"/>}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br/><br/>
        <Container>
          <Row>
            <Col>
              <h1 className="highlight">{person.name}</h1>
            </Col>
          </Row>
        </Container>
        <br/>
        <Container>
          <Row>
            <Col md={3}>
              <Row>
                <Col>
                  <div className="person-dp">
                    <img  src={"https://image.tmdb.org/t/p/w500"+person.profile_path} alt={person.name}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="highlight1 boxy" style={{marginBottom:'20px'}}>
                    <li>Name : {person.name}</li>
                    {person.gender==="1" && <li>Gender : Female</li>}
                    {person.gender==="2" && <li>Gender : Male</li>}
                    <li>DOB : {person.birthday}</li>
                    <li>From : {person.place_of_birth}</li>
                    <li className="socials">
                      External Profile :
                      <a href={"https://instagram.com/"+ids.instagram_id} target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
                      <a href={"https://twitter.com/"+ids.twitter_id} target="_blank" rel="noreferrer"><FaTwitter size={30} /></a>
                    </li>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={9}>
              <div className="person-details">
                <h4>{person.name}</h4>
                <span className="genre">{person.known_for_department}</span>
                <p>{person.biography}</p>
              </div>
              <CardsArray list={featured} title="Featured Movies and Shows"/>
            </Col>
          </Row>
        </Container>
        <br/>
      </div>

    )
  }
}
export default PersonDetails
