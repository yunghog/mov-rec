import {Container,Col,Row} from 'react-bootstrap'
import Hero from '../assets/images/hero1.jpg'
import {FaInstagram, FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
function About(){
  return(
    <section>
      <Container fluid>
        <Row noGutters>
          <Col>
            <div className="hero-img">
              <img className="" src={Hero} />
              <h2>TrapTV</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
      <Container>
        <Row>
          <Col>
            <div className="det">
              <h1>About TrapTV</h1>
              <p>
                TrapTV is a movie and show finder app where you can find movies, series, seasons,
                episodes, cast and credits. Movie and show reviews, trailers, recommendation and actors from the largest community database
                TMDB. Get access and use media content from The Movie Database (TMDb), IMDb and Trakt. With this TV Show tracker,
                you can also find season and movie ratings to make a solid decision on what to watch next.TrapTV gives you
                flexibility and control to customize your home screen with your own card categories.
              </p>
              <ul>
                <li>Explore huge amount of categories: On TV, Trending movie reviews, Anticipated movie trailers,
                  Top Rated movie recommendation and Box Office movie guide</li>
                <li>Browse through our catalogs such as Marvel Universe or Disney</li>
                <li>Open movies and TV shows on Netflix, Disney+ or Amazon Prime trough the movie tracker and TV
                  Show tracker app</li>
                <li>Know all popular people</li>
                <li>Explore a variety of best genres such as drama and science fiction from movie finder</li>
                <li>Search your films, series and actors in the largest community database</li>
                <li>Filter movies and TV shows by genres, year and rating</li>
                <li>Get personal movie recommendation based on your taste</li>
              </ul>
            </div>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col md="8">
            <div className="boxy">
              <Row noGutters>
                <Col md={3} className="">
                  <img src="https://avatars.githubusercontent.com/u/41548444?v=4" className="" width="100%"/>
                </Col>
                <Col md={9}>
                  <div className="det  p-3">
                    <h4>About the developer</h4>
                    <p>Hey, Im <a>Samartha</a>. Im a developer and graphic designer based in Sagar,India </p>
                    <p className="socials">
                      <a><FaLinkedin/></a>
                      <a><FaInstagram/></a>
                      <a><FaEnvelope/></a>
                      <a><FaGithub/></a>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
    </section>
  )
}
export default About
