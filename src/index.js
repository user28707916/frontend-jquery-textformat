'use strict';

var messageField = $('main .message-field');
var messageFormatted = $('main .message-formatted');
var textChange = $('main .message-form');

String.prototype.trimAll = function formattedText() {
    var r = /\s+/g;
    return this.replace(r, '')
        .toLowerCase();
}

function inputFormated() {
    messageFormatted.text('');
}

messageField.on('clear', formattedText);
textChange.on('input', inputFormated);
