import React, {useState} from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const Newton = ({data}) => {
  const [_data, setData] = useState(data);
  const h = parseFloat(_data[1].x) - parseFloat(_data[0].x);

  function factorialize(num) {
    if (num < 0) 
        return -1;
    else if (num === 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}


  let dy = [data.map(item => item.y)]; // Первая строка содержит все значения y

  for (let i = 0; i < dy.length; i++) {
    let row = dy[i];
    let newRow = [];
    for (let j = 1; j < row.length; j++) {
      newRow.push(parseFloat((row[j] - row[j - 1]).toFixed(2)));
    }
    if (newRow.length > 0) {
      dy.push(newRow);
    }
  }

  const N = (x) => {
    // console.log("Значение x: " + x);
    let xn = 0;
    for (let i = 0; i < data.length; i++) {
      // console.log(dy[i][0]);
      let term = dy[i][0]/(factorialize(i)*Math.pow(h,i));
      // console.log("term " + term);

      for (let j = 0; j < i; j++) {
        term *= (x - data[j].x);
      }

      xn += term;
    }

    // console.log("data.x: " + data);
    return Number(xn.toFixed(2));
}

  const f_newton = () => {
    let newData = [];
    

    for (let i = 0; i < _data.length; i++) {
      const newX = (parseFloat(_data[i].x) + h / 2).toFixed(2);
      const result = N(newX);
      newData.push(_data[i], {x: newX, y: result});
    }
    setData(newData);
    // console.log(newData);
  }

  const options = {
    scales: {
      y: {
        min: -1,
        max: 5,
      },
    },
  };

  return (
    <div>
      <div>
        <h1>Интерполяционный полином Ньютона</h1>
        <button onClick={f_newton}>Решить</button>
      </div>

      <br/><br/><br/>
      {/*options={}*/}
      <Line options={options} data={{
        datasets: [
        {
          label: 'Интерполяционный полином Ньютона',
          data: _data,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],}} />
    </div>
  );
};

export default Newton;












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