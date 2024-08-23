const UserService = require("../services/user.service");

const { SuccessResponse } = require("../core/success.response");

class UserController {
  GetUser = async (req, res, next) => {
    const data = await UserService.getAll();

    return res.json({data, value});
  };

  CreateUsre = async (req, res, next) => {
    const data = await UserService.createUser();
    return res.json(data);
  };
}

module.exports = new UserController();
