import React from "react";

const Сonvergencer = () => {
  // const [x, setXn] = useState(1);
  const a = 2;
  const f1 = (x) => {
    return (a/x)
  }
  const f2 = (x) => {
    return ((1/2)*(x+(a/x)))
  }

  const f1_C = () => {
    let x = 1;
    for (let i = 0; i<100;i++) {
      x = f1(x);
      // console.log(x);
    }
    if (Math.abs(x - f1(x)) < 0.001){
      return `Сходится и примерно равна: ` + x
    }else return 'Не сходится'
  }

  const f2_C = () => {
    let x = 1;
    for (let i = 0; i<100;i++) {
      x = f2(x);
      // console.log(x);
    }
    if (Math.abs(x - f2(x)) < 0.001){
      return `Сходится и примерно равна: ` + x
    }else return 'Не сходится'
  }

  return (
    <div>
      <h1>Проверка сходимости функций</h1>
      <p>
        a = {a}
      </p>
      <p>
        Функция a/x_n: {f1_C()}
      </p>
      <p>
        Функция (1/2)*(x_n+(a/x_n)): {f2_C()}
      </p>
      {/* <button onClick={сonvergencer}>Расчитать</button> */}
    </div>
  );
};

export default Сonvergencer;
