const Discord = require("discord.js");
const client  = new Discord.Client();

const BOT_VERSION = "1.0.0";

// Here you find the prefix for all commands.
// For example: When it is set to "!" then you can execute commands with "!" like "!help"
//              or if you set it to "_" then you can execute commands like "_help".
const commandPrefix = "!";

// This is a function which will be called when the bot is ready.
client.on("ready", () => {
    console.log("Bot started! Version " + BOT_VERSION);
});

client.on("message", (message) => {

    // It will do nothing when the message doesnt start with the prefix
    if(!message.content.startsWith(commandPrefix)) return;


    // This cuts out the command from the message which was sent and cuts out the prefix
    // So when you check if a specific command was executed, you must not type
    //   if(command === commandprefix + "help" )
    // but you can type:
    //   if(command === "help")
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(commandPrefix.length);

    // Lets do now the commands!

    // First command is "hello"
    // It just sends a message which says hello to you.

    if(command === "hello"){
        // We´re sending a message to the channel where the command was executed.
        // Then we´re getting the author of the message and tag him to our message.
        message.channel.send("Hello " + message.author + "! Nice to meet you. :smiley: ");
    }

    if(command === "help"){
        // Now we´re sending an embed to the user when he is calling this function.
        // It is basically the same. You´re just sending an embed with message.channel.send() instead a normal message.

        // For embeds, use Discord.RichEmbed.
        // --> I´m totally recommending to look at the docs page of Discord.js at the RichEmbed page.
        // --> RichEmbed: https://discord.js.org/#/docs/main/stable/class/RichEmbed
        // To add fields, use .addField()
        // For setting a title use .setTitle()
        // For setting a footer use .setFooter()
        // For setting a color use .setColor()
        // --> You can write and Hex Literal, Hex String, Number, RGB Array and so on.
        // --> To get more details about colors, look here: https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable

        // Now, let´s create an embed

        let embed = new Discord.RichEmbed()
            .addField("!hello", "Sends a friendly message!")
            .addField("!help", "Sends this help embed")
            .setTitle("Bot commands:")
            .setFooter("Here you have all bot commands you can use!")
            .setColor("AQUA");

        // Send the embed with message.channel.send()

        message.channel.send({embed: embed});

    }

});

// function which log in the bot
client.login("Mjc0OTQ1NDQyMTYzNDU4MDQ4.DIhxEA.TWa5cXQwinmTOpWQq_2yyyj7R-s");


