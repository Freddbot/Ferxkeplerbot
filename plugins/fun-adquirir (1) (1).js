let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*Precios del bot* 


_*PRECIOS*_

• 1 BOT 60 Pesos Mx
• 2 BOT 120 Pesos Mx
• 3 BOT 160 Pesos Mx
• 4 BOT 200 Pesos Mx
• 5 BOT 240 Pesos Mx

*_BOT MENSUAL_*

• 1 BOT MENSUAL TIENE PRECIO DE 30 PESOS ‚ SE PAGA TODOS LOS MESES

• BOT PERSONALIZADOS 400 PESOS

*🛒|• +300 COMANDOS INFO AL PRIVADO DE :*
 https://wa.me/message/MBTBZMTEGVEHL1

METODO DE PAGO: 
PAYPAL Y TRANSFERENCIA O DEPÓSITO `, null, {
mentions: [a, b]
})}
handler.help = ['adquerir']
handler.tags = ['main', 'fun']
handler.command = ['adquerir','adquirir']
handler.group = true
export default handler
