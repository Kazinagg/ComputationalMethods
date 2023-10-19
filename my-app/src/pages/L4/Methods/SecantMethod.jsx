import React, { useState } from 'react';

const SecantMethod = () => {
  const [x0, setX0] = useState(0);
  const [x1, setX1] = useState(1);
  const [epsilon, setEpsilon] = useState(0.001);
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    let x0Val = parseFloat(x0);
    let x1Val = parseFloat(x1);

    while (true) {
      let f_x0 = Math.sin(x0Val) + Math.pow(x0Val, 2) - 1;
      let f_x1 = Math.sin(x1Val) + Math.pow(x1Val, 2) - 1;

      let x_new = x1Val - (f_x1 * (x1Val - x0Val)) / (f_x1 - f_x0);

      if (Math.abs(x_new - x1Val) < epsilon) {
        setResult(x_new);
        return;
      }

      x0Val = x1Val;
      x1Val = x_new;
    }
  };

  return (
    <div>
      <h2>Метод секущих</h2>
      <div className='duo-container'>
        <label>Начальное приближение (x0):</label>
        <input type="number" value={x0} onChange={(e) => setX0(e.target.value)} />
      </div>
      <div className='duo-container'>
        <label>Второе начальное приближение (x1):</label>
        <input type="number" value={x1} onChange={(e) => setX1(e.target.value)} />
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

export default SecantMethod;
