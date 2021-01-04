const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Yardım Menüsü`)
.setDescription(`
• Sanırım Birisi benim Siteme Gelcek :)
`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
              .addField(`Website ->`, `[Sitemiz](http://kateriaguardsupport.tk/)`)

.setFooter(`Kateria Guard Tüm Hakları Saklıdır.`))

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['website'],
  permLevel: 0
}

exports.help = {
  name: 'site'

}
