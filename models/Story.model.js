const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const storySchema = new Schema({
      title: {
        type: String,
        required: true,
        trim: true,
      },
      story: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      city: {
        type: Number,
      },
      author: {
        type: String,
      },
});

const Story = model("Story", storySchema);

module.exports = Story; 