import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import SearchCon from  '../components/search-con'
class SearchResults extends React.Component{
  constructor(props){
    super(props)
    this.state={
      query: this.props.match.params.query,
      currentPage: 1,
      searchResult: ''
    }
  }
  componentDidMount(){
    this.setState({
      query: this.props.match.params.query
    })
    this.execQuery(1);
  }
  componentDidUpdate(){
    if(this.props.match.params.query!==this.state.query){
      window.location.reload();
    }
  }
  execQuery=(page)=>{
    this.setState({
      currentPage: page
    })
    const q = this.state.query.replace(" ","%20");
    const url = "https://api.themoviedb.org/3/search/multi?api_key=e0027d57cef3fdd5caa5a8e762c30c62&language=en-US&query="+q+"&page="+page+"&include_adult=true".replaceAll(' ','')
    console.log(url);
    Axios.get(url).then(res=>{
      this.setState({
        searchResult: res.data
      })
    })
  }

  render(){
    const pages = this.state.searchResult.total_pages
    const curPage = this.state.currentPage
    const results = this.state.searchResult.results
    console.log(results);
    return(
      <div>
        <Container fluid>
          <Row noGutters>
            <Col>
              <SearchCon/>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1>Search results for " {this.state.query} "</h1>
            </Col>
          </Row>
        </Container>
        <br/>
        <Container>
          <Row>
            {results && results.map((r)=>{
              let link = ''
              let dp = ''
              let title = ''
              if(r.media_type==="person"){
                dp="https://image.tmdb.org/t/p/w500"+r.profile_path
                title=r.name
                link="/#/people/"+r.id
              }
              if(r.media_type==="movie"){
                dp="https://image.tmdb.org/t/p/w500"+r.poster_path
                title=r.title
                link="/#/movie/"+r.id
              }
              if(r.media_type==="tv"){
                dp="https://image.tmdb.org/t/p/w500"+r.poster_path
                title=r.name
                link="/#/show/"+r.id
              }
              return(
                <Col  md={2} xs={6}>
                  <a href={link} style={{textDecoration:'none'}}>
                    <div className="search-results-thumb">
                      <img src={dp} alt="TrapTV"/>
                      <p>{r.media_type}</p>
                      <h5>{title}</h5>
                    </div>
                  </a>
                </Col>
              )
            })
          }
          </Row>
          <br/>
          <Row>
            <Col>
              <div className="btn-grp-nav">
                <button className="btn btn-nav" onClick={(e)=>this.execQuery(curPage-1,e)} disabled={curPage<2}><FaArrowLeft/></button>
                Page {curPage} of {pages}
                <button className="btn btn-nav" onClick={(e)=>this.execQuery(curPage+1,e)} disabled={curPage===pages}><FaArrowRight/></button>
              </div>
            </Col>
          </Row>
          <br/>
        </Container>
      </div>
    )
  }
}
export default SearchResults
