"use strict";

/**
	greedy
	honest
	easygoing -- follower -- herd  
*/

monogatari.script({
	"Interview": [
		"show scene bossOffice with fadeIn",
		"show character boss Normal bottom left with lightSpeedIn",
		"boss:Normal Hi {{player.name}}, before we begin, let me tell you what we do here on 'The Coorporation' ...",
		"Yeah, finally, the job description only said 'We are hiring, The coorporation.', maybe they had a caracter count limit or something...",
		"boss:Normal We make money, lots of them, thats what we do and when someone thinks we can't do it, we do it!!!",
		"brain:Happy Ok great start, now we are going to the bottom of this.",
		"boss:Normal So what kind of value will you bring to 'The Coorporation'.",
		"you:Normal Well as you probaly had seen on my resume...",
		"boss:Normal I don't see resumes, I see people, hard working people that will give their blood and sweat for this company.",
		{
			"Choice": {
				"Dialog": "brain:Normal I don't know what they do, and what I am supposed to do, what should I say?",
				"TeamPlayer": {
					"Text": "I am a team player!",
					"Do": "jump TeamPlayerGuy"
				},
				"FunnyGuy": {
					"Text": "I know computers, email sending/reciving, write documents, spreadsheet, powerpoint, charts, piecharts...",
					"Do": "jump FunnyGuy"
				},
				"HardworkerGuy": {
					"Text": "I am persistent and hard worker, I may not be the best but I always do my best.",
					"Do": "jump HardworkerGuy"
				},
				"AmbitiousGuy": {
					"Text": "I am the best, if you hire me I will make even more money!",
					"Do": "jump AmbitiousGuy"
				},
				"HonestGuy": {
					"Text": "I don't understand what the company does, and what would I be doing?",
					"Do": "jump HonestGuy"
				}
			}
		}
	],
	"TeamPlayerGuy": [
		() => {
			monogatari.storage({
				player: {
					follower: monogatari.storage().player.follower + 1,
					herd: monogatari.storage().player.herd + 2
				}
			});

			return true;
		},
		"boss:Normal Ah, I'm happy to know that. Here we are as a family, trusting each other is the most important thing!!",
		"jump InterviewYourDegree"
	],
	"FunnyGuy": [
		() => {
			monogatari.storage({
				player: {
					easygoing: monogatari.storage().player.easygoing + 1,
				}
			});

			return true;
		},
		"boss:Normal Lol, I like your spirit, you will fit easily here. We are all about having fun!!",
		"jump InterviewYourDegree"
	],
	"HardworkerGuy": [
		() => {
			monogatari.storage({
				player: {
					follower: monogatari.storage().player.follower + 1
				}
			});

			return true;
		},
		"boss:Normal I'm glad to know that, we here value and reward the commitment and loyalty of our employees.",
		"jump InterviewYourDegree"
	],
	"AmbitiousGuy": [
		() => {
			monogatari.storage({
				player: {
					greedy: monogatari.storage().player.greedy + 1
				}
			});

			return true;
		},
		"boss:Normal oh, exactly what we are looking for, and here there is no lack of opportunities for those who want to earn a lot of money!!",
		"jump InterviewYourDegree"
	],
	"HonestGuy": [
		() => {
			monogatari.storage({
				player: {
					honest: monogatari.storage().player.honest + 1
				}
			});

			return true;
		},
		"boss:Normal I really appreciate your honesty, trust within the company is of great importance.",
		"jump InterviewYourDegree"
	],
	"InterviewYourDegree": [
		"boss:Normal So I know you have a degree in ...",
		{
			'Input': {
				'Text': 'What is your degree?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							degree: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							degree: ''
						}
					});
				},
				'Warning': 'You must enter a degree!'
			}
		},
		"boss:Normal Ah, I have a great knowledge of {{player.degree}}, but in my time it was old school we only used pen and paper, but today everyone uses a computer, today's kids have no knowledge of things.",
		"show image logo with fadeIn",
		"boss:Normal I'm a self-taught person I did the company logo myself, what do you think?",
		"you:Normal Wow, did you do it all on paper?",
		"boss:Normal Offcourse not, I did it on the computer.",
		{
			"Choice": {
				"Dialog": "brain:Normal This logo is crap!! What do I say?",
				"FunnyTeamPlayerGuy": {
					"Text": "I wouldn't do better, for sure.",
					"Do": "jump LogoFunnyTeamPlayerGuy"
				},
				"AmbitiousGuy": {
					"Text": "Amazing that you did everything yourself, you are a top designer.",
					"Do": "jump LogoAmbitiousGuy"
				},
				"HonestGuy": {
					"Text": "Great work!! Maybe a designer could improve it.",
					"Do": "jump LogoHonestGuy"
				}
			}
		}
	],
	"LogoFunnyTeamPlayerGuy": [
		() => {
			monogatari.storage({
				player: {
					herd: monogatari.storage().player.herd + 1,
					easygoing: monogatari.storage().player.easygoing + 1
				}
			});

			return true;
		},
		"jump HireThisGuy"
	],
	"LogoAmbitiousGuy": [
		() => {
			monogatari.storage({
				player: {
					greedy: monogatari.storage().player.greedy + 1
				}
			});

			return true;
		},
		"jump HireThisGuy"
	],
	"LogoHonestGuy": [
		() => {
			monogatari.storage({
				player: {
					honest: monogatari.storage().player.honest + 1
				}
			});

			return true;
		},
		"jump HireThisGuy"
	],
	"HireThisGuy": [
		{
			'Function': {
				'Apply': () => {
					let s = "";

					if (monogatari.storage().player.herd > 0) {
						s += "I think you will be a great fit for our prime team.\n";
					}

					if (monogatari.storage().player.greedy > 0) {
						s += "Lets make money.";
					}

					if (monogatari.storage().player.follower > 0) {
						s += "With our guidance, you will surely overcome the most difficult challenges and achieve great things.\n";
					}


					if (monogatari.storage().player.honest > 0) {
						s += "I think you will be a great fit for our prime team.\n";
					}

					if (monogatari.storage().player.easygoing > 0) {
						s += "You will feel here like a fish in the water, just follow the flow and good things will come.\n";
					}


					s += "You are hired, can you start tomorrow?"

					monogatari.storage().message = s;
				},
				'Revert': () => { }
			}
		},
		"boss:Normal {{message}}",
		"you:Normal Yes, offcourse!! Thank you for the opportunity!",
		"jump AfterTheInterview"
	]
});

