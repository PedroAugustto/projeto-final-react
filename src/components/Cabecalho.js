import React, {Component} from 'react';
import ImgLogo from '../img/parnaso-logo.png';
import {Link} from 'react-router-dom'

class Cabecalho extends Component {

render () {
    return (
        <header>
        <div className="row topo">   
          <div className=" col-sm-12 col-md-4 topo-img" >
                    <div id="row">
                        <div className=" col-sm-12 col-md-6">
                            <img src={ImgLogo} className="center-block img-rounded img-responsive" alt="Imagem Logo" />
                        </div>
                    </div>
           </div>
          <div className="col-md-8 topo-menu">
            <ul className="nav nav-pills" >
                <Link to="/"><li role="presentation"><button className="btn">Inicio</button></li></Link>
                <Link to="/atrativos"><li role="presentation"><button className="btn" >Atrativos</button></li></Link>
                <Link to="/trilhas"><li role="presentation"><button className="btn" >Trilhas</button></li></Link>
                <Link to="/como-chegar"><li role="presentation"><button className="btn" >Como chegar</button></li></Link>
                <Link to="/contato"><li role="presentation"><button className="btn">Contato</button></li></Link>
            </ul>
         </div> 
        </div> 
      </header>
    )
}
}
export default Cabecalho