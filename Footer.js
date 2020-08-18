import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
    <FooterContainer className="main-footer">
       <div className="footer-middle">
         <div className="container">   
         <div className="row">
         {/*Column 1*/}
         <div className=".col-md-3 col-sm-4">
         <h6>Address:</h6>
          <ul className="list-unstyled">
           <li><a  href="https://www.google.com/maps/place/Markveien+16B,+0554+Oslo/@59.9253183,10.7551471,17z/data=!4m5!3m4!1s0x46416e68d1ee901f:0x9592c4371a91775f!8m2!3d59.9253156!4d10.7573411" target="_blank">Markveien 16b, 0554 Oslo</a></li>
           
          </ul>
        </div>
         {/*Column 2*/}
        <div className=".col-md-3 col-sm-4">
         <h6>Phone:</h6>
          <ul className="list-unstyled">
           <li>967 59 525</li>
           
          </ul>
        </div>
        {/*Column 3*/}
        <div className=".col-md-3 col-sm-4">
         <h6>Hours:</h6>
          <ul className="list-unstyled">
           <li>All Days	 11AM–7PM</li>
           </ul>
        </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
        <p className="text-xs-center">&copy;{new Date().getFullYear()}Marius Shark -All Rights Reserved.</p>
        </div>
        </div>
        </div>
       </FooterContainer>  
    );
  }
  export default Footer;

  const FooterContainer = styled.footer`
   .footer-middle{ 
    background: #222;
    padding-top: 1rem;
    color: #bbb;
   }
    .footer-bottom{
    padding-top: 1rem;
    padding-bottom: 1rem; 
}
ul li a {
color: #bbb;
}

ul li a:hover {
color: white;
}
`;