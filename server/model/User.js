const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const bcrypt = require("bcrypt");
const UserSchema = new Schema({
  username: { type: String, required: true, max: [60, "60までです"] },
  email: {
    type: String,
    required: true,
    max: [60, "60までです"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: [60, "60までです"],
    min: [6, ""],
  },
});

UserSchema.methods.hasSamePassword = function (inputPassword) {
  const user = this;
  return bcrypt.compareSync(inputPassword, user.password);
};

UserSchema.pre("save", function (next) {
  const user = this;
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
