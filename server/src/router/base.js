var express = require("express");
var router = express.Router();
const baseController = require("../controller/BaseController");
router.get("/", baseController.index);
module.exports = router;