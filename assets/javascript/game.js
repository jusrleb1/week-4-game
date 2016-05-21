$(document).ready(function(){	
	// Creates variables
	var p1 = "";
	var p2 = "";
	var p1Power = 100;
	var p2Power = 100;
	var smallImages = [];
	var fighterNames = [];
	var clickCount = 0;

	var background = [
			'assets/images/background/balrog_stage.jpg',
			'assets/images/background/chunli_stage.jpg',
			'assets/images/background/ehonda_stage.jpg',
			'assets/images/background/guile_stage.jpg',
			'assets/images/background/zangief_stage.jpg',
			];
	var randomBG = background[Math.floor(Math.random()*background.length)];
	console.log(randomBG);
	$('.background').css('background', 'url("'+randomBG+'") no-repeat fixed center');

	// Theme music files
	var playerselectMusic = new Audio("assets/music/player-select.mp3");
	var fightMusic = new Audio("assets/music/fight.mp3");
	var winMusic = new Audio("assets/music/win.mp3");
	var loseMusic = new Audio("assets/music/lose.mp3");
	playerselectMusic.play(); 

	// Player 1 Object
	var player1 = {
			Name: "",
			Value: "",
			Country: "",
			Slogan: "",
			smImg: "",
			lgImg: "",
			attack: []
		}

	// Player 2 Object
	var player2 = {
			Name: "",
			Value: "",
			Country: "",
			Slogan: "",
			smImg: "",
			lgImg: "",
			attack: []
		}

	// All Fighters Object
	var fighters = {
		Ryu:  {
			Name: "Ryu",
			Value: "Ryu",
			Country: "Japan",
			Slogan: "The answer lies in the heart of battle.",
			smImg: "assets/images/small/ryu.png",
			lgImg: "assets/images/large/ryu.jpg",
			attack: [1,5,10,15,20,25]
		},
		ChunLi: {
			Name: "Chun Li",
			Value: "ChunLi",
			Country: "China",
			Slogan: "Want to see my Kung-Fu? I'll show you.",
			smImg: "assets/images/small/chunli.png",
			lgImg: "assets/images/large/chunli.jpg",
			attack: [1,4,11,15,21,25]
		},
		Balrog: {
			Name: "Balrog",
			Value: "Balrog",
			Country: "United States of America",
			Slogan: "I'll make you regret that you were ever born. You two-bit chump!",
			smImg: "assets/images/small/balrog.png",
			lgImg: "assets/images/large/balrog.jpg",
			attack: [1,5,10,11,15,28]
		},
		Blanka: {
			Name: "Blanka",
			Value: "Blanka",
			Country: "Brazil",
			Slogan: "Seeing you in action is a joke!",
			smImg: "assets/images/small/blanka.png",
			lgImg: "assets/images/large/blanka.jpg",
			attack: [1,3,12,13,21,27]
		},
		Dhalsim: {
			Name: "Dhalsim",
			Value: "Dhalsim",
			Country: "India",
			Slogan: "Today, I shall win again.",
			smImg: "assets/images/small/dhalsim.png",
			lgImg: "assets/images/large/dhalsim.png",
			attack: [1,5,10,15,20,25]
		},
		EHonda: {
			Name: "E. Honda",
			Value: "EHonda",
			Country: "Japan",
			Slogan: "It's only natural that a Sumo should become the World's Strongest!",
			smImg: "assets/images/small/ehonda.png",
			lgImg: "assets/images/large/ehonda.jpg",
			attack: [3,7,8,11,15,30]
		},
		Guile: {
			Name: "Guile",
			Value: "Guile",
			Country: "United States of America",
			Slogan: "No need for talk. Let's do this!",
			smImg: "assets/images/small/guile.png",
			lgImg: "assets/images/large/guile.png",
			attack: [1,3,11,14,19,26]
		},
		Ken: {
			Name: "Ken",
			Value: "Ken",
			Country: "United States of America",
			Slogan: "I'm ready for ya, bring it on!",
			smImg: "assets/images/small/ken.png",
			lgImg: "assets/images/large/ken.jpg",
			attack: [1,5,10,15,20,25]
		},
		MBison: {
			Name: "M. Bison",
			Value: "MBison",
			Country: "Unknown",
			Slogan: "Bow down before my Psycho Power!",
			smImg: "assets/images/small/mbison.png",
			lgImg: "assets/images/large/mbison.jpg",
			attack: [1,5,7,12,24,40]
		},
		Sagat: {
			Name: "Sagat",
			Value: "Sagat",
			Country: "Thailand",
			Slogan: "A strong fighter is not one who always wins, but one who stands after defeat",
			smImg: "assets/images/small/sagat.png",
			lgImg: "assets/images/large/sagat.jpg",
			attack: [2,7,8,11,23,30]
		},
		Vega: {
			Name: "Vega",
			Value: "Vega",
			Country: "Spain",
			Slogan: "You'll be seeing red by the time I'm done with you...",
			smImg: "assets/images/small/vega.png",
			lgImg: "assets/images/large/vega.jpg",
			attack: [1,5,10,15,20,25]
		},
		Zangief: {
			Name: "Zangief",
			Value: "Zangief",
			Country: "Russia",
			Slogan: "My iron body is invincible! So beware!",
			smImg: "assets/images/small/zangief.png",
			lgImg: "assets/images/large/zangief.png",
			attack: [1,3,14,15,16,35]
		}
	};

    // Builds arrays of small images and names for every fighter
	Object.keys(fighters).forEach(function(key,index) { 
	    smallImages.push(fighters[key].smImg);
	    fighterNames.push(fighters[key].Value);
	});
    

    $.each(smallImages, function(i, val) {
    	var n = i + 1;
    	$("<img />").appendTo('.small-images').attr({src: smallImages[i], value: fighterNames[i]})
       			.addClass('box img-thumbnail col-md-1 player1').addClass('box' + n);	
    });

    $('.fightDetails').html('<strong>Select your fighter!</strong>').addClass('instructions');
    
    // Selects both fighers
    $(".img-thumbnail").on("click", function(){
    	clickCount += 1;
    	if (clickCount === 1) {
	        p1 = $(this).attr('value');
	        console.log(p1 + " p1");
	        $(this).css('display', 'none');

	        // Assigns the selected fighters attributes to player objects
			function getPlayer1() {
				player1 = fighters[p1];
			}
			getPlayer1();
	    	console.log(player1);
	    	$('<img />').appendTo('.p1').attr({src: player1.lgImg, value: player1.Value})
	    	.addClass('img-rounded p1-image-lg');
	    	$('<p>').appendTo('.p1-details').html('<strong>' + player1.Name + '</strong>');
	    	$('<p>').appendTo('.p1-details').html('Country: ' + player1.Country);
	    	$('<p>').appendTo('.p1-details').html('"'+player1.Slogan+'"');
	    	$('<p>').appendTo('.p1-details').html('Power: ' + p1Power).addClass('power1');
	    	$('.fightDetails').html('<strong>Select your opponent!</strong>');
	    } else if (clickCount === 2) {
	    	playerselectMusic.pause();
	    	fightMusic.play(); 
	    	$('.fightDetails').html('').removeClass('instructions');
	    	p2 = $(this).attr('value');
	        console.log(p2 + " p2");
	        $(this).css('display', 'none');

	        // Assigns the selected fighters attributes to player objects
			function getPlayer2() {
				player2 = fighters[p2];
			}
			getPlayer2();
	    	console.log(player2);
	    	$('<img />').appendTo('.p2').attr({src: player2.lgImg, value: player2.Value})
	    	.addClass('img-rounded');
	    	$('<p>').appendTo('.p2-details').html('<strong>' + player2.Name + '</strong>');
	    	$('<p>').appendTo('.p2-details').html('Country: ' + player2.Country);
	    	$('<p>').appendTo('.p2-details').html('"'+player2.Slogan+'"');
	    	$('<p>').appendTo('.p2-details').html('Power: ' + p2Power).addClass('power2');
	    	$('<p>').appendTo('.p1-details').html('').addClass('win-lose1');
    		$('<p>').appendTo('.p2-details').html('').addClass('win-lose2');
	    	$('<button>').appendTo('.fightDetails').html('<strong>FIGHT</strong>')
	    				.addClass('fightButton');
	    	
	    } else {
	    	alert("Now that you have selected both fighters, click FIGHT");
	    }
	});	
   
    $('body').on("click", '.fightButton', function(){
    	if(p1Power > 0 && p2Power > 0){
    		var attack1 = player1.attack[Math.floor(Math.random()*player1.attack.length)];
    		var attack2 = player2.attack[Math.floor(Math.random()*player2.attack.length)];
    		$('.win-lose1').html('<strong>You lost ' + attack1 + ' health points</strong>');
    		$('.win-lose2').html('<strong>They lost ' + attack2 + ' health points</strong>');
    		p1Power = p1Power - attack1;
    		p2Power = p2Power - attack2;
			if (p1Power <= 0 || p2Power <= 0) {
				$('.fightButton').html('<strong>FIGHT AGAIN</strong>')
					.removeClass('fightButton')
    				.addClass('fightAgainButton')
    				.css('width', '120px');
				if (p1Power <= 0){
					fightMusic.pause(); 
					loseMusic.play();
					$(".power1").html("Power: 0");
					$(".power2").html("Power: " + p2Power);
					$('.win-lose1').html('<strong>YOU LOSE!</strong>');
				} else if (p2Power <= 0){
					fightMusic.pause();
					winMusic.play();
					$(".power1").html("Power: " + p1Power);
					$(".power2").html("Power: 0");
					$('.win-lose1').html('<strong>YOU WIN!</strong>');
				} 
			} else if (p1Power <= 0 || p2Power <= 0) {
				$('.fightButton').html('<strong>FIGHT AGAIN</strong>')
					.removeClass('fightButton')
    				.addClass('fightAgainButton')
    				.css('width', '120px');
    				if (p1Power <= 0){
    					fightMusic.pause();
    					loseMusic.play();
						$(".power1").html("Power: 0");
						$('.win-lose1').html('<strong>YOU LOSE!</strong>');
					} else if (p2Power <= 0){
						fightMusic.pause();
						winMusic.play();
						$(".power2").html("Power: 0");
						$('.win-lose1').html('<strong>YOU win!</strong>');
					}
			}else {
				$(".power1").html("Power: " + p1Power);
				$(".power2").html("Power: " + p2Power);
			}	
		}	
		
	});

	$('body').on("click", '.fightAgainButton', function(){
		location.reload();
	});
});





