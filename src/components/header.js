import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import {FaBars,FaArrowLeft} from 'react-icons/fa'
class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      topOffset: 0
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',()=>{
      this.setState({
        topOffset: window.scrollY
      })
    })
  }
  render(){
    var topOffset = this.state.topOffset
    return(
        <header className={topOffset<200?"my-header":"my-header sticky"} id="my-header">
          <Container fluid>
            <Row noGutters>
              <Col xs={2} className="text-left">
                <button className="btn btn-nav"><FaArrowLeft size="20"/></button>
              </Col>
              <Col xs={8} className="text-center">
                <h3>TrapTV</h3>
              </Col>
              <Col xs={2} className="text-right">
                <button className="btn btn-nav"><FaBars size="20"/></button>
              </Col>
            </Row>
          </Container>
        </header>
    )
  }
}
export default Header
