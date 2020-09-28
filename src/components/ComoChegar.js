import React, { Component } from 'react';

class ComoChegar extends Component {

    render () {
        return(
            <div className="row conteudo">
                <div className="col-md-12">
                <div>
                    <div className="titulo">
                        <h1>Como Chegar</h1>
                    </div>

                    <div className="como-chegar-endereco">
                        <h3>Endereço</h3>
                        <p>Av. Rotariana , Teresópolis-RJ<br/>
                            S/n. - Cep. 25960-602<br/>
                            Teresópolis-RJ</p><br/>
                    </div>


                    <div className="como-chegar-texto">
                        <h2 className="subtitulo">Orientações</h2>
                        <p>A entrada principal do Parque Nacional da Serra dos Órgãos fica na área urbana de
                            Teresópolis, na
                            Avenida
                            Rotariana s/nº (que interliga a BR 116 Rio-Bahia, na altura do km 89,5 à cidade), com acesso
                            bem
                            sinalizado. A entrada do parque fica ao lado da ponte sobre o Rio Paquequer, na entrada da
                            cidade,
                            próximo ao Mirante do Soberbo e ao Portal da Cidade.</p><br/>

                        <p>Na BR 116, sentido Rio-Teresópolis, na altura de Magé, existe a praça do pedágio administrado
                            pela
                            CRT,
                            com cobrança bidirecional. Há cobrança de pedágio também no sentido
                            Teresópolis-Magé-Teresópolis.
                        </p>
                    </div>
                    <div className="como-chegar-mapa">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29501.770679204164!2d-42.980919!3d-22.439512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b2fc4e7ae71d%3A0xa560f33c6b47710e!2sParque%20Nacional%20da%20Serra%20dos%20%C3%93rg%C3%A3os%20-%20PARNASO%20-%20Sede%20Teres%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1598932106766!5m2!1spt-BR!2sbr"
                            frameborder="0" allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ComoChegar