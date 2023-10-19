import React, { useState } from 'react';

const ChordMethod = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [epsilon, setEpsilon] = useState(0.001);
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    let aVal = parseFloat(a);
    let bVal = parseFloat(b);

    while (true) {
      let f_a = Math.sin(aVal) + Math.pow(aVal, 2) - 1;
      let f_b = Math.sin(bVal) + Math.pow(bVal, 2) - 1;

      let c = (aVal * f_b - bVal * f_a) / (f_b - f_a);

      if (Math.abs(c - bVal) < epsilon) {
        setResult(c);
        return;
      }

      aVal = bVal;
      bVal = c;
    }
  };

  return (
    <div>
      <h2>Метод хорд</h2>
      <div className='duo-container'>
        <label>Начальная граница интервала (a):</label>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div className='duo-container'>
        <label>Конечная граница интервала (b):</label>
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className='duo-container'>
        <label>Точность (ε):</label>
        <input type="number" value={epsilon} onChange={(e) => setEpsilon(e.target.value)} />
      </div>
      <button onClick={solveEquation}>Решить</button>
      {result && <p>Корень уравнения: {result}</p>}
    </div>
  );
};

export default ChordMethod;
