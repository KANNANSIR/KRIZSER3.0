let handler  = async (m, { itsu, usedPrefix: _p }) => {
prep = itsu.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999999999, status: 1,
message: 'INSTAYIL FOLLOW CHEY MWONU\n\nhttps://www.instagram.com/_k_r_i_s_h_n_a_d_a_s_7',
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: global.thumb
}}, {contextInfo: null, quoted: m})
itsu.relayWAMessage(prep)
}



handler.help = ['sc']

handler.tags = ['main']

handler.command = /^sc$/i
handler.owner = false


module.exports = handler
