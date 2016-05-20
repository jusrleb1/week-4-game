var p1 = "Ryu";
var p2 = "Ken";
var player1 = {
		Name: "",
		Country: "",
		Slogan: "",
		smImage: "",
		lgImage: "",
		attack: []
	}

var player2 = {
		Name: "",
		Country: "",
		Slogan: "",
		smImage: "",
		lgImage: "",
		attack: []
	}


var players = {
	Ryu:  {
		Name: "Ryu",
		Country: "Japan",
		Slogan: "The answer lies in the heart of battle.",
		smImg: "../images/small/ryu.png",
		lgImg: "../images/large/ryu.jpg",
		attack: [1,5,10,15,20,25]
	},
	ChunLi: {
		Name: "Chun Li",
		Country: "China",
		Slogan: "Want to see my Kung-Fu? I'll show you.",
		smImg: "../images/small/chunli.png",
		lgImg: "../images/large/chunli.jpg",
		attack: [1,4,11,15,21,25]
	},
	Balrog: {
		Name: "Balrog",
		Country: "United States of America",
		Slogan: "I'll make you regret that you were ever born. You two-bit chump!",
		smImg: "../images/small/balrog.png",
		lgImg: "../images/large/balrog.jpg",
		attack: [1,5,10,11,15,28]
	},
	Blanka: {
		Name: "Blanka",
		Country: "Brazil",
		Slogan: "Seeing you in action is a joke!",
		smImg: "../images/small/blanka.png",
		lgImg: "../images/large/blanka.jpg",
		attack: [1,3,12,13,21,27]
	},
	Dhalsim: {
		Name: "Dhalsim",
		Country: "India",
		Slogan: "Today, I shall win again.",
		smImg: "../images/small/dhalsim.png",
		lgImg: "../images/large/dhalsim.jpg",
		attack: [1,5,10,15,20,25]
	},
	EHonda: {
		Name: "E. Honda",
		Country: "Japan",
		Slogan: "It's only natural that a Sumo should become the World's Strongest!",
		smImg: "../images/small/ehonda.png",
		lgImg: "../images/large/ehonda.jpg",
		attack: [3,7,8,11,15,30]
	},
	Guile: {
		Name: "Guile",
		Country: "United States of America",
		Slogan: "No need for talk. Let's do this!",
		smImg: "../images/small/guile.png",
		lgImg: "../images/large/guile.png",
		attack: [1,3,11,14,19,26]
	},
	Ken: {
		Name: "Ken",
		Country: "United States of America",
		Slogan: "I'm ready for ya, bring it on!",
		smImg: "../images/small/ken.png",
		lgImg: "../images/large/ken.jpg",
		attack: [1,5,10,15,20,25]
	},
	MBison: {
		Name: "M. Bison",
		Country: "Unknown",
		Slogan: "Bow down before my Psycho Power!",
		smImg: "../images/small/mbison.png",
		lgImg: "../images/large/mbison.jpg",
		attack: [1,5,7,12,24,40]
	},
	Sagat: {
		Name: "Sagat",
		Country: "Thailand",
		Slogan: "A strong fighter is not one who always wins, but one who stands after defeat",
		smImg: "../images/small/sagat.png",
		lgImg: "../images/large/sagat.jpg",
		attack: [2,7,8,11,23,30]
	},
	Vega: {
		Name: "Vega",
		Country: "Spain",
		Slogan: "You'll be seeing red by the time I'm done with you...",
		smImg: "../images/small/vega.png",
		lgImg: "../images/large/vega.jpg",
		attack: [1,5,10,15,20,25]
	},
	Zangief: {
		Name: "Zangief",
		Country: "Russia",
		Slogan: "My iron body is invincible! So beware!",
		smImg: "../images/small/zangief.png",
		lgImg: "../images/large/zangief.jpg",
		attack: [1,3,14,15,16,35]
	}
};

function getPlayers() {
	player1 = players[p1];
	player2 = players[p2];
}
getPlayers();

console.log(Object.keys(players).length);
var smallImages = [];
Object.keys(players).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object 
    smallImages.push(players[key].smImg);
});

console.log(smallImages);
console.log(smallImages["0"]);

//for (i = 0; i < smallImages.length; i++) {
//	$("#small-images").append('<img src="' + smallImages[i] + '">');
//};
$( ".small-images" ).append( "<p>Test</p>" );
//$('.small-images').prepend('<img id="theImg" src="#" />');
//$('.small-images').html(smallImages["0"]);
//$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
console.log(smallImages["2"]);





