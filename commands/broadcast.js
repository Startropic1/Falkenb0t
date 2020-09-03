const Discord = require('discord.js')
exports.run = (client, message, args) => {
    let serverlist = client.guilds.cache.array(); // Grabs the Guilds.
    console.log(client.Networks)

    const server = message.guild.id; // Key for client.Networks
    console.log(server)
    let Sender = client.Networks.get(server); // Key is already defined with 'server' there is no point typing it out again unless it is different.
    console.log('[1]')
    const input = args.join(" "); // Joins the arguments together.
    console.log('[2]')
    for (let i = 0; i < serverlist.length; i++) {
        console.log(i)
      let Recipient = client.Networks.get(serverlist[i].id);
        console.log(Sender)
        console.log(Recipient)
      //Recipient = parseInt(Recipient);
      if (Sender == Recipient) {
      //if (server === serverlist[i].id) {
      //client.Networks.ForEach((server, value) => {
        console.log('[2.5]')
        try {
          console.log('[3]')
          if (!serverlist[i].channels.cache.find(channel => channel.name === 'broadcast')) continue; // If the channel it just skips it, and starts from the top again.
          console.log('[4]')
          let channel = serverlist[i].channels.cache.find(channel => channel.name === 'broadcast'); // Gets the 'broadcast' channel.
          console.log('[5]')
          //Created an embed (I prefer this type of embed)
          let embed = new Discord.MessageEmbed()
            .setColor('0x3850eb')
            //.setAuthor(client.user.username, client.user.avatarURL()) // You have disabled.
            .setThumbnail(message.guild.iconURL())
            .addFields({name: 'Broadcasted from', value: message.guild.name}, {name: 'Message', value: input})
            .setFooter(`Execute by ${message.author.username}`, message.author.avatarURL())
            .setTimestamp() 
            console.log('[6]')
          channel.send(embed) // Sends the embed to the channel.
        } catch (error) {
          console.log(error);
          message.reply('You must create a #broadcast channel to receive messages!'); 
          break;
        };
      };
    };
};
exports.help = {
    name: "broadcast",
    description: "Broadcasts message to all servers on your network",
    usage: "N$broadcast <Message>"
};
exports.config = {
    permLevel: "admin"
}