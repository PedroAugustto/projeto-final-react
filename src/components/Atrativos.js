import React, { Component } from 'react';

class Atrativos extends Component {

    render () {
        return(
            <div class="row conteudo">
                <div class="col-md-12">
                    <div class="titulo">
                        <h1>Atrativos</h1>
                    </div>
                    <div class= "atrativos-lista">
                        <h3>Principais Atrativos</h3>
                        <ul>
                            <li>Centro de visitantes</li>
                            <li>Piscina de águas naturais</li>
                            <li>Área de lazer</li>
                            <li>Bosques Santa Helena e da Colina</li>
                        </ul>
                    </div>

                    <div class="atrativos-texto">
                        <h2 class="subtitulo">Atrativos Principais</h2>

                        <h3>Centro de visitantes:</h3>
                            <p>Entre as atrações estão a maquete com animação e áudio explicando as características do Parque
                            e destacando os principais pontos, reproduções de animais e computadores com apresentação
                            multimídia
                            e jogos temáticos.
                            Na sala interativa é possível ouvir os cantos de aves e vocalizações de mamíferos ou aprimorar a
                            capacidade de ver os animais na floresta.
                            O Centro de Visitantes conta, ainda, com cafeteria e loja de lembranças, com camisetas bordadas,
                            livros, suprimentos para passeios no Parque e outras lembranças.</p>

                        <h3>Piscina de águas naturais:</h3>
                            <p>A Piscina de águas naturais é uma das mais tradicionais atrações do PARNASO. Muito procurada no
                            verão, ela compõe um belo cenário para piqueniques e atividades recreativas no frio inverno da
                            serra.</p>

                        <h3>Área de lazer</h3>
                            <p>A área de lazer para os visitantes na parte baixa da Sede Teresópolis é toda sinalizada e possui
                            estacionamento. A 100 metros da portaria o rio Paquequer proporciona um gostoso banho de
                            cachoeira,
                            um pouco acima está a piscina de pedra.</p>

                    <h3>Bosques Santa Helena e da Colina</h3>
                    <p>A trilha do Caxinguelê, cortada pelo Rio Paquequer, é um passeio leve e agradável, onde o
                        visitante entra em contato com a natureza. Quem passa o dia no Parque não pode deixar de
                        conhecer
                        os bosques Santa Helena e da Colina, projetados pelo arquiteto e paisagista Ângelo Murgel, com
                        refúgios, muita sombra, mesas e bancos de pedra para piquenique e banheiros.</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Atrativos