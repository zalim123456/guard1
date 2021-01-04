const Discord = require('discord.js')
exports.run = async(client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ Hop yetki yko geri bas.");
   }
    if (!args[0]) return message.channel.send("Bir ID Girmelisin");
    let kisi = args[0];
    message.guild.ban(kisi).then(() => {
        message.channel.send(`${kisi} ID'li kullanıcı başarıyla banlandı.`)
    
    }).catch(err => {
        message.channel.send("Bir hata oluştu.Böyle bir kişi yok");
    })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['force-ban'],
  permLevel: 0
};

exports.help = {
  name: 'ıdban',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};