let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`🥷🏽⊱┄ *BUITRE LIST*┄⊰🥷🏽

𝗠𝗢𝗗𝗢: 𝟒𝐕𝐒𝟒

🥷🏽┇𝗝𝗨𝗚𝗔𝗗𝗢𝗥𝗘𝗦┇🥷🏽

⇉
⇉
⇉
⇉

🥷🏽┇𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦┇🥷🏽

⇉
⇉

🥷🏽┇𝗗𝗢𝗡𝗔𝗗𝗢𝗥 𝗗𝗘 𝗦𝗔𝗟𝗜𝗧𝗔┇🥷🏽

⇉
*_LISTA BY @iambuitre_*`, null, {
mentions: [a, b]
})}
handler.help = ['4vs4']
handler.tags = ['main', 'fun']
handler.command = ['4vs4','4vs4']
handler.group = true
export default handler
