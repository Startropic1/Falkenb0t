exports.run = (client, message, args) => {
	
if(args[0] && args [1] != ""){
	client.registerNetwork(message.author.id, args[0], args[1], message.guild.id, message)
}else{
	message.reply("You must provide a NetID & Password!")
}
}
exports.help = {
  name: "register",
  description: "registors new networks",
  usage: "N$register <NetworkID> <Password> "
};
exports.config = {
  permLevel: "admin"
}