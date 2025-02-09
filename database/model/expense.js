const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema(
  {
    image: { type: String }, // URL or path to the image
    expenseName: { type: String, required: true },
    date: { type: Date, required: true },
    expenseAccount: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true }, // References the Category collection
    note: { type: String },
    status: { type: String }
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
