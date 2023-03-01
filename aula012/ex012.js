var agora = new Date()
var hora = agora.getHours() // usar a data atual do sistema que ta rodando esse script
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
