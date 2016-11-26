function grannyTalk(str){
	var reply;
	if(str.toLowerCase()==="bye"){
		reply="What's that honey? I did't hear you."
		//console.log("What's that honey? I did't hear you.");

        }else if(!(/[a-z]/.test(str))){

		reply="No, not since "+(Math.floor(Math.random()*20+1930));
	//	console.log("No, not since "+(Math.floor(Math.random()*20+1930)));
	}else{
		reply="Speak up sonny Jim.";
		//console.log("Speak up sonny Jim.");
	}
	return reply;
}


console.log(grannyTalk("ABC"));
console.log(grannyTalk("aBC"));
console.log(grannyTalk("Bye"));
console.log(grannyTalk("ABC"));

function granpaTalk(str){
    var inter = grannyTalk(str);
    inter = inter.toUpperCase();
    inter = inter.split("").map(function(e){
	return /[AEIOU]/.test(e)? e.replace(e,randVow()):e;
	});
    //inter = inter.replace(/[AEIOU]/g,randVow());
    //inter = inter.replace(/[2345678]/g,(Math.floor(Math.random()*10)));
    return inter.join("");
}

function randVow()
{
	var vow=['A','E','I','O','U'];
	return vow[Math.floor(Math.random()*5)];
}

//console.log(randVow());

console.log(granpaTalk("ABC"));
console.log(granpaTalk("aBC"));
console.log(granpaTalk("Bye"));
console.log(granpaTalk("ABC"));


function testT(e){
	return /[AEIOU]/.test(e)? e.replace(e,randVow()):e;
	}

console.log(testT("f"));
console.log(testT("O"));


