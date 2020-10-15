"use strict";

/**
	greedy
	honest
	easygoing -- follower -- herd  
*/

monogatari.script({
	"AfterTheInterview": [
		"show scene hallway with fadeIn",
		"show character sofia Normal bottom right with lightSpeedIn",
		"sofia:Normal Hi, can you tell me if the meeting room is available? I just saw you get out from there.",
		"you:Normal Well I am not sure. I just got out from an interview with Mr Batista. I got hired by the way.",
		"sofia:Normal Really, so are we going to be coworkers? Thats great!",
		"you:Normal Yep, we sure will!!",
		{
			'Conditional': {
				'Condition': function () {
					const actions = monogatari.storage().player.raquel.actions;
					console.log(actions);
					return actions[actions.length - 1] || "Nothing";
				},
				'Coffee': 'jump SofiaWantsCoffee',
				'Nothing': 'jump DoesSofiaWantsCoffe'
			}
		}
	],
	"SofiaWantsCoffee": [
		{
			"Choice": {
				"Dialog": "sofia:Normal Do you want to grab a coffee?",
				"AloneCoffee": {
					"Text": "Yeah, sure lets go!",
					"Do": "jump CoffeeAloneWithSofia"
				},
				"YesWithRaquel": {
					"Text": "I'm going to have coffee with Raquel, but I think it's okay if you join us.",
					"Do": "jump CoffeeWithRaquelAndSofia"
				},
				"SofiaCoffeeTomorrow": {
					"Text": "I can't do it now, but we can arrange for tomorrow.",
					"Do": "jump keepMySofiaOptionsOpen"
				},
				"ICant": {
					"Text": "Sorry, I have other appointments. See you around.",
					"Do": "jump NotInterestedOnSofia"
				}
			}
		}
	],
	"CoffeeAloneWithSofia": [
		"sofia:Normal Great, lets go!",
		"jump PartyIsOver"
	],
	"CoffeeWithRaquelAndSofia": [
		"sofia:Normal Ok, that seems fun.",
		"jump PartyIsOver"
	],
	"keepMySofiaOptionsOpen": [
		"sofia:Normal Sure, I will be around here so just find me to grab that coffee.",
		"jump PartyIsOver"
	],
	"NotInterestedOnSofia": [
		"sofia:Normal No problem, see you arround!",
		"jump PartyIsOver"
	],
	"DoesSofiaWantsCoffe": [
		{
			"Choice": {
				"Dialog": "Humm..., maybe I should ask her out?",
				"Coffee": {
					"Text": "Would you like to grab a Coffee!",
					"Do": "jump AfterInterviewAskSofiaCoffee"
				},
				"Lunch": {
					"Text": "I don't know anyone here, would you like to join me for lunch, after the meeting?",
					"Do": "jump AfterInterviewAskSofiaLunch"
				},
				"Date": {
					"Text": "What time you leave work, would you go out with me?",
					"Do": "jump AfterInterviewAskSofiaDate"
				},
				"Notting": {
					"Text": "Notting",
					"Do": "jump AfterInterviewAskSeeYouAround"
				}
			}
		}
	],
	"AfterInterviewAskSofiaCoffee": [
		"sofia:Normal Yes, lets go grab that coffee!!",
		"jump PartyIsOver"
	],
	"AfterInterviewAskSofiaLunch": [
		"sofia:Normal Offcourse, let me gather the welcome party. Be at Carlitos snack bar arround 12:30!",
		"jump PartyIsOver"
	],
	"AfterInterviewAskSofiaDate": [
		"sofia:Normal Wow, you are fast, but its never good ideia to date coworkers, maybe you get fired and then we can date. Lol just kiding.",
		"jump PartyIsOver"
	],
	"AfterInterviewAskSeeYouAround": [
		"you:Normal See you around.",
		"jump PartyIsOver"
	],
	"PartyIsOver": [
		"Sorry this game is a work in progress, so its not yet complete!"
	]
});

