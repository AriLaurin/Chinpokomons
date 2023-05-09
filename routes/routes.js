const { Router } = require("express");//we need the express router to plug into applications
const Controller = require("../controllers/controller"); //exports our controller to get our functions
const router  = Router(); ///creates a new router
// const {requireAuth} = require("../middleware/middleware");

router.get("/", Controller.home_get);
router.get("/home/user", Controller.account_get);

router.post("/account", Controller.account_post);

module.exports = router;