var sendMessage = function (message) {
    return message.text.toUpperCase();
};
console.log(sendMessage({ text: 'Alice' }));
