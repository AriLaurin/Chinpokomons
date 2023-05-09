const mongoose = require('mongoose');

const pokomonModel = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    ability1: {
      type: String,
      required: true
    },
    ability2: {
        type: String,
        required: true
      },
      ability3: {
        type: String,
        required: true
      },
    author: {
      type: String,
      required: true
    }
  }, {timestamps: true});
  
  const Blog = mongoose.model('Blog', blogModel);


module.exports = Blog;