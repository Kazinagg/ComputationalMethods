import React, { useState } from 'react';

const IterationMethod = () => {
  const [x0, setX0] = useState(0);
  const [epsilon, setEpsilon] = useState(0.001);
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    const maxIterations = 1000; // Максимальное количество итераций (чтобы избежать зацикливания)

    // Переводим введенные значения в числа
    const initialGuess = parseFloat(x0);
    const tolerance = parseFloat(epsilon);

    // Функция для итераций
    const iterate = (x) => Math.sin(x) + Math.pow(x, 2) - 1;

    let currentX = initialGuess;

    for (let i = 0; i < maxIterations; i++) {
      const nextX = iterate(currentX);

      if (Math.abs(nextX - currentX) < tolerance) {
        setResult(nextX);
        return;
      }

      currentX = nextX;
    }

    setResult('Не удалось найти корень, достигнув максимального числа итераций.');
  };

  return (
    <div>
      <h2>Метод итераций</h2>
      <div className='duo-container'>
        <label>Начальное приближение (x0):</label>
        <input type="number" value={x0} onChange={(e) => setX0(e.target.value)} />
      </div>
      <div className='duo-container'>
        <label>Точность (ε):</label>
        <input type="number" value={epsilon} onChange={(e) => setEpsilon(e.target.value)} />
      </div>
      <button onClick={solveEquation}>Решить</button>
      {result !== null && <p>{typeof result === 'string' ? result : `Корень уравнения: ${result}`}</p>}
    </div>
  );
};

export default IterationMethod;
