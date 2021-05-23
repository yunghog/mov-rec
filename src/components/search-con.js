import React from 'react'
import Axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import { FaSearch } from "react-icons/fa";

class SearchCon extends React.Component{
  constructor(props){
    super(props)
    this.state={
      searchQuery: ''
    }
  }
  handleChange = (evt) =>{
    this.setState({[evt.target.name]:evt.target.value})
  }
  search=()=>{
    const url = '/#/search/'+this.state.searchQuery
    console.log(url);
    window.location=url;
  }
  render(){
    return(
      <div className="search-con">
        <div className="search">
          <h2>Millions of movies, tv shows and people to discover!</h2>
          <div className="input-box">
            <input onChange={this.handleChange} name="searchQuery" placeholder="Search movies, shows, people..."></input>
            <button onClick={this.search}><FaSearch/></button>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchCon
