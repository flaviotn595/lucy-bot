const cfonts = require('cfonts')
const chalk = require('chalk')

const log = console.log
const color = (text, color) => {
return !color ? chalk.Red(text) : chalk.keyword(color)(text)
}

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

const Lucylogo = cfonts.render(('Lucy-Bot'), {
font : "block",
align: "center",
colors: ["redBright","cyan"]
})

const msg = {
dono: ' teste ',
adm: ' teste ',
bot: ' teste ',
playOn: ' teste ',
videoOn: ' teste ',
aguarde: ' teste ',
grupo: 'teste'
}

const boton = '  '

module.exports = {
log, 
msg,
color,
boton,
getGroupAdmins,
Lucylogo
}