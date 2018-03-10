const connection = require("connection.js")

const orm = {
	selectAll: function(){
	const queryString = "SELECT * FROM burgers_db";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
	},
	insertOne: function(){
    const queryString = "INSERT INTO burgers_db VALUE ?";
    connection.query(queryString, [newBurger], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
	},

	updateOne: function(){


	}
}

module.exports = orm;