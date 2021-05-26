import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import logo from  '../assets/images/traptv-logo.png'
import {FaBars,FaArrowLeft,FaMoon,FaSun,FaShare,FaWhatsapp,FaFacebook,FaClipboard} from 'react-icons/fa'
class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      topOffset: 0,
      menuIsOpen: false,
      curTheme: 1,
      shareConIsOpen: false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',()=>{
      this.setState({
        topOffset: window.scrollY
      })
    })
    this.isHome()
  }
  goBack=()=>{
    if(!this.isHome())
      window.history.back()
  }
  isHome=()=>{
    const loc = window.location.hash
    if(loc=="#/")
      return true
    return false
  }
  toggleMenu = () =>{
      const i = this.state.menuIsOpen
      if(i){
        this.setState({
          menuIsOpen: false
        })
      }
      else{
        this.setState({
          menuIsOpen: true
        })
      }
  }
  toggleShare = () =>{
      const i = this.state.shareConIsOpen
      if(i){
        this.setState({
          shareConIsOpen: false,
          menuIsOpen: false
        })
      }
      else{
        this.setState({
          shareConIsOpen: true
        })
      }
  }
  toggleTheme=(x)=>{
    if(x=='d'){
      this.setState({
        curTheme: 0
      })
      document.body.setAttribute('data-theme','dark')
    }
    if(x=='l'){
      this.setState({
        curTheme: 1
      })
      document.body.setAttribute('data-theme','')
    }
    setTimeout(this.toggleMenu,1000);
  }
  copyToClip = () => {
    var urlx = window.location
    var textField = document.createElement('textarea')
    textField.innerText = String(urlx)
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    // navigator.clipboard.writeText(String(urlx).replace('#','%23'))
    window.alert('Text copied : '+urlx)
    this.toggleShare()
  }
  render(){
    var topOffset = this.state.topOffset
    return(
        <header className={topOffset<200?"my-header":"my-header sticky"} id="my-header">
          <Container fluid>
            <Row noGutters>
              <Col xs={2} className="text-left">
                <button className="btn btn-nav" onClick={this.goBack} ><FaArrowLeft size="20"/></button>
              </Col>
              <Col xs={8} className="text-center">
                <div className="header-logo">
                  <img src={logo}/>
                </div>
              </Col>
              <Col xs={2} className="text-right">
                <button className="btn btn-nav" onClick={this.toggleMenu}><FaBars size="20"/></button>
              </Col>
            </Row>
          </Container>
          <div  className={this.state.menuIsOpen==true ? "header-menu-con show" : "header-menu-con hide"}>
            <div className="header-menu">
              <button className="btn btn-close" onClick={this.toggleMenu}>X</button>
              <li>
                <a href="/#/" onClick={this.toggleMenu}>Home</a>
              </li>
              <li>
                <a href="/#/search/do_a_search_first XD" onClick={this.toggleMenu}>Search</a>
              </li>
              <li>
                <a href="/#/about" onClick={this.toggleMenu}>About</a>
              </li>
              <li>
                <a href="/#/thetmdb" onClick={this.toggleMenu}>Switch Theme</a>
                <br/>
                <button  class={this.state.curTheme==0?"btn-ts n":"btn-ts"} onClick={(e)=>{this.toggleTheme("d")}}><FaMoon/></button>
                <button  class={this.state.curTheme==1?"btn-ts n":"btn-ts"} onClick={(e)=>{this.toggleTheme("l")}}><FaSun/></button>
              </li>
              <li style={{textAlign:'center'}}>
                <button className="btn btn-1 btn-share" onClick={this.toggleShare}>Share <FaShare/> </button>
              </li>
            </div>
          </div>
          <div  className={this.state.shareConIsOpen?"header-share-con header-share-con-show":"header-share-con"}>
            <div className="share-menu">
              <button className="btn btn-close" onClick={this.toggleShare}>X</button>
              <li style={{backgroundColor:'var(--manatee2)', margin:"-10px",marginBottom:'5px',textAlign:"center"}}>
                Share
              </li>
              <li>
                <a href={("https://api.whatsapp.com/send?text="+window.location).replaceAll('#','%23')} target="_blank" rel="noreferrer"><FaWhatsapp/> Share on Whatsapp</a>
              </li>
              <li>
                <a href={("https://www.facebook.com/sharer/sharer.php?u="+window.location).replaceAll('#','%23')} target="_blank" rel="noreferrer"><FaFacebook/> Share on Facebook</a>
              </li>
              <li>
                <button className="btn tmdb-link" onClick={this.copyToClip}><FaClipboard/> Copy link to Clipboard</button>
              </li>
            </div>
          </div>

        </header>
    )
  }
}
export default Header
