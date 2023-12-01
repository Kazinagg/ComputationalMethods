import React, { useState } from 'react';

const SecantMethod = () => {
  const [epsilon, setEpsilon] = useState(0.001);
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    // Функция для вычисления значения уравнения
    const equation = (x) => {
      return Math.sin(x) + Math.pow(x, 2) - 1;
    };

    // Один из начальных приближений x0
    let x0 = -1;
    
    // Другой начальный приближене x1
    let x1 = 0;

    // Проверка сходимости
    let delta = epsilon + 1;

    // Пока не достигнута заданная точность
    while (delta >= epsilon) {
      // Метод Ньютона-секущих
      let x2 = x1 - (equation(x1) * (x1 - x0)) / (equation(x1) - equation(x0));

      // Вычисляем разницу между текущим и предыдущим приближением
      delta = Math.abs(x2 - x1);

      // Обновляем значения x0 и x1
      x0 = x1;
      x1 = x2;
    }

    // Устанавливаем найденный корень
    setResult(x1);
  };

  return (
    <div>
      <h2>Метод Ньютона-секущих</h2>
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
