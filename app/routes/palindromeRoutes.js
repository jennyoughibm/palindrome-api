'use strict'

const _ = require('underscore');
const express = require('express');
const router = express.Router();
const dbIndex = {};
const scoreIndex = [];

router.route('/api/getScores').get((req, res) => {
	const sorted = scoreIndex.sort(sortByProperty("value")).slice(0, 5);
	const entries = _.values(sorted);
	res.send(entries);
});

router.route('/api/submitEntry').post((req, res) => {
	const req_body = req.body;
	const name = req_body.name;
	const message = req_body.message;
	let score = 0;
	let exist = false;
	
	if (_.has(dbIndex, name)) {
		score = dbIndex[name].score
		exist = true;
	}
	
	if (isPalindrome(JSON.stringify(message))) {
		score++;
	}
	if (exist) {
		updateScore(name, score);
	} else {
		scoreIndex.push({key: name, value: score});
	}
	
	const entry = {};
	entry.name = name;
	entry.score = score;
	dbIndex[name] = entry;
	res.send(entry)
});


function isPalindrome(text) {
	if (!text) {
		return false;
	}
	
	text = text.replace(/[^\w]/g, ""); //remove all characters except a-z
	text = text.toLowerCase();
	if (text.length === 0) {
		return false;
	}
	
	return text == text.split('').reverse().join('');
}


function sortByProperty(property) {
	return function (x, y) {
		return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));
	};
}

function updateScore(name, score) {
	scoreIndex.forEach(function (s) {
		s.key === name &&
		(s.value = score)
	});
}

module.exports = router;


