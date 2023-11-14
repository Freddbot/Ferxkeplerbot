let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`🧝🏼‍♂️┊ *_BUITRE LIST_*┊🧝🏼‍♂️

*MODO:*  𝟖 𝐕𝐒 𝟖

𝔼𝕊ℂ𝕌𝔸𝔻ℝ𝔸 #𝟙 

🎅🏼⇉ 

🎅🏼⇉ 

🎅🏼⇉ 

🎅🏼⇉  

𝔼𝕊ℂ𝕌𝔸𝔻ℝ𝔸 #𝟚

🎅🏼⇉ 

🎅🏼⇉

🎅🏼⇉

🎅🏼⇉ 

*_LISTA BY @iambuitre_*`, null, {
mentions: [a, b]
})}
handler.help = ['8vs8']
handler.tags = ['main', 'fun']
handler.command = ['8vs8','8vs8']
handler.group = true
export default handler
