// TODO: Please make sure you edit the story model to whatever makes sense in this case
const storySchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true,
      },
      body: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
      },
      author: {
        type: String,
    },

});

const Story = model("Story", storySchema);


module.exports = Story;
