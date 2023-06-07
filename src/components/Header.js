import React from 'react'

export default function Header() {
  return (
    <>
    <header id="header-wrap">
    
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
            <a href="/home" className="navbar-brand"><img src="img/logo.png" alt="" style={{width:'40px'}} /></a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                PRODUCT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                LOAN PROGRAMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                REALTOR PORTAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                REVIEWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                EDUCATION
                </a>
              </li>
             
            </ul>
          </div>
        </div>

       
        <ul className="mobile-menu">
          <li>
            <a className="page-scrool" href="/home">HOME</a>
          </li>
          <li>
            <a className="page-scrool" href="/product">PRODUCT</a>
          </li>
          <li>
             <a className="page-scroll" href="#">LOAN PROGRAMS</a>
          </li>
          <li>
            <a className="page-scroll" href="#">REALTOR PORTAL</a>
          </li>
          <li>
            <a className="page-scroll" href="#">ABOUT US</a>
          </li>
          <li>
            <a className="page-scroll" href="#">REVIEWS</a>
          </li>
          <li>
            <a className="page-scroll" href="#">EDUCATION</a>
          </li>
        
        </ul>
    

      </nav>
    
      <div id="main-slide" className="carousel slide" data-ride="carousel">
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="img/slider/slide1.png" alt="First slide" />
            <div className="carousel-caption d-md-block">
              <h1 className="fadeInUp wow" data-wow-delay=".6s" style={{fontFamily:'Cormorant Garamond' ,fontSize:'36px'}}>The</h1>
              <h1 className="wow fadeInDown heading" data-wow-delay=".4s" style={{fontFamily:'Cormorant Garamond' ,fontSize:'70px'}}>educated approach</h1>
              <h1 className="wow fadeInDown heading" data-wow-delay=".4s" style={{fontFamily:'Cormorant Garamond' ,fontSize:'32px'}}>to modern mortgage lending</h1>
     
      
            </div>
          </div>
          
        </div>

      </div>

    </header>
    </>
  )
}


