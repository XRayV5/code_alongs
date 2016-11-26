
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = x;
  }
  return arr;
}

function glycemiator(word) {

  if (word.length < 3) {
    return word;
  }

  var first = word.charAt(0);
  var last = word.charAt(word.length - 1);

// /[.|,]/.

  if (/[.|,]/.test(last)) {
    last = word.charAt(word.length - 2);
    var midsection = word.split('').splice(1, word.length - 3);
    var shuffled = shuffle(midsection).join('');
    return first + shuffled + last + word.charAt(word.length - 1);
  }

  var midsection = word.split('').splice(1, word.length - 2);
  var shuffled = shuffle(midsection).join('');

  return first + shuffled + last;
}

function blockProcessor(paragraph) {
  return paragraph.split(' ').map(function(word) {

    return glycemiator(word);

  }).join(' ');
}

var test = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia."

console.log(blockProcessor(test));

//solution 2

var input = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, \n"
+ "the only important thing is that the first and last letter be in the right place. \n"
+ "The rest can be a total mess and you can still read it without a problem.\n"
+ "This is because the human mind does not read every letter by itself, but the word as a whole. \n"
+ "Such a condition is appropriately called Typoglycemia.";



function typoglycemia(input){
    return input.replace(/\b\w+\b/gm,function(word){ //this is a fancy way to split the string into words using 'replace()' with regex \d=Matches a zero-width word boundary \w=alphanumeric character g=global m=multiline

      // console.log(word);

        var w, typo = word;

        while (typo === word && word.length >= 4){
            w = word.split('');
            typo = w.shift() + '';
            while (w.length > 1) typo += w.splice(Math.random() * w.length - 1, 1);
            typo += w.length ? w[0] : '';
        }
        return typo;
    });
}

console.log(typoglycemia(input));
