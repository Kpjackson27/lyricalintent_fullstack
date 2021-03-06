/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Poem = require('./poem.model');

exports.register = function(socket) {
  Poem.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Poem.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('poem:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('poem:remove', doc);
}