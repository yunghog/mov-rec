import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import { FaSearch } from "react-icons/fa";

class VideoArray extends React.Component{
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
                  <div className="video-thumb" key={item.id}>
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+item.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" Allowfullscreen></iframe>
                    <p>{item.name}</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default VideoArray