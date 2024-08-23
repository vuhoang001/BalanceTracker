const userModel = require("../models/user.model");
const { NotFoundError } = require("../core/error.response");

const NOTFOUNDERROR = "ERRORR";
const NOTFOUNDERROR2 = "ERRORR2";

class UserService {
  getAll = async () => {
    const data = await userModel.find();
    const a = 20;
    const b = 15;
    if (a > b) return { NOTFOUNDERROR, NOTFOUNDERROR2 };
    return data;
  };

  createUser = async () => {
    const data = await userModel.create({
      user_name: "hoang",
      user_description: "honag description",
    });
  };
}

module.exports = new UserService();
