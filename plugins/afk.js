let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} انه في وضع الاختفاء${text ? ': ' + text : ''}
`)
}
handler.help = ['اختفاء [اترك سبب اختفائك]']
handler.tags = ['الاوامر']
handler.command = /^اختفاء$/i

module.exports = handler