module.exports.home_get = (req,res) => { //a function that renders our routes from AuthRoutes
    res.render("home");
}

module.exports.account_get = (req,res) => { //a function that renders our routes from AuthRoutes
    res.render("account");
}