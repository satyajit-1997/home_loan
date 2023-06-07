import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="footer-area section-padding" > 
      <div className="container"  >
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
            <h3><img src="img/logo.png" alt="" style={{width:'50px'}}/></h3>
            <p>
            Copyright © 2023 Home Loan Advisors - All Rights Reserved.
            </p>
          </div>
         
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
            
           
            <div className="widget"  >
              <h5 className="widget-title">FOLLOW US ON</h5>
              <ul className="footer-social">
                <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                <li><a className="linkedin" href="#"><i className="lni-linkedin-filled"></i></a></li>
                <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
