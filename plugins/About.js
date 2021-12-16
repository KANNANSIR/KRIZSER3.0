let handler  = async (m, { itsu, usedPrefix: _p }) => {
  let fetch = require('node-fetch')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  try {
    pp = await itsu.getProfilePicture(who)}
    catch (e){
    }
    let ppGc = await itsu.getProfilePicture(m.chat)
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let fs = require ('fs')
const peli = fs.readFileSync('./kokomi.jpeg')
itsu.sendMessage(m.chat, '- _*About me*_\n\n- Owner : Rell\n- Age: 16/ IAM STILL SUTDY AT +1\n - Github: KANNANSIR\n\n thx.' , text, {quoted: m, thumbnail: fs.readFileSync('./sarkas.webp'), contextInfo:{externalAdReply: {title: itsu.user.name , body: '>///<',sourceUrl: 'https://chat.whatsapp.com/IwOZg4VGdJq4lTH12aPOzc', thumbnailUrl: pp}}})
}

handler.help = ['about']

handler.tags = ['main']

handler.command = /^about$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler
