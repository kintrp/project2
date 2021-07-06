const mongoose = require('mongoose');
const {Schema, model} = mongoose;

// TODO: Please make sure you edit the story model to whatever makes sense in this case
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


