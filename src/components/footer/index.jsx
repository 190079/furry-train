import React,{useRef,useEffect} from 'react';
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css'


const RowContainer = ({title,children}) => {
    return <nav className="col-xs-6 col-md-3 darkshadow  " >
    <h4>{title}</h4>
    <ul className="footer-links">
      {children}
    </ul>
  </nav>
}

const SocialMedia = () => {
    return <nav className="col-md-4 col-sm-6 col-xs-12">
    <ul className="social-icons">
      <li><a className="facebook" href="#"><FaFacebook /></a></li>
      <li><a className="twitter" href="#"><FaTwitter /></a></li>
      <li><a className="dribbble" href="#"><FaDribbble /></a></li>
      <li><a className="linkedin" href="#"><FaLinkedin /></a></li>   
    </ul>
  </nav>
}
function Footer() {
   
    return (
    <footer className="site-footer ">
    <nav className="container">
      <nav className="row ">
        <nav className="col-sm-12 col-md-6 ">
          <h4>About</h4>
          <p className="text-justify">Dev Learner is a personal project which is intended to help future DevOps engineers, students and Tech Personal. The goal of the website is to provide support the people who might use Docker, Linux, Vagrant, Jenkins, Ansible, Nagios, Terraform and AWS.</p>
        </nav>
        <RowContainer title="Blogs" >
          <ul className="footer-links">
            <li><a href="#">Linux</a></li>
            <li><a href="#">Docker</a></li>
            <li><a href="#">Virtual Machine</a></li>
            <li><a href="#">Vagrant</a></li>
            <li><a href="#">Terraform</a></li>
            <li><a href="#">Ansible</a></li>
            <li><a href="#">Nagios</a></li>
            <li><a href="#">Jenkins</a></li>
            <li><a href="#">AWS</a></li>
          </ul>
          </RowContainer>

        <RowContainer title="Quick Links">
          <ul className="footer-links">
            <li><a href="/about/">About Us</a></li>
            <li><a href="contact/">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Admin</a></li>
          </ul>
          </RowContainer>
      </nav>
      <hr />
    </nav>
    <nav className="container">
      <nav className="row ">
        <nav className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by &nbsp;
       <a href="#">Dev Learner</a>.
          </p>
        </nav>
        <SocialMedia />
      </nav>
    </nav>
</footer>
    )
}

export default Footer;
