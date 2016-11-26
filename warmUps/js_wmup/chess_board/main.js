

var doChessBoard = function(colr,size){
  var tableField;
  tableField = document.getElementById("tableField");
  for(var i=1;i<=size;i++){
    var println = document.createElement('tr');
    var theLine ="";
    for(var j=1;j<=size;j++){
    if(i%2){
      if(j%2){
      theLine+="<td width=20 height=12 class="+colr+">&nbsp</td>";
    }else{
      theLine+="<td>&nbsp</td>";
    }
  }else{
    if(!(j%2)){
    theLine+="<td width=20 height=12 class="+colr+">&nbsp</td>";
  }else{
    theLine+="<td>&nbsp</td>";
  }
  }

    println.innerHTML =theLine;
    tableField.appendChild(println);
  }
}}
doChessBoard("blkGrid",10);
doChessBoard("rdGrid",16);
doChessBoard("grGrid",36);
