var thisArray = ["Skynet","Digital Music Distribution",
"FitBit","Realtime Data","ManPacks","Landing Page",
"Conversion Funnel","Social Network","Airbnb","SnapChat",
"Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query",
"Node.js Server","KickStarter","Match.com","Adultfriendfinder",
"Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine",
"Distributed Social Network","Quadcopter","Daring Fireball",
"Content Distribution Network","Analytics Platform","OpenTable",
"LinkedIn","Brick and Mortar Solution","Aggregator","Social Game","jQuery Plugin","Game-based Incentive","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Zivity","Playboy","Cloud Storage Provider","Kindle Fire App","Pandora","Green Tech Program","Eco-Friendly Marketplace",
"Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","Mac App","SEO Optimizer","Apartment Guide","Social CRM","Database Abstraction Layer","Microblogging Service","Product Curation Service","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Digg 2.0",
"Recommendation Engine","News Recommender","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];

var thatArray = ["Facebook Platform","Erlang Enthusiasts","Ex-Girlfriends",
"Mitt Romney's Hair","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists",
"Cracked iPhone Apps","Stolen Goods","Adult Dancers","People Who Hate Groupon","Hunters","Sysadmins","Bath Salts","Nootropics","California","Government Corruption","Political Attack Ads","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics",
"Camp Counselors","Nature Blogs","World of Warcraft","Models","Family Guy Enthusiasts","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Presentation Tools","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes", "Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Happy Families","Social Outcasts",
"Surgeons","Pounding Jagger Bombs","Textbooks","Coffee Shops","Baristas"];


  //The event adder function
  var listenerAdder = function(calculator,buttonElmt,eventAdd){
    var btnEventPointer = document.getElementById(buttonElmt);
    console.log(btnEventPointer);
    btnEventPointer.addEventListener(eventAdd,calculator);
  }




function randomIdx(arrLth){
  
 var rdm =  Math.floor((Math.random() *arrLth));
 return rdm
}


function genStartUp()
{
  var thisIdx = randomIdx(thisArray.length);
  var thatIdx = randomIdx(thatArray.length);
  var idea = thatArray[thatIdx]+" "+thisArray[thisIdx];
  var ideaTag = document.createElement('p');
  ideaTag.textContent = idea;
  var bodyTag = document.getElementsByTagName('body')[0];
  bodyTag.appendChild(ideaTag);
}
/*
function searchStartUp(query)
{
  var result = document.getElementsTagName('ul')[0]; 
  var expQ = RegExp(query);
  for(var i=0; i<thisArray.length;i++){
    var hitIdx = thisArray[i].search(expQ);
    var hit = document.creatElement('li'); 
   if(hitIdx!==-1){
     hit.textContent = thisArray[i];
  }else{
     hit.textConent = "Sorry, that is not a good idea!";
  }
  }
}*/

genStartUp();

function evenOdd(numberEO){
	if(numberEO%2){
		console.log(numberEO+" is Odd");
	}else{
		console.log(numberEO+" is Even");
	}
}
//evenOdd(20);
function evenOdd(numberEO){
	if(numberEO==2){
		console.log(numberEO+" is Odd");
	}else{
		console.log(numberEO+" is Even");
	}
}

//Trick recursion

function evenOdd_R(numberEO){
	if(numberEO===0){
		return console.log("This number is even");
	}
	if(numberEO===1){
		return console.log("This number is odd");
	}
	evenOdd_R(numberEO%2);
}

//Real Recursion
function evenOdd_True(numberEO){
	if(numberEO<0){
	       return console.log("This number is Odd");
         }
	if(numberEO===0){
	       return console.log("This numbe is even");
	}
        evenOdd_True(numberEO-2);
}


evenOdd_True(19);

evenOdd_True(20);

evenOdd_True(21);




evenOdd_R(19);
evenOdd_R(20);
evenOdd_R(23);


