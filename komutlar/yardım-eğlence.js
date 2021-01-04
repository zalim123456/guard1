const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Eğlence Yardım Menüsü`)
.setDescription(`
• ${prefix}kaçcm: Aletin Boyunu Söyler .d

• ${prefix}kumar: paranızı ya 2 ye katlarsınız yada düşürürsünüz

• ${prefix}kralol: Kral Olursunuz

• ${prefix}aşk-ölçer: Etiketlediğiniz kişiyle aşkınızı ölçer

`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
     .addField(`Linkler ->`, `[Sunucumuz](https://discord.gg/EEkVzynh6B)
      [Web Sitemiz](http://kateriaguardsupport.tk/)
      [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=792313832546369557&scope=bot&permissions=2147483647)`)
                      
                      
.setFooter(`Kateria Guard Tüm Hakları Saklıdır.`))

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help-funny'],
  permLevel: 0
}

exports.help = {
  name: 'yardım-eğlence'

}