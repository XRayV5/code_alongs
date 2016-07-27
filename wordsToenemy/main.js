function exchangeFire(red,blue){
  //no need to decide which string is shorter
  var board;
  return board=cancel(red,blue);
}

console.log(exchangeFire("critical", "tical"));
console.log(exchangeFire("critical", "iitical"));

function cancel(short,long){
  //short = new RegExp(short,g);
  var binShort=[];
  var binLong =[];
  for(i=0;i<short.length;i++){
    //var rxp =new RegExp(short.charAt(i));
    //var uniq = long.match(rxp);
    var flag = long.indexOf(short.charAt(i));
    if(flag!==-1){
      //console.log(long.search(short.charAt(i)));
      long=long.replace(long.charAt(long.search(short.charAt(i))),"");
      //debugger
    }else{
      binShort.push(short.charAt(i));
    }
  }
  binLong = long.split("");
  return { short:binShort,long:binLong };
}

/*if(red.length>blue.length){
    board=cancel(blue,red);
}else{board=cancel(blue,red);}*/



function wordsWithEnemies (words) {
    var left, right, i, j, winner;

    words = words.split(" ");
    left = words[0].split("").sort();
    right = words[1].split("").sort();

    for(i = 0; i < left.length; i++) {
        for(j = 0; j < right.length; j++) {
            if (left[i] === right[j]) {
                left.splice(i, 1);
                right.splice(j, 1);
                i -= 1;

            }
        }
    }

    if (left.length > right.length) {
        winner = "Winner: " + words[0];
    } else if (right.length > left.length) {
        winner = "Winner: " + words[1];
    } else {
        winner = "TIE!";
    }

    console.log(words[0] + " vs " + words[1]);
    console.log(winner);
    console.log("Extra Letters: " + left.join("") + right.join("") + "\n ");
}

/*
wordsWithEnemies("abc dab");
wordsWithEnemies("hello below");
wordsWithEnemies("hit miss");
wordsWithEnemies("rekt pwn");
wordsWithEnemies("combo jumbo");
wordsWithEnemies("critical optical");
wordsWithEnemies("isoenzyme apoenzyme");
wordsWithEnemies("tribesman brainstem");
wordsWithEnemies("blames nimble");
wordsWithEnemies("yakuza wizard");
wordsWithEnemies("longbow blowup");*/
