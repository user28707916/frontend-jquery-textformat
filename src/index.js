var messageField = $('.message-form .message-field');
var messageFormatted = $('main .message-formatted');

function formattedText(){
     messageFormatted.text(
         messageField.val().trim()
                        .replace(/\s+/g, ' ')
                        .toLowerCase()
    );
}

messageField.on('input', formattedText);



