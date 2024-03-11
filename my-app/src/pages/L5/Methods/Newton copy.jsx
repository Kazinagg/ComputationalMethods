import React, {useState, useEffect} from 'react';
//import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


const Newton = ({data}) => {
  const [_data, setData] = useState(data);
  useEffect(() => {
    console.log(data.length)
    console.log(data)

    if (!Array.isArray(data)) {
      return <div>Ошибка: данные не предоставлены или не являются массивом.</div>;
    }



    const newton = () =>{
      console.log(data.length)
      console.log(data)
      console.log(data.length)
      // const factorFunc = (num) => {
      //   return (num > 1) ? num *= factorFunc(num - 1) : num;
      // };
      //  const [dano, setData] = useState(data); // Используйте ваши данные
      //  const newtonPolynomial = newtonInterpolation(data);
      const h = parseFloat(data[0].x) - parseFloat(data[1].x);


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

      console.log(data.length)
      console.log(data)

      const N = (x) =>{
        for (let i = 0; i < 9; i++) {
          var result_n = x*2// = (d_y[n])/(factorFunc(n)*h))*(x-x_n-1)
        }
        return result_n// + N() //(d_y[n])/(factorFunc(n)*h))*(x-x_n-1)
      }
      console.log(data.length)
      console.log(data)

      for (let i = 0; i < data.length; i++) {
        const result = N(data[i].y);
        const newX = (parseFloat(data[i].x) + h / 2).toFixed(1);
        data.splice(i + 1, 0, {x: newX, y: result});
        i++; // Увеличиваем индекс, чтобы пропустить только что вставленное число
      }


      console.log(data.length)
      console.log(data)
      setData(data)
    }
  }, []);

  

  console.log(data.length)
  console.log(data)

  return (
    <div>
      <h1>Интерполяционный полином Ньютона</h1>
      {/* <button onClick={newton}>Решить</button> */}
      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries data={_data}/>
        <XAxis />
        <YAxis />
      </XYPlot>

      <p>{_data[1].x}</p>
      <p>{_data[1].y}</p>
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