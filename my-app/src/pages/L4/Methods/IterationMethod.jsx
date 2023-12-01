import React, { useState, useEffect } from "react";

const IterationMethod = () => {
  const [x0, setX0] = useState(0.01); // Погрешность
  const [result, setResult] = useState(null); // Результат решения
  const [initialApprox, setInitialApprox] = useState(0); // Начальное приближение

  const calculateFx = (x) => {
    return Math.sin(x) + Math.pow(x, 2) - 1; // Значение функции
  };

  // Инициализация начального приближения с использованием метода половинного деления
  useEffect(() => {
    let x = 0;
    let step = 0.1;
    while (true) {
      let fx = calculateFx(x);
      let fxStep = calculateFx(x + step);

      // Проверяем, поменялся ли знак
      if (fx * fxStep < 0) {
        setInitialApprox((x + x + step) / 2);
        break;
      }

      x += step;
    }
  }, []);

  const solveEquation = () => {
    let x = initialApprox; // Начальное приближение
    let error = x0; // Погрешность
    let maxIterations = 1000; // Максимальное количество итераций

    for (let i = 0; i < maxIterations; i++) {
      let fx = calculateFx(x); // Значение функции
      let dfx = Math.cos(x) + 2 * x; // Производная функции

      let newX = x - fx / dfx; // Новое приближение

      if (Math.abs(newX - x) < error) {
        setResult(newX);
        return;
      }

      x = newX;
    }

    setResult("Ошибка: не удалось найти корень за заданное количество итераций");
  };

  return (
    <div>
      <h2>Метод итераций</h2>
      <div className="duo-container">
        <label>Точность (ε):</label>
        <input
          type="number"
          value={x0}
          onChange={(e) => setX0(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={solveEquation}>Решить</button>
     {result !== null && <p>{typeof result === 'string' ? result : `Корень уравнения: ${result}`}</p>}
    </div>
  );
};

export default IterationMethod;
