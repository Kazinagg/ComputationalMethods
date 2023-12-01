import React, {useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// function newtonInterpolation(data) {
//   const n = data.length;
//   const coefficients = new Array(n).fill(0);

//   for (let i = 0; i < n; i++) {
//     coefficients[i] = data[i].y_k;
//   }

//   for (let i = 1; i < n; i++) {
//     for (let j = n - 1; j >= i; j--) {
//       coefficients[j] = (coefficients[j] - coefficients[j - 1]) / (data[j].x_k - data[j - i].x_k);
//     }
//   }

//   return function(x) {
//     let sum = coefficients[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//       sum = sum * (x - data[i].x_k) + coefficients[i];
//     }
//     return sum;
//   };
// }
const Newton = ({data}) => {
  const [dano, setData] = useState(data); // Используйте ваши данные

  //  const newtonPolynomial = newtonInterpolation(data);

  return (
    <div>
      <h1>Интерполяционный полином Ньютона</h1>
      <Doughnut data={dano} />
      <p>{dano.k }</p>
      <p>{dano.x_k}</p>
      <p>{dano.y_k}</p>
    </div>
    );
};

export default Newton;