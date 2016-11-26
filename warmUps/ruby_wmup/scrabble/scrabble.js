function scrabble(word){
  scr = 0;

  var p1 = word.match(/[AEIOULNRST]/gi);
  var p2 = word.match(/[DG]/gi);
  var p3 = word.match(/[BCMP]/gi);
  var p4 = word.match(/[FHVWY]/gi);
  var p5 = word.match(/[K]/gi);
  var p6 = word.match(/[JX]/gi);
  var p7 = word.match(/[QZ]/gi);

  if(p1!==null){
    scr += p1.length;
  }
  if(p2!==null){
    scr += p2.length*2;
  }
  if(p3!==null){
    scr += p3.length*3;
  }
  if(p4!==null){
    scr += p4.length*4;
  }
  if(p5!==null){
    scr += p5.length*5;
  }
  if(p6!==null){
    scr += p6.length*8;
  }
  if(p7!==null){
    scr += p6.length*10;
  }
  return scr;
}

console.log(scrabble('abc'));
console.log(scrabble('kf'));
console.log(scrabble('qx'));
