const prefix = '!'
const dono = 'Flavio'
const bot = 'LUCY-BOT'

const fs = require ('fs')
const Pino = require ('pino')
const cfonts = require ('cfonts') 

const logoTermux = cfonts.render(('Base|Md'), {
font : "block",
align: "center",
colors: ["blue","green"]
})

const {default: makeWASocket,DisconnectReason,useSingleFileAuthState } = require ('@adiwajshing/baileys')

const { state, saveState } = useSingleFileAuthState('BarBar.json')

async function LucyBot () {
console.log(logoTermux.string)
const black = makeWASocket({
logger: Pino({ level: 'silent' }),printQRInTerminal: true,auth: state})
black.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(connection === 'close') {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log ('connection closed due to ', lastDisconnect.error)
if(shouldReconnect) {
LucyBot()
}
} else if(connection === 'open') {
console.log('Conectado !')}})
black.ev.on('messages.upsert', async m => {

try {
const mek = m.messages[0]
await black.sendReadReceipt(mek.key.remoteJid, mek.key.participant, [mek.key.id])
if (!mek.key.participant) mek.key.participant = mek.key.remoteJid
mek.key.participant = mek.key.participant.replace(/:[0-9]+/gi, "")
if (!mek.message) return
const fromMe = mek.key.fromMe
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message).find((key) => !["senderKeyDistributionMessage", "messageContextInfo"].includes(key))

const body = (type === "conversation" &&
mek.message.conversation.startsWith(p)) ?
mek.message.conversation: (type == "imageMessage") &&
mek.message[type].caption.startsWith(p) ?
mek.message[type].caption: (type == "videoMessage") &&
mek.message[type].caption.startsWith(p) ?
mek.message[type].caption: (type == "extendedTextMessage") &&
mek.message[type].text.startsWith(p) ?
mek.message[type].text: (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : 
(type == "listResponseMessage") &&
mek.message[type].singleSelectReply.selectedRowId ?
mek.message.listResponseMessage.singleSelectReply.selectedRowId: (type == "templateButtonReplyMessage") ?
mek.message.templateButtonReplyMessage.selectedId: (type === "messageContextInfo") ?
mek.message[type].singleSelectReply.selectedRowId: (type == "black.sendMessageButtonMessage") &&
mek.message[type].selectedButtonId ?
mek.message[type].selectedButtonId: (type == "stickerMessage") && ((mek.message[type].fileSha256.toString("base64")) !== null && (mek.message[type].fileSha256.toString("base64")) !== undefined) ? (mek.message[type].fileSha256.toString("base64")): ""
const budy = (type === "conversation") ?
mek.message.conversation: (type === "extendedTextMessage") ?
mek.message.extendedTextMessage.text: ""

const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(p)
const enviar = (text) => {black.sendMessage(from, {text: text}, { quoted: mek})}

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

const isGroup = from.endsWith("@g.us")
const groupMetadata = isGroup ? await black.groupMetadata(from): ""
const groupName = isGroup ? groupMetadata.subject: ""
const sender = isGroup ? mek.key.participant: mek.key.remoteJid
const pushname = mek.pushName ? mek.pushName: `${bot}`
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const criador = `${dono}@s.whatsapp.net`
const isOwner = criador.includes(sender)

if(!isGroup && isCmd) console.log(
'Comando no pv','\n','nome :',pushname,'\n','comando :',comando,'\n')

if(!isCmd && !isGroup) console.log(
'mensagem no pv','\n','nome :',pushname,'\n','mensagem :',budy,'\n')

if(isCmd && isGroup) console.log(
'comando em grupo','\n','grupo :',groupName,'\n','nome :',pushname,'\n','comando :',comando,'\n')

if(!isCmd && isGroup) console.log(
'mensagem em grupo','\n','grupo :',groupName,'\n','nome :',pushname,'\n','mensagem :',budy,'\n')

switch(comando) {

case 'texto':
black.sendMessage(from,{text: 'seu texto'})
break

case 'image':
black.sendMessage(from,{image: fs.readFileSync('./pasta/image.jpg')})
break

case 'video':
black.sendMessage(from,{video: fs.readFileSync('./pasta/video.mp4')})
break

case 'gif':
black.sendMessage(from,{video: fs.readFileSync('./pasta/video.mp4'),gifPlayback: true})
break


}} catch(e) {
console.log(e)}
})}
LucyBot()
