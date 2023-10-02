function calculate() {
  var matrixInput = document.getElementById("matrix");
  var matrix = [];

  for (var i = 0; i < matrixInput.rows.length; i++) {
    var row = matrixInput.rows[i];
    var rowData = [];

    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];
      var input = cell.querySelector("input");

      if (input) {
        rowData.push(Number(input.value));
      }
    }

    matrix.push(rowData);
  }

  var n = matrix.length;
  var coeffMatrix = [];
  var freeVals = []; 

  for (let i = 0; i < n; i++) {
    coeffMatrix[i] = [];
    for (let j = 0; j < n; j++) {
      coeffMatrix[i][j] = matrix[i][j];
    }
    freeVals[i] = matrix[i][n];
  }

  var maxIterations = document.getElementById("maxIterations").value;
  var tolerance = document.getElementById("tolerance").value;

  var result = solveSLAU(coeffMatrix, freeVals, maxIterations, tolerance);

  document.getElementById("result").value = result.toString();
}

function solveSLAU(coeffMatrix, freeVals, maxIterations, tolerance) {
  var n = coeffMatrix.length;
  var prevSolution = [];
  for (let i = 0; i < n; i++) {
    prevSolution[i] = 0;
  }

  for (let numIter = 0; numIter < maxIterations; numIter++) {
    var currSolution = [];
  
    for (let i = 0; i < n; i++) {
      var sum1 = 0, sum2 = 0;
      for (let j = 0; j < i; j++) {
        sum1 += coeffMatrix[i][j] * (currSolution[j] || 0);
      }
      for (let j = i+1; j < n; j++) {
        sum2 += coeffMatrix[i][j] * (prevSolution[j] || 0);
      }
      currSolution[i] = (freeVals[i] - sum1 - sum2) / coeffMatrix[i][i];
    }

    var error = currSolution.reduce((maxError, xi, i) => {
      return Math.max(maxError, Math.abs(prevSolution[i] - xi));
    }, -Infinity);

    if (error < tolerance) {
      return currSolution;
    }
    
    prevSolution = currSolution;
  }

  throw new Error('The method did not converge');
}
