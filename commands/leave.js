exports.run = (client, message, args) => {

	client.leaveNetwork(message.guild.id, message);
	
}
exports.help = {
  name: "leave",
  description: "leaves networks",
  usage: "N$leave"
};
exports.config = {
  permLevel: "admin"
}