type Message = {to:string;text?:string}
const sendMessage = (message:Message):string|never => {
    if(typeof message.text === "string"){
        return message.text.toUpperCase();

    }
        throw Error("Message not available");
    
};

console.log(sendMessage({ to: 'Alice' }));