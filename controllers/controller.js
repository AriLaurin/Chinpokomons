const Pokomon = require("../models/Pokomon");

module.exports.home_get = async (req,res) => { //a function that renders our routes from AuthRoutes
    const getDB = await Pokomon.aggregate([
        {
          '$sort': {
            'createdAt': -1
          }
        }, {
            '$limit': 10
          }
      ]);
    res.render("home", {pokomon: getDB})
}

module.exports.account_get = async (req,res) => { //a function that renders our routes from AuthRoutes
    const getDB = await Pokomon.aggregate([
        {
          '$sort': {
            'createdAt': -1
          }
        }, {
            '$limit': 10
          }
      ]);
    res.render("account", {pokomon: getDB})
}

module.exports.account_post = async (req,res) => {
    const {name, ability1, ability2, ability3, author} = req.body;

    console.log(req.body)

    // res.send("hello")
    // const user = await Pokomon.findById(id);
    // const author = user.email;

try {
    const product = await Pokomon.create({name, ability1, ability2, ability3, author});
    res.status(201);
    console.log("Pokomon created:", product);
}
catch(err){
    res.status(400)
}
}