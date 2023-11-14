let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`☃️┊ *_BUITRE LIST_*┊☃️

*MODO:* 𝟏𝟔 𝐕𝐒 𝟏𝟔

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

𝔼𝕊ℂ𝕌𝔸𝔻ℝ𝔸 #𝟛
🎅🏼⇉ 
🎅🏼⇉  
🎅🏼⇉ 
🎅🏼⇉

𝔼𝕊ℂ𝕌𝔸𝔻ℝ𝔸 #𝟜 
🎅🏼⇉ 
🎅🏼⇉  
🎅🏼⇉ 
🎅🏼⇉

*_LISTA BY @iambuitre_*`, null, {
mentions: [a, b]
})}
handler.help = ['16vs16']
handler.tags = ['main', 'fun']
handler.command = ['16vs16','16vs16']
handler.group = true
export default handler
