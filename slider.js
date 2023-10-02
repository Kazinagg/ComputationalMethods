var elem2 = document.getElementById('matrixSizeRange');

var rangeValue = function(){
  var newValue = elem2.value;
  document.getElementById('matrixSize').value = newValue;
}

elem2.addEventListener("input", rangeValue);






var elem = document.getElementById('matrixSize');

var rangeValue = function(){
  var newValue = elem.value;
  document.getElementById('matrixSizeRange').value = newValue;
}

elem.addEventListener("input", rangeValue);