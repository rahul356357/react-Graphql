const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LyricSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: 'song'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

LyricSchema.statics.like = function(id) {
  console.log(id)
  const Lyric = mongoose.model('lyric');
  return Lyric.findById(id)
    .then(lyric => {
      console.log(lyric)
      ++lyric.likes;
      return lyric.save();
    })
}

mongoose.model('lyric', LyricSchema);
