import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className="footer__content__logo" style={{paddingTop: '40px', marginLeft: '80px', gap: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="logo">
                        <img src={logo} alt="" style={{borderRadius: '50%'}}/>
                        <Link to="/">tMovies</Link>
                    </div>
                    <h1 style={{fontSize: '16px', fontWeight: 400}}>Contact us: <b>sharma.nikita2292@gmail.com</b></h1>
                    <h1 style={{fontSize: '16px', fontWeight: 400}}>© ScreenScene, 2022</h1>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu" style={{fontSize: '20px', fontWeight: 400, marginRight: '60px', marginLeft: 0}}>
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu" style={{fontSize: '20px', fontWeight: 400, marginRight: '60px', marginLeft: 0}}>
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu" style={{fontSize: '20px', fontWeight: 400, marginRight: '60px', marginLeft: 0}}>
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
