import React from 'react';

import Card from './Card';

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  /* Math.random() pega um valor entre 0 e 1. parseInt transforma no próximo valor inteiro*/
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>Resultado: </span>
        <strong>{aleatorio}</strong>
      </div>
    </Card>
  );
};
