import React, { Component } from 'react';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FadeIn from 'react-fade-in';
import {Link} from 'react-router-dom';
import img2 from '../img/button02.png';
import img3 from '../img/button03.png';
import img4 from '../img/button04.png';
import img5 from '../img/button05.png';
import dep1 from '../img/depoimento01.png';
import dep2 from '../img/depoimento02.png';
import dep3 from '../img/depoimento03.png';



class Home extends Component {
   
    render () {
        return (
            <div id="page-1" className="row conteudo">
                <div className="col-md-12">
            {/* <!-- Início Slide página inicial --> */}
                <div alinh className="carrossel">
                    <Carousel />
                </div>
                             
            {/* <!-- Fim Slide página inicial --> */}
                    <br />
                    <br />
                    {/* <!-- Início apresentação do Site --> */}
                    <FadeIn>             
                            <p>
                                <h2 className="modal-title" align="center">Com mais de 20 mil hectares espalhados por quatro
                                    municípios do Estado
                                    do Rio de Janeiro, o PARNASO é um dos melhores locais do Brasil para trilhas, escaladas,
                                    piscinas naturais e banhos de cachoeira.
                                    Diversão e lazer para toda a família e para os amantes da aventura!</h2>
                            </p>
                    </FadeIn>
                    {/* <!-- Fim apresentação do Site --> */}
                    <br />
                    <br />

                    {/* <!-- Início Chamada de páginas do site  --> */}
                <FadeIn>
                    <div className="item">
                        <table className='Table tabela-home' id='tabela-home-links'>
                            <tbody>
                                <tr>
                                    <Link to="/atrativos"><td><img src={img2} className= "img-responsive" alt="Atrativos do Parque" /></td></Link>
                                    <Link to="/trilhas"><td><img src={img3} className= "img-responsive" alt="Trilhas e Montanhismo" /></td></Link>
                                    <Link to="/como-chegar"><td><img src={img4} className= "img-responsive" alt="Localização da PARNASO" /></td></Link>
                                    <Link to="/contato"><td><img src={img5} className= "img-responsive" alt="Contato e Redes Sociais" /></td></Link>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </FadeIn>
                    {/* <!-- Fim Chamada de páginas do site  --> */}

                    <br />
                    <br />
                    {/* <!-- Início de Depoimentos  --> */}

                    <div className="text-center">
                        <p>
                            <h3 className="modal-title" align="center">DEPOIMENTOS</h3>
                        </p>
            
                        <FadeIn>
                            <div className="item">
                                <table className='Table tabela-home' id='tabela-home-links'>
                                    <tbody>
                                        <tr>
                                            <td><img src={dep2} className= "img-responsive" alt="Depoimento"/></td>
                                            <td><img src={dep1} className= "img-responsive" alt="Depoimento"/></td>
                                            <td><img src={dep3} className= "img-responsive" alt="Depoimento"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </FadeIn>
                    </div>
                    {/* <!-- Fim de Depoimentos  --> */}
                    <br />
                    <br />

                </div>
        </div>
       )
    }
}
export default Home