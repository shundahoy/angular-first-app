const express = require("express");
const User = require("../model/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config/dev");
router.post("/login", function (req, res) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).send({
      errors: [{ title: "User error", detail: "Please fill email!" }],
    });
  }
  if (!password) {
    return res.status(422).send({
      errors: [{ title: "User error", detail: "Please fill password!" }],
    });
  }

  User.findOne({ email }, function (err, foundUser) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "Someting went wrong!" }],
      });
    }
    if (!foundUser) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "User is not exist!" }],
      });
    }
    if (!foundUser.hasSamePassword(password)) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "Incorrect password!" }],
      });
    }

    const token = jwt.sign(
      {
        userId: foundUser.id,
        username: foundUser.username,
      },
      config.SECRET,
      { expiresIn: "1h" }
    );

    return res.json(token);
  });
});
router.post("/register", function (req, res) {
  const { username, email, password, confirmPassword } = req.body;

  if (!username) {
    return res.status(422).send({
      errors: [
        { title: "User error", detail: "ユーザー名を入力してください！" },
      ],
    });
  }
  if (!email) {
    return res.status(422).send({
      errors: [{ title: "User error", detail: "Please fill email!" }],
    });
  }
  if (!password) {
    return res.status(422).send({
      errors: [{ title: "User error", detail: "Please fill password!" }],
    });
  }
  if (password !== confirmPassword) {
    return res.status(422).send({
      errors: [{ title: "User error", detail: "Please check passwords!" }],
    });
  }

  User.findOne({ email }, function (err, foundUser) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "Someting went wrong!" }],
      });
    }
    if (foundUser) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "User already exist!" }],
      });
    }

    const user = new User({ username, email, password });
    user.save(function (err) {
      if (err) {
        return res.status(422).send({
          errors: [{ title: "User error", detail: "Someting went wrong!" }],
        });
      }
      return res.json({ registerd: true });
    });
  });
});

module.exports = router;
