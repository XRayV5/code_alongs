function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}


function gradience(p1, p2, grade){
  var bandR = (p1.r - p2.r)/grade;
  var bandG = (p1.g - p2.g)/grade;
  var bandB = (p1.b - p2.b)/grade;
  var r1 = p1.r;
  var g1 = p1.g;
  var b1 = p1.b;

  var belt = [];
  belt.push({
    r: p1.r,
    g: p1.g,
    b: p1.b
  });
  for(var i = 0; i < grade; i++){
    r1 -= bandR;
    g1 -= bandG;
    b1 -= bandB;


    if(i == grade - 1){
      r1 = p2.r;
      g1 = p2.g;
      b1 = p2.b;
    }

    belt.push({
      r: Math.floor(r1),
      g: Math.floor(g1),
      b: Math.floor(b1)
    });

  }

  return belt;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function render(belt){
  $(".wrapper").empty();
  belt.forEach(function(e){
    console.log(e);
    $(".wrapper").append("<div class='band' style='background-color:"+ rgbToHex(e.r, e.g, e.b) +";'>"+ rgbToHex(e.r, e.g, e.b) +"</div>");

  });

}


console.log(hexToRgb("#0033ff").r +" "+ hexToRgb("#0033ff").g +" " + hexToRgb("#0033ff").b ); // "51";
console.log(hexToRgb("#DDE4FF").r +" "+ hexToRgb("#DDE4FF").g +" " + hexToRgb("#DDE4FF").b ); // "51";
console.log(rgbToHex(hexToRgb("#0033ff").r, hexToRgb("#0033ff").g, hexToRgb("#0033ff").b));


console.log(hexTo10("#0033ff").r +" "+ hexTo10("#0033ff").g +" " + hexTo10("#0033ff").b ); // "51";
console.log(hexTo10("#DDE4FF").r +" "+ hexTo10("#DDE4FF").g +" " + hexTo10("#DDE4FF").b );
console.log(hexTo10("#03F").r +" "+ hexTo10("#03F").g +" " + hexTo10("#03F").b );
// var t1 = hexToRgb("#0033ff");
// var t2 = hexToRgb("#DDE4FF");
// // #ffcc00 #cc33ff
// var b = gradience(t1, t2, 100);
// render(b);



// var t1 = hexToRgb("#ffcc00");
// var t2 = hexToRgb("#cc33ff");
// // // #ffcc00 #cc33ff
// var b = gradience(t1, t2, 100);
// render(b);

// var t1 = hexTo10("#0033ff");
// var t2 = hexTo10("#DDE4FF");
// // #ffcc00 #cc33ff
// var b = gradience(t1, t2, 100);
// render(b);


function hexTo10(code){

  if(code.length === 7){
    var r = code.substring(1, 3);
    var g = code.substring(3, 5);
    var b = code.substring(5, 7);
  }else{
    var r = code.substring(1, 2) + code.substring(1, 2);
    var g = code.substring(2, 3) + code.substring(2, 3);
    var b = code.substring(3, 4) + code.substring(3, 4);
  }
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16)
  }
}



$("#showBtn").on("click", function(){

  var colorFrom = $('#from').val();
  var colorTo = $('#to').val();
  var steps = $('#steps').val();
  var t1 = hexToRgb(colorFrom);
  var t2 = hexToRgb(colorTo);
  // // #ffcc00 #cc33ff
  var b = gradience(t1, t2, steps);
  render(b);
});



// console.log("#" + ((1 << 24) + (221 << 16) + (228 << 8) + 255).toString(16).slice(1));
// console.log("#" + ((221 << 16) + (228 << 8) + 255).toString(16).slice(1));
// console.log("#" + ((1 << 24) + (221 << 16) + (228 << 8) + 255).toString(8));
// console.log("#" + ((1 << 24) + (221 << 16) + (228 << 8) + 255).toString(2));
// console.log("#" + ((1 << 24) + (221 << 16) + (228 << 8) + 255));
