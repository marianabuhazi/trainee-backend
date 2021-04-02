const controllers = require('../controllers/controller.js');
const router = require('express').Router();


router.route("/hello").get(controllers.hello);
router.route("/hello/:name").get(controllers.hello_name);
router.route("/sources").get(controllers.sources);
router.route("/add_source").post(controllers.add_source);
router.route("/delete_source/:num").post(controllers.delete_source);


module.exports = router;