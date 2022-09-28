function carregar(){
var hr = new Date()
var nhr = hr.getHours()
var tela1 = window.document.querySelector('div#tela')
var imagem = window.document.querySelector('img#img')

if((nhr > 3)&&(nhr <= 12)){
    //BOM DIA
tela1.innerHTML = (`Bom dia, agora são ${nhr} horas.`)
}else if((nhr <=0 )||(nhr <=3)){
    //BOA MADRUGADA
tela1.innerHTML = (`Boa madrugada, agora são ${nhr} horas.`)
imagem.setAttribute('src','madrugada.jpg')
window.document.body.style.background = '#000'
}else if((nhr > 12)&&(nhr <= 17)){
    //BOA TARDE
tela1.innerHTML = (`Boa tarde, agora são ${nhr} horas.`)
window.document.body.style.background = '#9a302d'
imagem.setAttribute ('src','por-do-sol.jpg')
}else if(nhr >=18){
    //BOA NOITE
tela1.innerHTML = (`Boa noite, agora são ${nhr} horas.`)
window.document.body.style.background = '#173442'
imagem.setAttribute ('src','noite.jpeg')
}
}
//
