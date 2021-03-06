import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import defaultDp from  '../assets/images/default-profile.jpg'

class CardsArray2 extends React.Component{
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
              {list && list.map(item=>
                <a href={"#/people/"+item.id}  key={item.id}>
                  <div className="movie-cast">
                    {item.profile_path!=null && <img src={"https://image.tmdb.org/t/p/w500"+item.profile_path} alt={item.name}/>}
                    {item.profile_path==null && <img src={defaultDp} alt={item.name}/>}
                    <p>{item.name}</p>
                    <p className="char-name">{item.character}</p>
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
export default CardsArray2
