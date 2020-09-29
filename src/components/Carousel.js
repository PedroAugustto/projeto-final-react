import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slide1 from '../img/Slide1.PNG';
import Slide2 from '../img/Slide2.PNG';
import Slide3 from '../img/Slide3.PNG';
import Slide4 from '../img/Slide4.PNG';

export default () => (
  <Carousel autoPlay>
    <div>
      <img src={Slide1} className= "img-responsive" alt="slide 1"/>
      <p className="legend">Dedo de Deus</p>
    </div>
    <div>
      <img src={Slide2} className= "img-responsive" alt="slide 2"/>
      <p className="legend">Pedra do Sino</p>
    </div>
    <div>
      <img src={Slide3} className= "img-responsive" alt="slide 3"/>
      <p className="legend">Sede Teresópolis</p>
    </div>
    <div>
      <img src={Slide4} className= "img-responsive" alt="slide 4"/>
      <p className="legend">Capela Antiga - Guapimirim</p>
    </div>
  </Carousel>
);
