class BaseController {
  index(request, response) {
    response.send("Hello world");
  }
}
module.exports = new BaseController();
