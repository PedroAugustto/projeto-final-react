import React, {Component} from 'react';
import ImgLogo from './img/parnaso-logo.png';

class Cabecalho extends Component {

render () {
    return (
        <header>
        <div className="row topo">   
          <div className=" col-sm-12 col-md-4 topo-img">
                    <div id="row">
                        <div className=" col-sm-12 col-md-6">
                            <img src={ImgLogo} className="center-block img-rounded img-responsive" alt="Imagem Logo" />
                        </div>
                    </div>
           </div>
          <div className="col-md-8 topo-menu">
            <ul className="nav nav-pills">
                <li role="presentation"><button className="btn" href="#">Inicio</button></li>
                <li role="presentation"><button className="btn" href="#">Sobre</button></li>
                <li role="presentation"><button className="btn" href="#">Atrativos</button></li>
                <li role="presentation"><button className="btn" href="#">Trilhas</button></li>
                <li role="presentation"><button className="btn" href="#">Como chegar</button></li>
                <li role="presentation"><button className="btn" href="#">Contato</button></li>
            </ul>
         </div> 
        </div> 
      </header>
    )
}
}
export default Cabecalho