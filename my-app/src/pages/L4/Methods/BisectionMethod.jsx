import React, {useState} from 'react';

const BisectionMethod = () => {
  const [epsilon, setEpsilon] = useState(0.01);
  const [result, setResult] = useState(null);


  const solveEquation = () => {
    function f(x) {
      return Math.sin(x) + Math.pow(x, 2) - 1;
    }

    let root = [];
    for (let i = 0.0; i < 3.0; i += 0.1) {
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

    root = root.map(([a, b]) => halfDivision(a, b, f, epsilon));
    setResult(root);
  };
  // root = root.map(([a,b]) => halfDivision(a, b, f, epsilon));

  return (
    <div>
      <h2>Метод дихотомии</h2>
      <div className='duo-container'>
        <label>Точность (ε):</label>
        <input type="number" value={epsilon} onChange={(e) => setEpsilon(e.target.value)}/>
      </div>
      <button onClick={solveEquation}>Решить</button>
      {result && <p>Корень уравнения: {result}</p>}
    </div>
  );
};

export default BisectionMethod;
