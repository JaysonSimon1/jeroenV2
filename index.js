const Discord = require("discord.js")
const Prefix = "$"
const TOKEN = "OTQ0MjU4OTAxMzQyMjk0MTA2.Yg-_oQ.bD3OFsZhlqR7jXiaQozMIWe-fzo"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "ping"){
        message.reply("pong")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "stef"){
        message.reply("poepje")
    }
})
client.on("messageCreate", (message) => {
    if (message.content == "naam"){
        message.reply(`${client.user}`)
    }
})

client.login(TOKEN)