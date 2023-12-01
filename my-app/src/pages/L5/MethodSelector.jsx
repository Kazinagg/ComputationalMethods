import React, { useState } from 'react';
import Newton from './Methods/Newton';
import Lagrange from './Methods/Lagrange';
import Splane from './Methods/Splane';


const data = {
  k: Array.from({length: 20}, (_, i) => i + 1),
  x_k: Array.from({length: 20}, (_, i) => (0.1 * (i + 1)).toFixed(1)),
  y_k: [2.18, 2.43 ,2.40, 2.43, 2.65, 2.75, 2.67, 2.66, 2.63, 2.75, 2.41, 2.24, 2.12, 1.74, 1.57, 1.17, 0.96, 0.63, 0.25, 0.01]
};


//import './L4.css';

const MethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState('Newton');

  return (
    <div>
      <h2>Выберите метод</h2>
      <select style={{}} value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
        <option value="Newton">полином Ньютона</option>
        <option value="Lagrange">полином Лагранжа</option>
        <option value="Splane">Кубический сплайн</option>
      </select>
      {selectedMethod === 'Newton' && <Newton data={data}/>}
      {selectedMethod === 'Lagrange' && <Lagrange data={data}/>}
      {selectedMethod === 'Splane' && <Splane />}
    </div>
  );
};

export default MethodSelector;
