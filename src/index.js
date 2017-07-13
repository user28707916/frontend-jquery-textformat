'use strict';

var messageField = $('.message-form .message-field');
var messageFormatted = $('main .message-formatted');
var textChange = $('main .message-field');

function formattedText(){
     messageFormatted.text(
         messageField.val().trim()
                        .replace(/\s+/g, ' ')
                        .toLowerCase()
    );
}

function inputFormated(){
    messageFormatted.text('');
}

messageField.on('keyup', formattedText);
textChange.on('input', inputFormated);


