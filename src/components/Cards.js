import React from 'react';
import Card from './Card';
import china from '../assets/china.jpg';
import cmp from '../assets/cmp.jpeg';
import rover from '../assets/rover .jpeg';

const cards = [
  {
    id: 1,
    title:
      'China, en busca del liderazgo tecnológico: el ambicioso plan a 5 años enfocado en IA, biotecnología, exploración espacial y más',
    image: china,
    url: 'https://www.xataka.com/empresas-y-economia/china-busca-liderazgo-tecnologico-ambicioso-plan-a-5-anos-enfocado-ia-biotecnologia-exploracion-espacial'
  },
  {
    id: 2,
    title: 'Nvidia lanza CMP, una gráfica sin gráficos que solo sirve para minar criptodivisas',
    image: cmp,
    url: 'https://www.xataka.com/criptomonedas/nvidia-lanza-cmp-grafica-graficos-que-solo-sirve-para-minar-criptodivisas'
  },
  {
    id: 3,
    title: 'Perseverance se pone manos a la obra: realiza su primera exploración en Marte en busca de restos de vida marciana',
    image: rover,
    url: 'https://www.xataka.com/espacio/perseverance-se-pone-manos-a-obra-realiza-su-primera-exploracion-marte-busca-restos-vida-marciana'
  },
];

function Cards() {
  console.log(cards);
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className='row'>
        {cards.map((card) => (
          <div key={card.id} className='col-md-4'>
            <Card title={card.title} imageSource={card.image} url={card.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
