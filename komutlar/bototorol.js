const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);//GweepCreative
  
  let rol = message.mentions.roles.first()//GweepCreative
  if (!rol) return message.channel.send(`Bot otorol olarak ayarlamak istediğin rolü etiketlemelisin. \`${prefix}bototorol @Bot\``)//GweepCreative

  db.set(`bototorol_${message.guild.id}`, rol.id)//GweepCreative
  message.channel.send(`Bot otorol \`${rol.name}\` olarak ayarlandı. Kapatmak için \`${prefix}bototorol\` yazmalısın.`)//GweepCreative

};//GweepCreative
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bot-oto-rol'],
    permLevel: 0
}

exports.help = {
    name: 'bototorol',
    description: 'Sunucuya giren bota seçtiğiniz rolü otomatik verir.',
    usage: 'bototorol <@rol>'
}