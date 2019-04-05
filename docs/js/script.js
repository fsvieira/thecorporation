/* global monogatari */

// Define the messages used in the game.
monogatari.action ('Message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('Notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('Particles').particles ({

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voice', {

});

// Define the sounds used in the game.
monogatari.assets ('sound', {

});

// Define the videos used in the game.
monogatari.assets ('video', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	lobbyBalcony: "balcony.png"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	lobby: "lobby.png",
	bossOffice: "boss-office.png"
});

// Colors,
const colorNavy = "#001f3f";
const colorBlue = "#0074D9";
const colorAqua = "#7FDBFF";
const colorTeal = "#39CCCC";
const colorOlive = "#3D9970";
const colorGreen = "#2ECC40";
const colorLime = "#01FF70";
const colorYellow = "#FFDC00";


// Define the Characters
monogatari.characters ({
	/*
	'y': {
		'Name': 'Yui',
		'Color': '#5bcaff'
	}*/
	"brain": {
		"Name": "Your Brain!",
		"Color": colorYellow,
		"Images":{ // Images Identifier for the "Show" statement.
			"Normal": "raquel.png",
		},
		"Side": {
			"Normal": "animegirlatbeach.png",
			"Happy": "animegirlatbeach.png",
			"Disappointed": "animegirlatbeach.png"
		}
	},
	"you": {
		"Name": "You",
		"Color": colorBlue,
		"Images":{ // Images Identifier for the "Show" statement.
			"Normal": "animegirlatbeach.png",
		},
		"Side": {
			"Normal": "animegirlatbeach.png",
			"Happy": "animegirlatbeach.png"
		}
	},
	"raquel": {
		"Name": "Raquel",
		"Color": colorAqua,
		"Images":{ // Images Identifier for the "Show" statement.
			"Normal": "raquel.png",
		},
		"Side": {
			"Normal": "raquel-face.png",
			"Happy": "raquel-face.png"
		}
	},
	"boss": {
		"Name": "Batista",
		"Color": colorTeal,
		"Images": {
			"Normal": "boss/boss.png"
		},
		"Side": {
			"Normal": "boss/boss.png"
		}
	}
});

/*
monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});
*/