"use strict";

// The game starts here.
monogatari.script({
	"Start": [
		// "show scene lobby with fadeIn",
		"show scene lobby with fadeIn",
		"show character raquel Normal right with fadeIn",
		// "particles Snow",
		"raquel:Normal Hi, how can I help you mister...?",
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		"raquel:Happy Oh {{player.name}}, are you here for the job interview?",
		"you:Happy Hi, yes I am!",
		"raquel:Normal You can wait on the meeting room, Mr. Batista will be there soon.",
		{
			"Choice": {
				"Dialog": "Humm..., maybe I should ask her out?",
				"Coffe": {
					"Text": "Would you like to drink a coupe of Coffe, after the meeting?",
					"Do": "jump StartAskCoffe"
				},
				"Lunch": {
					"Text": "I don't know anyone here, would you like to join me for lunch, after the meeting?",
					"Do": "jump StartAskLunch"
				},
				"Date": {
					"Text": "What time you leave work, would you go out with me?",
					"Do": "jump StartAskDate"
				},
				"Notting": {
					"Text": "Notting",
					"Do": "jump StartThanks"
				}
			}
		}
	]
});

monogatari.script({
	"StartAskCoffe": [
		() => {
			// How to get storage stuff ?? 
			monogatari.storage({
				caracters: {
					raquel: {
						player: {
							love: 2
						}
					}
				},
				player: {
					raquel: {
						love: 3
					}
				}
			});

			return true;
		},
		"raquel:Normal Ok, my break will be soon, I will wait for you!",
		"you:Normal Great see you soon!",
		"jump Interview"
	]
});

monogatari.script({
	"StartAskLunch": [
		() => {
			monogatari.storage({
				caracters: {
					raquel: {
						player: {
							love: -1
						}
					},
					player: {
						raquel: {
							love: 2
						}
					}
				}
			});

			return true;
		},
		"raquel:Normal Oh, I am sorry but I don't think I can.",
		"you:Normal Ok, thanks anyway!",
		"jump Interview"
	]
});

monogatari.script({
	"StartAskDate": [
		() => {
			monogatari.storage({
				caracters: {
					raquel: {
						player: {
							love: -2
						}
					},
					player: {
						raquel: {
							love: 1
						}
					}
				}
			});

			return true;
		},
		"raquel:Normal Humm... I do not think it's appropriate!",
		"you:Normal Oh sorry, I forget that we can become colleague!",
		"jump Interview"
	]
});

monogatari.script({
	"StartThanks": [
		"you:Normal Thanks, see you soon.",
		"jump Interview"
	]
});
