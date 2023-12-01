import React, { useState } from 'react';
function lagrangeInterpolation(data) {
  return function(x) {
    let sum = 0;
    const n = data.length;
    for (let i = 0; i < n; i++) {
      let product = data[i].y_k;
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          product *= (x - data[j].x_k) / (data[i].x_k - data[j].x_k);
        }
      }
      sum += product;
    }
    return sum;
  };
}
const Lagrange = () => {
  const [data, setData] = useState([{ k: 0, x_k: 0, y_k: 0 }]); // Замените на ваши данные

  const lagrangePolynomial = lagrangeInterpolation(data);

  return (
    <div>
      <h1>Интерполяционный полином Лагранжа</h1>
      <p>{lagrangePolynomial}</p>
    </div>
  );
};

export default Lagrange;