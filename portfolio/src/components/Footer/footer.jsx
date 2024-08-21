import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container container'>
                <h1 className='footer_title'>Tselote</h1>

                <ul className='footer_list'>
                    <li>
                        <a href="#about" className='footer_link'>About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className='footer_link'>Projects</a>
                    </li>

                    <li>
                        <a href="#" className='footer_link'>About</a>
                    </li>
                </ul>

                <div className='footer_social'>
                    <a href="" className="footer_social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="" className="footer_social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://github.com/" className="home_social-icon" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                </div>

                <span className='footer_copy'>&#169; All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;