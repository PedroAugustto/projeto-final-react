import React, { Component } from 'react'
import ImgLogo from './img/parnaso-logo.png';
import ImgLogoAna from './img/logo-ana.png';
import ImgLogoIbama from './img/logo-ibama.png';
import ImgLogoSfb from './img/logo-sfb.png';
import ImgLogoJbrj from  './img/logo-jbrj.jpg';

class Rodape extends Component {

    render() {
        return (
        <footer>
            <div className="row footer-color">
                    <div className="col-md-2 footer-div">
                        <a href="index.html"><img src={ImgLogo} alt="Logo Parnaso" className="img-rounded img-responsive center-block" /></a>
                    </div>
                    <div className="col-md-10">
                        <div className="footer-menu">
                            <ul className="nav nav-pills">
                                <li><a rel="noopener noreferrer"  href="https://www.ana.gov.br/" target="_blank"><img alt="Logo" src={ImgLogoAna}/></a></li>
                                <li><a rel="noopener noreferrer" href="https://www.gov.br/ibama" target="_blank"><img alt="Logo" src={ImgLogoIbama} /></a></li>
                                <li><a rel="noopener noreferrer" href="http://www.florestal.gov.br/" target="_blank"><img alt="Logo" src={ImgLogoSfb} /></a></li>
                                <li><a rel="noopener noreferrer"  href="http://www.jbrj.gov.br/" target="_blank"><img alt="Logo" src={ImgLogoJbrj}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
        )
    }
}
export default Rodape