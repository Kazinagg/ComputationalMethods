var elem = document.getElementById('matrixSize');
var elem2 = document.getElementById('matrixSizeRange');


var matrixSize = function(){
    var newValue = elem.value;
    
    var matrixBody = document.getElementById('matrixBody');
    matrixBody.innerHTML = '';
    var rowSize = Number(newValue); 
    var colSize = Number(newValue)+1; 

    console.log(rowSize)
    console.log(colSize)
    
    var couter = 0
    for (var i = 0; i < rowSize; i++) {
        
        var row = document.createElement('tr');

        for (var j = 0; j < colSize; j++) {
            couter++
            var cell = document.createElement(j === colSize - 1 ? 'td' : 'td');
            if (j !== colSize - 1) {
                cell.innerHTML = `<input type="number" class="matrix-input" value="${Math.floor(Math.random() * 10) + 1}">` + `<i id="X">x<sub>${(j + 1)}</sub></i>`;
            } else {
                cell.innerHTML = `<i id="X">=</i> <input type="text" class="matrix-input-freeVals" value="${((j + 1) * (i + 1))}">`;
                couter--
            }
            row.appendChild(cell);
        }
    matrixBody.appendChild(row);
    }
    
    
}
matrixSize()
elem2.addEventListener("input", matrixSize);
elem.addEventListener("input", matrixSize);

