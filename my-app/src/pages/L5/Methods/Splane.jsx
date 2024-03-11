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
const Spline  = require('cubic-spline');



const Splane = ({data}) => {
    const [_data, setData] = useState(data);
    const x = data.map(item => parseFloat(item.x));
    const y = data.map(item => item.y);
    
    // new a Spline object
    const spline = new Spline(x, y);
    // const si = new SplineInterpolator({ xs: x, ys: y });
    const h = parseFloat(_data[1].x) - parseFloat(_data[0].x);



    const f_splane = () => {
        let newData = [];
        
    
        for (let i = 0; i < _data.length; i++) {
          const newX = (parseFloat(_data[i].x) + h / 2).toFixed(2);
          const result = spline.at(newX);
          newData.push(_data[i], {x: newX, y: result});
        }
        setData(newData);
      }
    
      const options = {
        scales: {
          y: {
            // min: -2,
            // max: 4,
          },
        },
      };
    return (
        <div>
            <h1>Кубический сплайн</h1>
            <button onClick={f_splane}>Решить</button>
            <Line options={options} data={{
                datasets: [
                {
                label: 'Кубический сплайн',
                data: _data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],}} />
        </div>
        
    );
};

export default Splane;







// const cubicSpline = () => {
//     const n = data.length;
//     const h = new Array(n).fill(0);
//     const alpha = new Array(n).fill(0);
//     const l = new Array(n).fill(0);
//     const mu = new Array(n).fill(0);
//     const z = new Array(n).fill(0);
//     const c = new Array(n).fill(0);
//     const b = new Array(n).fill(0);
//     const d = new Array(n).fill(0);

//     for (let i = 0; i < n - 1; i++) {
//         h[i] = data[i + 1].x - data[i].x;
//     }

//     for (let i = 1; i < n - 1; i++) {
//         alpha[i] = (3 / h[i]) * (data[i + 1].y - data[i].y) - (3 / h[i - 1]) * (data[i].y - data[i - 1].y);
//     }

//     l[0] = 1;

//     for (let i = 1; i < n - 1; i++) {
//         l[i] = 2 * (data[i + 1].x - data[i - 1].x) - h[i - 1] * mu[i - 1];
//         mu[i] = h[i] / l[i];
//         z[i] = (alpha[i] - h[i - 1] * z[i - 1]) / l[i];
//     }

//     l[n - 1] = 1;

//     for (let j = n - 2; j >= 0; j--) {
//         c[j] = z[j] - mu[j] * c[j + 1];
//         b[j] = (data[j + 1].y - data[j].y) / h[j] - h[j] * (c[j + 1] + 2 * c[j]) / 3;
//         d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
//     }

//     const splines = data.map((point, i) => ({
//         a: point.y,
//         b: b[i],
//         c: c[i],
//         d: d[i],
//         x: point.x
//     }));
//     console.log(splines);
//     return splines;
// }