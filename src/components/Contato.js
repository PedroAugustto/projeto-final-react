import React, { Component } from 'react';

class Contato extends Component {

    render () {
        return(
            <div class="row conteudo">
            <div class="col-md-12">
                <div class="titulo">
                    <h1>Contato</h1>
                </div>

                <div class="contato-telefone" >
                    <div class="telefones">
                        <h3>Telefones</h3>
                        <p>Adiminstração : (21) 2152-1100<br />
                            Bilheteria : (21) 2642-0579</p><br />
                    </div>
                </div>


                <div class="contato">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Seu Nome</label>
                            <input type="name" class="form-control" id="exampleFormControlInput1" maxlength="50"
                                placeholder="Seu nome" />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Endereço de email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" maxlength="50"
                                placeholder="nome@exemplo.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Assunto</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" maxlength="50"
                                placeholder="Ex : Buscando informações" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Mensagem</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" maxlength="255"
                                placeholder="Escreva a sua mensagem até 255 characteres"></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Enviar</button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default Contato