import React, { useState } from 'react';

const ChordMethod = () => {
  const [epsilon, setEpsilon] = useState(0.001);
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    // Функция для вычисления значения уравнения
    const equation = (x) => {
      return Math.sin(x) + Math.pow(x, 2) - 1
    };

    // Функция для вычисления значения производной уравнения
    const derivative = (x) => {
      return Math.cos(x) + 2*x;
    };

    // Исходная точка x0
    let x0 = 0;

    // Проверка сходимости
    let delta = epsilon + 1;

    // Пока не достигнута заданная точность
    while (delta >= epsilon) {
      // Метод Ньютона
      let x1 = x0 - (equation(x0) / derivative(x0));

      // Метод хорд
      x1 = x1 - ((x1 - x0) * equation(x1)) / (equation(x1) - equation(x0));

      // Вычисляем разницу между текущей и предыдущей точками
      delta = Math.abs(x1 - x0);

      // Обновляем значение x0
      x0 = x1;
    }

    // Устанавливаем найденный корень
    setResult(x0);
  };

  return (
    <div>
      <h2>Метод Ньютона-хорд</h2>
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
