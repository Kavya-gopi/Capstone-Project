const User = require("../models/user");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(200).json({ message: "Successfully Signed Up", alert: true });
  } catch (error) {
    res.status(500).json({ message: "Data Already Exists", alert: false });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    console.log(req.body);
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      const dataSend = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      };
      res.status(200).json({
        message: "LoggedIn Successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.status(401).json({
        message: "Invalid UserName and password,Please signUp to continue",
        alert: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
module.exports = { signup, login };
