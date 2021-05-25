import {Container,Col,Row} from 'react-bootstrap'
import Hero from '../assets/images/hero1.jpg'
import logo from  '../assets/images/traptv-logo.png'
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
              <h1 className="highlight">About TrapTV</h1>
              <br/>
              <p>
                TrapTV is a movie and show finder app where you can find movies, series, seasons,
                episodes, cast and credits. Movie and show reviews, trailers, recommendation and actors from the largest community database
                TMDB. Get access and use media content from The Movie Database (TMDb), IMDb and Trakt. With this TV Show tracker,
                you can also find season and movie ratings to make a solid decision on what to watch next.TrapTV gives you
                flexibility and control to customize your home screen with your own card categories.
              </p>
              <br/>
            <p className="traptv-logo tmdb-logo2"><img className="" src={logo}/></p>
            <div className="fancy-highlight fancy-highlight2">
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
              <div className="text-center">
                <a className="tmdb-link2" href="https://github.com/yunghog/mov-rec" target="_blank" rel="noopner">View Source</a>
              </div>
            </div>
          </div>
            </Col>
        </Row>
        </Container>
        <br/>
        <Container>
          <Row>
            <Col>
              <div className="det">
                <h2 className="highlight">About TMDB</h2><br/>
                <p>
                  Let's talk about TMDb. The Movie Database (TMDb) is a community built movie and TV database. Every piece of
                  data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth
                  of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community
                   and that's precisely what makes us different.
                </p>
                <br/>
                <p className="tmdb-logo"><img className="" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/></p>
                <div className="fancy-highlight">
                  <ul>
                  <li>Every year since 2008, the number of contributions to our database has increased. With over 400,000 developers and companies using our platform, TMDb has become a premiere source for metadata.</li>
                  <li>Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.</li>
                  <li>We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDb is used in over 180 countries.</li>
                  <li>Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on TMDb is nothing short of amazing.</li>
                  <li>Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.</li>
                  </ul>
                  <div className="text-center">
                    <a className="tmdb-link" href="https://www.themoviedb.org/about" target="_blank" rel="noopner">Home page</a>
                    <a  className="tmdb-link" href="https://developers.themoviedb.org/3" target="_blank" rel="noopner">API Documentation</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
        <Container>
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
