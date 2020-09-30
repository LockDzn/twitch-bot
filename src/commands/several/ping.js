const tmi = require('tmi.js');

/**
 * @param {string} channel
 * @param {import("tmi.js").ChatUserstate} user
 * @param {string} message
 * @param {array} args
 */

exports.run = async (client, channel, user, message, args) => {
    
    client.say(channel, `${user.username}, pong!`)
    
}

exports.help = {
    name: 'ping',
    permissions: "everyone",
    description: 'Ping pong',
    cooldown: 5,
    aliases: [
        'pong'
    ]
}