import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    This is a sample website, Hope you like it!
                </p>
                <p className="footer-subscription-text">

                    This took a lot of effort, if you liked you can contact me
                    +505 84826604

                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="eamil" placeholder="Your Email" 
                        className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>

                </div>

                
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About US</h2>
                        <Link to='/sign-up'>How it works</Link> 
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
            
             </div>
             <div className="footer-link-items">
                        <h2>Contact US</h2>
                        <Link to='/sign-up'>How it works</Link> 
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
            
             </div>
           
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About US</h2>
                        <Link to='/sign-up'>How it works</Link> 
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
            
             </div>
             <div className="footer-link-items">
                        <h2>Contact US</h2>
                        <Link to='/sign-up'>How it works</Link> 
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
            
             </div>
           
                </div>
            </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                    <i class="fab fa-atlassian"></i>
                    </Link>
                </div>
                <small className="website-rights">Juan Luis Torrez Web Desing © 2020</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter"
                    >
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label="Youtube"
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link className="social-icon-link linkedin"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
                </div>
 </section>
            </div>

       

        
    )
}

export default Footer
