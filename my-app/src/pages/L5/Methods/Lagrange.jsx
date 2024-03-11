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


const Lagrange = ({data}) => {
  
  // console.log('Lagrange')
  // console.log(data.length)
  // console.log(data)
  const [_data, setData] = useState(data);
  const h = parseFloat(_data[1].x) - parseFloat(_data[0].x);
  // const {width, ref} = useResizeDetector();

  const f_lagrange = (xi) => {

      var n = _data.length;
      let newData = [];

      for (let i = 0; i < _data.length; i++) {
        const newX = (parseFloat(_data[i].x) + h / 2).toFixed(2);
        newData.push(_data[i], {x: newX});
      }

      
      console.log(newData);
      var m = newData.length;

      var l = [];
      var lagrangeValues = [];

      for(let c = 0; c < m; c++){
        lagrangeValues[c] = 0;
        for(let i = 0; i < n; i++){
            l[i] = 1;
            for(let j = 0; j < n; j++){
                if(i !== j)
                    l[i] *= (newData[c].x - _data[j].x) / (_data[i].x - _data[j].x);
            }
        }
        for(let k = 0; k < n; k++){
            lagrangeValues[c] += l[k] * _data[k].y;
        }
    }
      console.log(l);


      for (let i = 1; i < _data.length*2-1; i+=2) {
        newData[i] = ({x: newData[i].x ,y: lagrangeValues[i]});
      }
      console.log(newData);
      setData(newData);
      // return lagrangeValues;
  }



  const options = {
    scales: {
      y: {
        min: -2,
        max: 4,
      },
    },
  };

  
  return (
    <div>
      <h1>Интерполяционный полином Лагранжа</h1>
      <button onClick={f_lagrange}>Решить</button>
      <br/><br/><br/>
      <Line options={options} data={{
        datasets: [
        {
          label: 'Интерполяционный полином Лагранжа',
          data: _data,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],}} />

      {/* <p>{_data[1].x}</p>
      <p>{_data[1].y}</p> */}
    </div>
    );
};

export default Lagrange;