import React, { Component } from 'react';
import img1 from '../img/barragem.jpg'
import img2 from '../img/trilha suspensa 2-150x202.jpg'
import img3 from '../img/trilha da primavera-150x191.jpg'
import img4 from '../img/trilha mozart catao-150x227.jpg'
import img5 from '../img/trilha cartao postal-150x95.jpg'
import img6 from '../img/trilha da pedra do sino-150x123.jpg'
import imgMapa from '../img/trilhas-teresopolis.jpg'


class Trilhas extends Component {
    state = {
        listaTrilhas : [
            {nome:"Estrada da Barragem",imagem:img1,dificuldade:"leve",extensao:"3.000m",dur:"2 horas (ida e volta)",texto:"Estrada calçada em paralelepípedo com trânsito liberado para automóveis. É a via que dá acesso a todas as trilhas da Sede Teresópolis. Ideal para caminhadas de lazer, tem extensão de 3 Km e placas indicativas de distância em intervalos de 500m. A estrada conta com vários mirantes, recantos para descanso, duchas e cascatas.\n A estrada termina na Praça da Barragem, ponto de captação de água para a cidade de Teresópolis."},
            {nome:"Trilha Suspensa",imagem:img2,dificuldade:"leve",extensao:"1.300m",dur:"1 hora",texto:"Uma das grandes atrações do PARNASO, a trilha suspensa começa na Praça da Barragem. A trilha possui piso de madeira e corrimão, permitindo acesso até a cadeirantes. Construída sobre um aqueduto do início do século XX, esta trilha corta um trecho de Mata Atlântica em nível elevado em relação ao terreno, permitindo ao visitante uma observação mais próxima da copa das árvores. A trilha é circular, retornando para a Estrada da Barragem por escadarias. Uma escada dá acesso a poços do rio Paquequer, ótima opção de banho em dias quentes. Iniciando pela Praça da Barragem é possível caminhar até a escada que desce à esquerda voltando para a Estrada da Barragem (mirante do Beija Flor)."},
            {nome:"Trilha Primavera",imagem:img3,dificuldade:"leve",extensao:"cerca de 500m",dur:"15 minutos",texto:"A trilha tem 15 minutos de caminhada leve, para todas as idades. O visitante experimenta a sensação de estar em uma mata preservada, sendo possível observar inúmeras espécies. Entre elas destaca-se o palmito-juçara (Euterpe edulis), espécie ameaçada de extinção pelo corte indiscriminado."},
            {nome:"Trilha Mozart Catão",imagem:img4,dificuldade:"leve a moderado",extensao:"800m",dur:"1 hora e 30 minutos (ida e volta)",texto:"Esta trilha cruza pequenos cursos d'água e floresta de encosta até chegar ao Mirante Alexandre Oliveira (foto acima), com vista para a cidade de Teresópolis e o Parque Estadual dos Três Picos, ao fundo. Os nomes da trilha e do mirante homenageiam dois alpinistas da cidade, mortos ao tentar escalar a face sul do Aconcágua, em 1998."}, 
            {nome:"Trilha Cartão Postal",imagem:img5,dificuldade:"moderado",extensao:"1.200m",dur:"2 horas (ida e volta)",texto:"Esta bela trilha, com acesso pela Estrada da Barragem próximo à pousada, cruza área de floresta com belas vistas da montanha e dá acesso a um mirante voltado para a cadeia de montanhas da Serra dos Órgãos, proporcionando ao visitante um novo ângulo de observação do Dedo de Deus do meio da floresta. No caminho é possível observar algumas grandes árvores, como o jequitibá."}, 
            {nome:"Trilha da Pedra do Sino",imagem:img6,dificuldade:"moderado a pesado",extensao:"cerca de 11 Km",dur:"5 a 6 horas",texto:"A Pedra do Sino é o ponto culminante da Serra dos Órgãos com 2.275m e lá do alto a vista alcança toda a Baía de Guanabara, a cidade do Rio de Janeiro e parte do Vale do Paraíba, no lado continental. O acesso feito por trilha é um clássico do montanhismo. São cerca de 11 km (cinco a seis horas) de caminhada desde a sede do Parque, em Teresópolis, a 1.100 metros de altitude, até o ponto culminante da serra. O primeiro trecho é mais leve, por dentro da mata, com calçamento da época do Império. As duas cachoeiras no caminho são boas opções de parada. A trilha é acidentada e seu acesso é limitado a 100 pessoas por dia. A trilha é também o trecho final da tradicional travessia Petrópolis-Teresópolis."}, 
        ]
    }

    render () {
        return(
            <div className="row conteudo">
                <div className="col-md-12">
                    <div className="trilhas">
                        <div className="titulo">
                            <h1>Trilhas</h1>
                        </div>
                        <div className="lista1">
                            <h3>Trilhas Principais</h3>
                            <ul>
                                {this.state.listaTrilhas.map(trilha =>(<li key={trilha._id}>{trilha.nome}</li>))}
                            </ul>
                        </div>
                        <div class="card-deck">
                            {this.state.listaTrilhas.map(trilha =>(
                            <div className="card-trilhas">
                                <div className="card text-white bg-success mb-3">
                                    <img className="card-img-top fotoTrilha" src={trilha.imagem} alt="Foto da Trilha" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{trilha.nome}</h5>
                                        <p className="card-text">{trilha.texto}</p>
                                    </div>
                                    <ul className="list-group list-group-flush text-white bg-success mb-3">
                                        <li className="list-group-item text-white bg-success mb-3">Nível de dificuldade: {trilha.dificuldade}</li>
                                        <li className="list-group-item text-white bg-success mb-3">Extensão: {trilha.extensao}</li>
                                        <li className="list-group-item text-white bg-success mb-3">Duração: {trilha.dur}</li>
                                    </ul>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="mapa">
                            <h2 className="subtitulo">Mapa de Trilhas</h2>
                            <a href={imgMapa} target="_blank"><img src={imgMapa} className="img-responsive" alt="Mapa das trilhas de Teresópolis" /></a>
                        </div>
                    </div>
                </div>
            </div>
            
                    
        )
    }
}

export default Trilhas