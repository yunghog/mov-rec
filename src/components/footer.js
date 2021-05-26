import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
class Footer extends React.Component{
  render(){
    const year = new Date()
    return(
        <footer className="my-footer">
          <Container fluid>
            <Row noGutters>
              <Col xs={12} className="text-center">
                <p>
                  Copyright © {year.getFullYear()} TrapTV. All Rights Reserved. Designed and Developed by <a href="https://yunghog.github.io" target="_blank" rel="noreferrer">Samartha</a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
    )
  }
}
export default Footer
