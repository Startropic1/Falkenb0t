exports.run = (client, message, args) => {
    //if channel dosen't exist, than create server
    var server = message.guild.channels.cache;
    //todo make so only admin/mods can type in broadcast - https://discordjs.guide/popular-topics/permissions.html#terminology
    if (!server.find(server => server.name === "broadcast")) {
        message.guild.channels.create("broadcast", {
            type: "text"
        });
    } else {
        message.reply("#broadcast already exists!");
    }

    if (!server.find(server => server.name === "network-userchat")) {
        message.guild.channels.create("network-userchat", {
            type: "text"
        });
    } else {
        message.reply("#network-userchat already exists!");
    }
}
exports.help = {
    name: "setup",
    description: "adds channels - #broadcast, #network-userchat",
    usage: "N$setup"
}
exports.config = {
    permLevel: "admin"
}