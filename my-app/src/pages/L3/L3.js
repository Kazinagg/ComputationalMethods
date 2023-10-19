// import React from "react";
import React from 'react';




//   root = root.map(([a,b]) => halfDivision(a, b, f, 0.0001));
// document.getElementById("result").value = root;



const L3 = () => {
    // const [result, setResult] = useState('');


    function f(x) {
        return Math.sin(x) - 0.2 * x;
      }
      
      let root = [];
      for (let i = 2.0; i < 3.0; i += 0.1) {
        if (f(i) * f(i + 0.1) < 0)
            root.push([i, i + 0.1]);
      }
      
      function halfDivision(a, b, f, epsilon) {
        let middle;
        while ((b - a) / 2.0 > epsilon) {
            middle = (a + b) / 2.0;
            if (f(a) * f(middle) <= 0) {
                b = middle;
            } else {
                a = middle;
            }
        }
        return (a + b) / 2.0;
      }
      root = root.map(([a,b]) => halfDivision(a, b, f, 0.0001));
    //   setResult(root)

    return (
        <div>
            <h1>Отделение и уточнение корней уравнения методом половинного деления</h1>
            <h2>sin(x) - 0.2 * x</h2>
            <label htmlFor="result">Результат:</label><br/>
            <textarea id="result" rows="5" cols="30" readOnly value={root}></textarea>
        </div>
    )
};

export default L3;