const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {
  
  if(message.channel.id != "KANAL ID") return message.channel.send(':x: **Bu Komutudu <#KANAL ID> Kanalında Kullan!**').then(n => n.delete(5000));
  //GweepCreative
  //GweepCreative
  message.channel.bulkDelete(1)//GweepCreative
  let user = message.author//GweepCreative
    //GweepCreative
  const cfx1 = new Discord.RichEmbed()//GweepCreative
  .setDescription(`**İstek Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\``)//GweepCreative
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | İstek Sistemi.`, client.user.avatarURL)//GweepCreative
  const cfx2 = new Discord.RichEmbed()//GweepCreative
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)//GweepCreative
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | İstek Sistemi.`, client.user.avatarURL)//GweepCreative
//GweepCreative
  const cfx4 = new Discord.RichEmbed()//GweepCreative
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)//GweepCreative
  .setColor("#00ff88")//GweepCreative
  .setFooter(`${client.user.username} | İstek Sistemi.`, client.user.avatarURL)//GweepCreative
//GweepCreative
  //GweepCreative
  //GweepCreative
  //GweepCreative
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxistekkanal)
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {

//CodeFENIX // CFX




db.set(`emo${message.author.id}`, message.author.id)
    let emo = await db.fetch(`emo${message.author.id}`)
///GweepCreative
    chan.send(`<@&678165769963700224>`).then(m => {
chan.send(new Discord.RichEmbed()
.setColor("#00ff88")
.addField(`\n\nKullanıcı Adı`, message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField("**İstek Kod**", `\`${code}\``)
.addField("Sayın Yetkililer! İstek Kod Eklendiyse `✅` Buna, Eklenmediyse `❎` Buna Basınız! Boş Yere Kullanan Kişiler Ceza Alıcaktır! ", "** **")  
.setThumbnail(message.author.avatarURL))
.then(async function(sentEmbed) {
     ///GweepCreative
        const emojideistir = ["✅", "❎", "🔒"];
        const filter = (reaction) =>
     //GweepCreative
          emojideistir.includes(reaction.emoji.name)

    //GweepCreative
        await sentEmbed.react(emojideistir[0]).catch(function() {});
        await sentEmbed.react(emojideistir[1]).catch(function() {});
        await sentEmbed.react(emojideistir[2]).catch(function() {});
              var reactions = sentEmbed.createReactionCollector(filter, {
        });
 reactions.on("collect", async function (reaction) {
   if(reaction.bot) return;
				if (reaction.emoji.name === "✅") {          
          message.guild.members.find(x => x.id === emo).send(':tada: **İsteğiniz Yetkililer Tarafından Kabul Edildi!**')
        }
 
    if (reaction.emoji.name === "❎") {          
    message.guild.members.find(sads => sads.id === emo).send(':x: **İsteğiniz Yetkililer Tarafından Reddedildi! Üzgünüm!**')     
   }   

})})
})
message.author.send(cfx4).then(m => {
  m.delete(300000)
})

}};

// //GweepCreative
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'istek'
};
