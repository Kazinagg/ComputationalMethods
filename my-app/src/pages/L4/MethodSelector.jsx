import React, { useState } from 'react';
import BisectionMethod from './Methods/BisectionMethod'; // Импортируем компонент для метода дихотомии
import IterationMethod from './Methods/IterationMethod';
import NewtonMethod from './Methods/NewtonMethod';
import ChordMethod from './Methods/ChordMethod';
import SecantMethod from './Methods/SecantMethod';
import './L4.css';

const MethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState('bisection');

  return (
    <div>
      <h2>Выберите метод</h2>
      <select style={{}} value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
        <option value="bisection">Метод дихотомии</option>
        <option value="IterationMethod">Метод итераций</option>
        <option value="NewtonMethod">Метод Ньютона</option>
        {/* <option value="ChordMethod">Метод ChordMethod</option> */}
        {/* <option value="SecantMethod">Метод SecantMethod</option> */}
        {/* Добавьте аналогичные опции для остальных методов */}
      </select>

      {selectedMethod === 'bisection' && <BisectionMethod />}
      {selectedMethod === 'IterationMethod' && <IterationMethod />}
      {selectedMethod === 'NewtonMethod' && <NewtonMethod />}
      {/* {selectedMethod === 'ChordMethod' && <ChordMethod />} */}
      {/* {selectedMethod === 'SecantMethod' && <SecantMethod />} */}
      {/* Добавьте аналогичные условия для остальных методов */}
    </div>
  );
};

export default MethodSelector;
