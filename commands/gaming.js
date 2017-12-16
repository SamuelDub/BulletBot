module.exports = {
  channels: (channels = []),
  vc: function(message) {
    if (message.member.voiceChannel == undefined) {
      message.reply(
        "You must already be in a voice channel to use this command"
      );
      message.delete();
      return;
    }

    message.delete();

    game = "🎮 " + message.author.username + "'s Gaming Channel";

    message.guild.createChannel(game, "voice").then(channel => {
      channel.overwritePermissions(
        message.guild.roles.get("306234601817505793"),
        {
          VIEW_CHANNEL: true,
          CONNECT: true,
          SPEAK: true
        }
      );
      channel.setParent(message.guild.channels.get("358347251900350464"));
      message.member.setVoiceChannel(channel);
      channels.push({
        id: channel.id,
        owner: message.author.id
      });
    });
  }
};