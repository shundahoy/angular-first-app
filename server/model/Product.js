const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  name: { type: String, required: true, max: [60, "60までです"] },
  price: Number,
  cover: String,
  description: String,
  head1: String,
  head2: String,
  head3: String,
  headText1: String,
  headText2: String,
  headText3: String,
});

module.exports = mongoose.model("Product", ProductSchema);
