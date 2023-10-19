import React, { useState } from 'react';

const BisectionMethod = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [epsilon, setEpsilon] = useState(0.01);
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    let aVal = parseFloat(a); // Используем другие имена переменных
    let bVal = parseFloat(b);

    let f_a = Math.sin(aVal) + Math.pow(aVal, 2) - 1;
    let f_b = Math.sin(bVal) + Math.pow(bVal, 2) - 1;

    while ((bVal - aVal) / 2 > epsilon) {
      let c = (aVal + bVal) / 2;
      let f_c = Math.sin(c) + Math.pow(c, 2) - 1;

      if (f_c === 0) {
        setResult(c);
        return;
      }

      if (f_c * f_a < 0) {
        bVal = c;
        f_b = f_c;
      } else {
        aVal = c;
        f_a = f_c;
      }
    }

    setResult((aVal + bVal) / 2);
  };

  return (
    <div>
      <h2>Метод дихотомии</h2>
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

export default BisectionMethod;
