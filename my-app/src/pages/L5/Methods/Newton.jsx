import React, {useState} from 'react';
//import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';




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
  const factorFunc = (num) => {
    return (num > 1) ? num *= factorFunc(num - 1) : num;
  };
//  const [dano, setData] = useState(data); // Используйте ваши данные
  //  const newtonPolynomial = newtonInterpolation(data);
  const h = data[0].x - data[1].x;
  const N = (x) =>{
    for (let i = 0; i < 9; i++) {
      (d_y[n])/(factorFunc(n)*h))*(x-x_n-1)
    }
    return 1 //(d_y[n])/(factorFunc(n)*h))*(x-x_n-1)
  }
  return (
    <div>
      <h1>Интерполяционный полином Ньютона</h1>

      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries data={data}/>
        <XAxis />
        <YAxis />
      </XYPlot>

      <p>{data[0].x}</p>
      <p>{data[0].y}</p>
    </div>
    );
};

export default Newton;