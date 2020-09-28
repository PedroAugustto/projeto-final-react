import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class PageNotFound extends Component{
    render() {
        return(
            <>
                <div className="row conteudo">
                    <div className="col-md-12 page-not-found">
                        <div className="page-not-found">
                            <h1>404 | Página não encontrada</h1>
                            <Link to="/"><button type="button" class="btn btn-success">Voltar ao Início</button></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PageNotFound