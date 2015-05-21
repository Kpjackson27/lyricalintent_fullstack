'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PoemSchema = new Schema({
  title: String,
  lyric: String,
  tags: String,
  date: Date,
  active: Boolean
});

module.exports = mongoose.model('Poem', PoemSchema);