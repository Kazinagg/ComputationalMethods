import React, { Component } from 'react';
import MethodSelector from './MethodSelector';

class L4 extends Component {
    render() {
        return (
            <div>
                <h1>Решение неленейных уравнений</h1>
                <MethodSelector />
                {/* <h1>Нахождение сходимости</h1>
                <Сonvergencer /> */}
            </div>
        );
    }
}

export default L4;