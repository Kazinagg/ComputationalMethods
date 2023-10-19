import React, { useState } from 'react';

const NewtonMethod = () => {
  const [x0, setX0] = useState(0);
  const [epsilon, setEpsilon] = useState(0.001);
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    let x = parseFloat(x0);

    while (true) {
      let f_x = Math.sin(x) + Math.pow(x, 2) - 1;
      let f_prime_x = Math.cos(x) + 2 * x; // Производная функции f(x)

      let x_new = x - f_x / f_prime_x;

      if (Math.abs(x_new - x) < epsilon) {
        setResult(x_new);
        return;
      }

      x = x_new;
    }
  };

  return (
    <div>
      <h2>Метод Ньютона</h2>
      <div className='duo-container'>
        <label>Начальное приближение (x0):</label>
        <input type="number" value={x0} onChange={(e) => setX0(e.target.value)} />
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

export default NewtonMethod;
