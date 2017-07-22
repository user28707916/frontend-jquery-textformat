var messageField = $('.message-form .message-field');
var messageFormatted = $('main .message-formatted');

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

messageField.on('input', formattedText);



