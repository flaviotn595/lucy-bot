//BOT EM CRIAÇÃO BY FLÁVIO.JS

const p = '!'
const Lucy = 'Lucy'
const numero = '5581936186122'
const numeroh = '55 8193618 6122'
const criador = "GhostJs"

// REQUIRE //
const fs = require('fs');
const os= require('os');
const Pino = require('pino');
const axios = require('axios')
const yts = require('yt-search');
const cfonts = require('cfonts');
const speed = require('performance-now');
const moment = require("moment-timezone");

// Função Para a hora/tempo
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

// Arquivo
const {
       log, 
       Lucylogo, 
       msg, 
       boton, 
       color, 
       getGroupAdmins
} = require('./lib/função/functions')

const {
	   execSync
} = require("child_process")
const { 
      smsg, 
      formatp, 
      tanggal, 
      formatDate, 
      getTime, 
      isUrl, 
      sleep, 
      clockString, 
      runtime, 
      fetchJson, 
      getBuffer, 
      jsonformat, 
      format, 
      parseMention, 
      getRandom 
} = require('./lib/myfunc')

// LIB ONDE ESTA O MENU
const { menu } = require('./lib/menus/menu')
const { yta, ytv } = require('./lib/y2mate')
const { mediafireDl } = require('./lib/mediafire.js')

// VCARD DE CONTADO
const vcard =
`BEGIN:VCARD\n`
+ 'VERSION:3.0\n' 
+ `FN:${criador}\n`
+ `ORG:${Lucy};\n`
+ `TEL;type=CELL;type=VOICE;waid=${numero}:${numeroh}\n`
+ `END:VCARD`

const { 
       default: makeWASocket,
       makeWALegacySocket, 
       DisconnectReason,
       BufferJSON,
       useSingleFileAuthState,
       MessageType,
       MessageOptions, 
       prepareWAMessageMedia,
       Mimetype 
} = require ('@adiwajshing/baileys')

// QRCODE
const { state, saveState } = useSingleFileAuthState('Lucy.json')
// QRCODE

// SISTEMA DE CONEXÕES
async function LucyJs () {
log(Lucylogo.string)
const fairy = makeWASocket({
logger: Pino({ level: 'silent' }),printQRInTerminal: true,auth: state})
fairy.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(connection === 'close') {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
log('connection closed due to ', lastDisconnect.error)
if(shouldReconnect) {LucyJs()}
} else if(connection === 'open') {
log(boton)}})
fairy.ev.on('messages.upsert', async m => {
// SISTEMA DE CONEXÕES

//quoted
try {
const mek = m.messages[0]
await fairy.sendReadReceipt(mek.key.remoteJid, mek.key.participant, [mek.key.id])
if (!mek.key.participant) mek.key.participant = mek.key.remoteJid
mek.key.participant = mek.key.participant.replace(/:[0-9]+/gi, "")
if (!mek.message) return
const fromMe = mek.key.fromMe
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message).find((key) => !["senderKeyDistributionMessage", "messageContextInfo"].includes(key))
//quoted

//alto response
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
mek.message[type].singleSelectReply.selectedRowId: (type == "fairy.sendMessageButtonMessage") &&
mek.message[type].selectedButtonId ?
mek.message[type].selectedButtonId: (type == "stickerMessage") && ((mek.message[type].fileSha256.toString("base64")) !== null && (mek.message[type].fileSha256.toString("base64")) !== undefined) ? (mek.message[type].fileSha256.toString("base64")): ""
const budy = (type === "conversation") ?
mek.message.conversation: (type === "extendedTextMessage") ?
mek.message.extendedTextMessage.text: ""
//alto response

// strings
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(p)
const enviar = (text) => {fairy.sendMessage(from, {text: text}, { quoted: mek})}
const sendRacMessage = (id, text1 = {}) => {
const reactionMessage = {react: {text: text1,key: msg.key}}
fairy.sendMessage(id, reactionMessage)}
// strings

// linguagem de grupo
const isGroup = from.endsWith("@g.us")
const groupMetadata = isGroup ? await fairy.groupMetadata(from): ""
const groupName = isGroup ? groupMetadata.subject: ""
const sender = isGroup ? mek.key.participant: mek.key.remoteJid
const pushname = mek.pushName ? mek.pushName: `${Lucy}`
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isBotGroupAdmins = getGroupAdmins(sender) || false
const groupDesc = isGroup ? groupMetadata.desc : ''
// linguagem de grupo

/// MÉDIA ETC
const quoted = m.quoted ? m.quoted : mek
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
/// MÉDIA ETC.

/// PING
const cpus = os.cpus().map(cpu => {
			cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
		})
const cpu = cpus.reduce((last, cpu, _, {
			length
		}) => {
			last.speed += cpu.speed / length
			return last
		}, {
			speed: 0,
			times: {
			}
		})
///PING

// inclusões
const dono = `${numero}@s.whatsapp.net`
const isCriador = dono.includes(sender)


// selo sei nem pq coloquei bagulho inútil kek
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}

function reaction(emoji){
      const reactionEmoji = {
              react : {
                      text: emoji,
                      key: msg.key
              }
     }
    fairy.sendMessage(from, reactionEmoji)

}

// IFS
if(!isGroup && isCmd) console.log(
color('「⸙ Cmd no Pv ⸙」','red'),'\n',
color('⸙Nome :','yellow'),color(pushname,'cyan'),'\n',
color('⸙Cmd :','yellow'),color(comando,'cyan'),'\n',
color('⸙Hora :','yellow'),color(hora,'cyan'),'\n',
color('⸙Data :','yellow'),color(data,'cyan'),'\n')

if(isCmd && isGroup) console.log(
color('「⸙ Cmd em Gp ⸙」','red'),'\n',
color('⸙Grupo :','yellow'),color(groupName,'cyan'),'\n',
color('⸙Nome :','yellow'),color(pushname,'cyan'),'\n',
color('⸙Cmd :','yellow'),color(comando,'cyan'),'\n',
color('⸙Hora :','yellow'),color(hora,'cyan'),'\n',
color('⸙Data :','yellow'),color(data,'cyan'),'\n')

// IFS

switch (comando) {

//////////////////////////////////////////////

// CMD EM TESTE
case 'ping':
let timestamp = speed()
let latensi = speed() - timestamp
enviar(`Respondendo em ${latensi.toFixed(4)} Segundo`)
reaction("🙂")
break

case 'git': case 'gitclone':
           enviar(msg.aguarde)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone link do repo\nExemplo: https://github.com/flaviotn595/lucy-bot.git`)
    if (!regex1.test(args[0])) return enviar(msg.aguarde)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    fairy.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: mek }).catch((err) => enviar(msg.error))
			break

case 'mediafire': {
if (!text) return enviar(msg.dono)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return enviar(`O link que você forneceu é inválido`)
const testando = await mediafireDl(text)
if (testando[0].size.split('MB')[0] >= 999) return enviar('*Arquivo acima do limite* '+util.format(testando))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Nome* : ${testando[0].nama}
*Tamanho* : ${testando[0].size}
*Tipo* : ${testando[0].mime}
*Link* : ${testando[0].link}`
enviar(`${result4}`)
fairy.sendMessage(from, { document : { url : testando[0].link}, fileName : testando[0].nama, mimetype: testando[0].mime }, { quoted : mek }).catch ((err) => enviar(mess.error))
}
break

//////////////////////////////////////////////

//MENU
case 'menu':
templateButtons = [
{index: 1, urlButton: {displayText: 'Grupo', url: 'https://chat.whatsapp.com/HsUtEBObAPG1GcJG5ksqus'}},
{index: 2, urlButton: {displayText: ' Dono ', url: 'https://wame/5581936186122'}},
{index: 3, quickReplyButton: {displayText: 'Criador!', id: `${p}criador`}},
{index: 4, quickReplyButton: {displayText: 'Ping!', id: `${p}ping`}},
]
templateMessage = {
image: {url: 'https://i.ibb.co/HVMkSV4/f238b6c2-b920-420f-b52c-51bba293de2c.jpg',
quoted:contato},
caption:menu,
footer: 'Lucy-Bot',
templateButtons: templateButtons
}

reaction("🙂")
fairy.sendMessage(from,templateMessage)
break

// GRUPO
case 'nomegp':
if(!isGroup) return enviar(msg.grupo)
if(!isCriador) return enviar(msg.dono)
if(!q) return enviar('Qual o nome do gp?')
fairy.groupUpdateSubject(from,`${q}`)
enviar(`Nome do grupo alterado por *_${pushname}_*`)
break

case 'descricao':
if(!isGroup) return enviar(msg.grupo)
if(!isAdmins && !isCriador) return enviar(msg.dono)
if(!q) return enviar('Qual a descrição?')
fairy.groupUpdateDescription(from,`${q}`)
enviar(`Descricao do grupo alterado por *_${pushname}_*`)
break

case 'sair':
if (!m.isGroup) return enviar(msg.grupo)
if (!isBotAdmins) return enviar(msg.bot)
if (!isAdmins && !isCreator) return enviar(msg.adm)
fairy.groupLeave(from) 
break
//GRUPO

//////////////////////////////////////////////

//DONO
case 'criador':
fairy.sendMessage(from,{ contacts: { displayName: 'Jeff',
contacts: [{ vcard }] }},{quoted:contato})
break
//DONO

//////////////////////////////////////////////

//COMANDOS
case 'play': case 'yt': {
enviar('*_Analisando sua pesquisas 🔍...._*')
const search = await yts(`${text}`).catch(e => { enviar('_Não consegui encontrar oque você queria._')})
anu = await yts( { videoId: `${search.all[0].videoId}` } )
let buttons = [{buttonId: `${p}mp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},{buttonId: `${p}mp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `_*Pesquisa Encontrada*_

⭔ *_Titulo_* : ${anu.title}
⭔ *_Views_* : ${anu.views}`,
footer: fairy.user.name,
buttons: buttons,
headerType: 4
}
fairy.sendMessage(from, buttonMessage, { quoted: mek})
} 
break

case 'mp3':{
let { yta } = require('./lib/y2mate')
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return enviar('arquivo grande '+util.format(media))
fairy.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg'}, { quoted: mek})
}
break

case '2':{
let { ytvv } = require('./lib/y2mate2')
let quality = args[1] ? args[1] : '1440p60'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return enviar('Arquivo acima do limite '+util.format(media))
fairy.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, { quoted: mek })
}
break

case 'mp4':{
let { ytv } = require('./lib/y2mate')
let quality = args[1] ? args[1] : '1080p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return enviar('Arquivo acima do limite '+util.format(media))
fairy.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, { quoted: mek })
}
break

// ARIA DE ATUALIZAÇÃO

case 'update': {
if(!isCriador) return enviar(msg.dono)
update = execSync('git remote set-url origin https://github.com/flaviotn595/lucy-bot.git && git pull')
enviar(update.toString())
}
break

//COMANDOS

default: 
 
}} catch(e) {
log(e)}})}
LucyJs()
