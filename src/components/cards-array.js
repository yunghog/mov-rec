import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import { FaSearch } from "react-icons/fa";

class CardsArray extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    const list = this.props.list;
    return(
      <Container className="cards-array-con">
        <Row>
          <Col>
            <h4>{this.props.title}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-thumb-con">
              {list.length>0 && list.map(item=>
                <a href={"#/movie/"+item.id}>
                  <div className="movie-thumb" key={item.id}>
                    <img src={"https://image.tmdb.org/t/p/original"+item.poster_path}/>
                    <span className="rating">{item.vote_average}</span>
                    <p>{item.title}</p>
                </div>
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default CardsArray
