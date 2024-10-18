const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    productDetail:[
    {
        color:{
          type: String,
          required: true,
        },
         price: {
          type: Number,
          required: true,
         },
         quantity: {
          type: Number,
          required: true,
         },
         orderQuantity: {
          type: Number,
          readOnly: false,
         },
         quantitySold: {
          type: Number,
         }
      
    },
  ],
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    imageUrls:[],
    tags: String,
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
    message: [{
      message: String,
      postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    }]
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
