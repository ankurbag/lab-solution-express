// Setup
const express = require("express");
const app = express();
// Database
const ingredients = [
	"fettuccine pasta",
	"diced bacon",
	"fresh peas",
	"specialty sauce",
];

// Routes
app.get("/famousdish", function (req, res) {
	res.send("<h1>Our Famous dish is Carbonara</h1>");
});

app.get("/ingredients", function (req, res) {
	res.json(ingredients);
});

app.post("/orders", function (req, res) {
	res.status(503);
	res.send(
		"We are not taking orders at this time. Our service is temporarily down"
	);
});

app.get("/ingredients/:ingredient", function (req, res) {
	console.log(req.params);
	// req.params.sam --> ingeditn
	const ingredient = req.params.ingredient;
	// ingeditn is in the list of ingredients
	const isFound = ingredients.find((i) => {
		console.log();
		return ingredient === i;
	});

	if (isFound) res.send("That ingredient is in stock");
	else res.send("That ingredient is out of stock");
});

// Listen to incoming request
app.listen(8080, function () {
	console.log("Server started!");
});
