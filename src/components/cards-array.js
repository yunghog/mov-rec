import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import defaultDp from  '../assets/images/default-profile.jpg'
class CardsArray extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    const list = this.props.list;
    const media_type = this.props.type;
    return(
      <Container className="cards-array-con">
        <Row>
          <Col>
            <h4>{this.props.title}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-thumb-con" data-aos="fade">
              {list.length>0 && list.map(function(item){
                  let link = ''
                  if(item.media_type==="movie"){
                    link="#/movie/"+item.id
                  }
                  if(item.media_type==="tv"){
                    link="#/show/"+item.id
                  }
                  if(media_type==="movie"){
                    link="#/movie/"+item.id
                  }
                  else if(media_type==="show"){
                    link="#/show/"+item.id
                  }

                return(<a href={link} key={item.id}>
                  <div className="movie-thumb">
                    {item.poster_path!==null && <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt={item.title}/>}
                    {item.poster_path===null && <img src={defaultDp} alt={item.title}/>}
                    <span className="rating">{item.vote_average}</span>
                    <p>{item.title}</p>
                  </div>
                </a>)
              })}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default CardsArray
