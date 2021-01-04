const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Yardım Menüsü`)
.setDescription(`
• Sanırım Birisi benim destek sunucuma gelcek
`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
      .addField(`Davet ->`, `[Sunucumuz](https://discord.gg/EEkVzynh6B)`)
                    .setFooter(`Kateria Guard Tüm Hakları Saklıdır.`))


//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['d','support'],
  permLevel: 0
}

exports.help = {
  name: 'destek'

}