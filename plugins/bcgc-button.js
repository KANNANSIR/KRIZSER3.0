let handler  = async (m, { itsu, text, usedPrefix: _p }) => {
  let fs = require('fs')
  let fetch = require('node-fetch')
  const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "918590634460-1630461467@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "ＡＥＸＡ ＢＯＴ", 
            "caption": "「 ᴍɪɴᴇ ʙᴏᴛ ʙʀᴏᴀᴅᴄᴀsᴛ ♡ 」", 
            'jpegThumbnail': global.thumb
		}
	}
}
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  try {
    pp = await itsu.getProfilePicture(who)}
    catch (e){
    }

  let groups = itsu.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = await itsu.cMod(m.chat, cc, /bc|broadcast/i.test(text))
  itsu.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) itsu.send2Button(id, text, '© KRIZSER', 'ok', 'Rhelp', 'owner', _p + 'owner')
  itsu.reply(m.chat, `_Done_`, m)
}


handler.help = ['bcgc-v'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(bcgc-b)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)


