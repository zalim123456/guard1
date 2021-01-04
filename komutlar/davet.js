const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Davet Menüsü`)
.setDescription(`
• Sanırım Birisi beni Sunucusuna Eklemek İstiyor
•E ekliceksen Linkleri atıyım ama destek sunucumuzada gel
`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
      .addField(`Davet ->`, `[Sunucumuz](https://discord.gg/EEkVzynh6B)`)
                      .addField(`Bot Davet et ->`, `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=792313832546369557&scope=bot&permissions=2147483647)`)                 
.setFooter(`Kateria Guard Tüm Hakları Saklıdır.`))

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['invite'],
  permLevel: 0
}

exports.help = {
  name: 'davet'

}