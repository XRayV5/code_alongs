function makeFakeMap(x,y){
  var arrX = [];
  var arrY = [];
  for(var i = 0; i<x; i++){
    var arrY = [];
    for(var j = 0; j<y; j++){
      arrY.push('A');
    }
    arrX.push(arrY);
  }
  randX = Math.floor(Math.random() * (x - 0) + 0);
  randY = Math.floor(Math.random() * (y - 0) + 0);
  arrX[randX][randY] = 'X';
  return arrX;
}


function makeFakeMapEx(x,y,k,f,s){
  var arrX = [];
  var arrY = [];
  for(var i = 0; i<x; i++){
    var arrY = [];
    for(var j = 0; j<y; j++){
      arrY.push('A');
    }
    arrX.push(arrY);
  }
  rX = Math.floor(Math.random() * (x - s + 1)) + 0;
  rY = Math.floor(Math.random() * (y - s + 1)) + 0;
  console.log(rX);
  console.log(rY);
  for (var a = rX; a < rX+s; a++){
    for (var b = rY; b < rY+s; b++){
      arrX[a][b] = f;
    }
  }
  tX = Math.floor(Math.random() * ((rX+s) - rX)+ rX);
  tY = Math.floor(Math.random() * ((rY+s) - rY)+ rY);
  arrX[tX][tY] = k;
  return arrX;
}


function formater(arr){
  for(var i = 0; i < arr.length; i++){
    str = "";
    for(var j = 0; j < arr.length; j++){
      str += arr[i][j] + "|";
    }
    str +=  "\n";
    console.log(str);
  }
}

formater(makeFakeMapEx(5,5,'X','F',2))
