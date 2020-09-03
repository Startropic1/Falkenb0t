exports.run = (client, message, args) => {

	if(args[0] && args [1] != ""){
	client.joinNetwork(args[0], args[1], message.guild.id, message)
	}else{
		message.reply("You must prove a NetID & Password!")
	}
}
exports.help = {
  name: "join",
  description: "leaves networks",
  usage: "N$join <NetID> <Password>"
};
exports.config = {
  permLevel: "admin"
}