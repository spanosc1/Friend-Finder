var friendData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
	
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	app.post('/api/friends', function(req, res){
		var diffArray = [];
		var min = 0;
		for(var i = 0; i < friendData.length; i++)
		{
			var diff = 0;
			for(var j = 0; j < 10; j++)
			{
				diff = diff + Math.abs(req.body.scores[j] - friendData[i].scores[j]);
			}
			if(i > 0)
			{
				if(diff < diffArray[min])
				{
					min = i;
				}
			}
			diffArray.push(diff);;
		}
		res.json(friendData[min]);
	});
}