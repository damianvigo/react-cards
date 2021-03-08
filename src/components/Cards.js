import React from 'react';
import Card from './Card';
import china from '../assets/china.jpg';
import cmp from '../assets/cmp.jpeg';
import rover from '../assets/rover .jpeg';

const cards = [
  {
    id: 1,
    title:
      'China, en busca del liderazgo tecnológico',
    image: china,
    url: 'https://www.xataka.com/empresas-y-economia/china-busca-liderazgo-tecnologico-ambicioso-plan-a-5-anos-enfocado-ia-biotecnologia-exploracion-espacial',
    description: 'Según recoge WSJ, el Gobierno de China presentó recientemente su nuevo plan quinquenal, donde se proponen aumentar el gasto en investigación y desarrollo en más de un 7% anual entre 2021 y 2025...'
  },
  {
    id: 2,
    title: 'Nvidia lanza CMP, una gráfica sin gráficos',
    image: cmp,
    url: 'https://www.xataka.com/criptomonedas/nvidia-lanza-cmp-grafica-graficos-que-solo-sirve-para-minar-criptodivisas',
    description: 'Nvidia CMP (Cruptocurrency Mining Processor) aprovecha la arquitectura y prestaciones de las GeForce RTX, pero sin todos los elementos que las orientan al gaming...'
  },
  {
    id: 3,
    title: 'Perseverance da su primer paseo por Marte',
    image: rover,
    url: 'https://www.xataka.com/espacio/perseverance-se-pone-manos-a-obra-realiza-su-primera-exploracion-marte-busca-restos-vida-marciana',
    description: 'El rover apenas ha viajado un total de cinco metros. Si bien no es nada para nosotros, es toda una hazaña para el Perseverance. Teniendo en cuenta que se encuentra a millones de kilómetro...'
  },
];

function Cards() {
  console.log(cards);
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className='row'>
        {cards.map((card) => (
          <div key={card.id} className='col-md-4'>
            <Card title={card.title} imageSource={card.image} url={card.url} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
