import React, { useState } from 'react';
import BisectionMethod from './Methods/BisectionMethod'; // Импортируем компонент для метода дихотомии
import IterationMethod from './Methods/IterationMethod';
import ChordMethod from './Methods/Newton-chordMethod';
import SecantMethod from './Methods/Newton-secantMethod';
import Сonvergencer from './Сonvergencer';

import './L4.css';

const MethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState('bisection');

  return (
    <div>
      <h2>Выберите метод</h2>
      <select style={{}} value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
        <option value="bisection">Метод дихотомии</option>
        <option value="IterationMethod">Метод итераций</option>
        <option value="ChordMethod">Метод Ньютона-хорд</option>
        <option value="SecantMethod">Метод Ньютона-секущих</option>
        <option value="Сonvergencer">Нахождение сходимости</option>
      </select>

      {selectedMethod === 'bisection' && <BisectionMethod />}
      {selectedMethod === 'IterationMethod' && <IterationMethod />}
      {selectedMethod === 'ChordMethod' && <ChordMethod />}
      {selectedMethod === 'SecantMethod' && <SecantMethod />}
      {selectedMethod === 'Сonvergencer' && <Сonvergencer />}
    </div>
  );
};

export default MethodSelector;
