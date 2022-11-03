const baseRouter = require("./base");
function route(app) {
  app.use("/", baseRouter);
}
module.exports = route;
