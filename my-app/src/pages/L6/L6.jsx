import React from 'react';

const L6 = () => {

    const f = (x, k) => {
        return Math.pow(x, k) * Math.exp(k);
    }


    const integral_m = (a, b, n, k) => {
        var sum = 0
        for (var i = a; i < b; i+=0.001) {
            sum += (f(i, k)+(Math.abs(f(i+0.001, k)-f(i, k))/2))*0.001;
            // console.log(sum)
        }
        return sum * 1/Math.exp(1);
    }

    let I_1 = integral_m(0, 1, 10000, 1)
    let I_50 = integral_m(0, 1, 10000, 50)
    console.log(I_1)
    console.log(I_50)

    let I_1to50 = [I_1];
    for (let i = 0; i < 50; i++) {
        I_1to50.push(1 - i*I_1to50[i])
    }


    let I_50to1 = [I_50];
    for (let i = 49; i > 0; i--) {
        
        I_50to1.push((1-I_50to1[I_50to1.length - 1])/i);
    }


    console.log(I_1to50)
    console.log(I_50to1)
    

    return (
        <div>
            <h1>Выбор метода вычислений</h1>
            {/* Выводим значения интегралов */}
            <p>Интеграл от 1 = {I_1}</p>
            <p>Интеграл от 50, полученный из 1 = {I_50to1[I_50to1.length - 1]}</p>
            
            <br/><br/>
    
            {/* Выводим значения интегралов, полученных из других значений */}
            <p>Интеграл от 50 = {I_50}</p>
            <p>Интеграл от 1, полученный из 50 = {I_1to50[I_1to50.length - 1]}</p>
        </div>
    );
    
}

export default L6;
