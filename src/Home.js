import React, { Component } from 'react';
import Slide1 from  './img/Slide1.PNG';
import img1 from './img/button01.png';
import img2 from './img/button02.png';
import img3 from './img/button03.png';
import img4 from './img/button04.png';
import img5 from './img/button05.png';

class Home extends Component {

    render () {
        return (
            <div id="page-1" className="row conteudo">
                <div className="col-md-12">
                            <div className="item">
                                <img src={Slide1} alt="Pico Dedo de Deus" />
                            </div>

                    {/* <!-- Fim Slide página inicial --> */}
                    <br />
                    <br />
                    {/* <!-- Início apresentação do Site --> */}
                    <p>
                        <h2 className="modal-title" align="center">Com mais de 20 mil hectares espalhados por quatro
                            municípios do Estado
                            do Rio de Janeiro, o PARNASO é um dos melhores locais do Brasil para trilhas, escaladas,
                            piscinas naturais e banhos de cachoeira.
                            Diversão e lazer para toda a família e para os amantes da aventura!</h2>
                    </p>
                    {/* <!-- Fim apresentação do Site --> */}
                    <br />
                    <br />

                    {/* <!-- Início Chamada de páginas do site  --> */}
                    <div className="item">
                        <table className='Table'>
                            <tbody>
                                <tr>
                                    <td><img src={img1} className= "img-responsive" alt="Sobre a PARNASO" /></td>
                                    <td><img src={img2} className= "img-responsive" alt="Atrativos do Parque" /></td>
                                    <td><img src={img3} className= "img-responsive" alt="Trilhas e Montanhismo" /></td>
                                    <td><img src={img4} className= "img-responsive" alt="Localização da PARNASO" /></td>
                                    <td><img src={img5} className= "img-responsive" alt="Contato e Redes Sociais" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- Fim Chamada de páginas do site  --> */}

                    <br />

                    {/* <!-- Início de Depoimentos  --> */}

                    <div className="text-center">
                        <p>
                            <h3 className="modal-title" align="center">DEPOIMENTOS</h3>
                        </p>
            
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>
                                            <h4 className="modal-title">Silvia M</h4>
                                        </p>
                                        <p><strong>Vá ver as nuvens de pertinho...</strong></p>
                                        <p className="text-justify">O parque atravessa as cidades de Petrópolis, Teresópolis e
                                            Itaipava. Várias atrações. No mirante do Soberbo (sobre o rio Soberbo) você terá
                                            a melhor vista do dedo de Deus.</p>
                                    </td>
                                    <td>
                                        <p>
                                            <h4 className="modal-title">Alexandre A</h4>
                                        </p>
                                        <p><strong>Maravilhoso!</strong></p>
                                        <p className="text-justify">Um lugar lindo pra ir com toda a família. Acesso fácil para crianças e idosos. A
                                            piscina natural gigante renova as nossas energias, e o passeio pela trilha
                                            suspensa pode ser feito devagar para curtir o visual no passo do visitante. Da
                                            até pra cadeirantes.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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