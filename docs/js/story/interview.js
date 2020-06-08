"use strict";

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
					"Do": "jump FriendGuy"
				},
				"ComputerGuy": {
					"Text": "I know computers, email sending/reciving, write documents, spreadsheet, powerpoint, charts, piecharts...",
					"Do": "jump FunnyGuy"
				},
				"Hardworker": {
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
	"FriendGuy": [
		"boss:Normal Sorry, game is still in developement, please leave a comment!!"
	],
	"FunnyGuy": [
		"boss:Normal Sorry, game is still in developement, please leave a comment!!"
	],
	"HardworkerGuy": [
		"boss:Normal Sorry, game is still in developement, please leave a comment!!"
	],
	"AmbitiousGuy": [
		"boss:Normal Sorry, game is still in developement, please leave a comment!!"
	],
	"HonestGuy": [
		"boss:Normal Sorry, game is still in developement, please leave a comment!!"
	]
});

