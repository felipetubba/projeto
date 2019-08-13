var tvselecionada
var internetselecionada

function mudancatv() {
    tvselecionada = document.querySelector('select#tv').value || undefined
    if (tvselecionada == 'TOP HD') {
        document.querySelector('p#tv').innerHTML = `Você selecionou a tv ${tvselecionada}. É alto valor!`
        document.querySelector('p#tv').style.background="#97E8A1"
    } else if (tvselecionada == 'MIX HD') {
        document.querySelector('p#tv').innerHTML = `Você selecionou a tv ${tvselecionada}. Não é alto valor! Considere vender uma internet de 120mb para que seu ticket médio aumente.`
        document.querySelector('p#tv').style.background="#FFAFA3"
    } else {
        document.querySelector('p#tv').innerHTML = `Você deve selecionar uma TV.`
        document.querySelector('p#tv').style.background="#B9DBE6"
    }

    valorestimado()
}

function mudancainternet() {
    internetselecionada = document.querySelector('select#internet').value || undefined
    if (internetselecionada == '120mb') {
        document.querySelector('p#internet').innerHTML = `Você selecionou a internet ${internetselecionada}. É alto valor!`
        document.querySelector('p#internet').style.background="#97E8A1"
    } else if (internetselecionada == '35mb') {
        document.querySelector('p#internet').innerHTML = `Você selecionou a internet ${internetselecionada}. Não é alto valor!`
        document.querySelector('p#internet').style.background="#FFAFA3"
    } else {
        document.querySelector('p#internet').innerHTML = `Você deve selecionar uma Internet.`
        document.querySelector('p#internet').style.background="#B9DBE6"
    }
    valorestimado()
}

function valorestimado() {
    if (internetselecionada == '120mb' && tvselecionada == 'TOP HD') {
         document.querySelector('p#valorestimado').innerHTML = `Seu combo é ${tvselecionada} + ${internetselecionada}. A estimativa de comissão é R$20,00.`
     } else if (internetselecionada == '35mb' && tvselecionada == 'MIX HD'){
        document.querySelector('p#valorestimado').innerHTML = `Seu combo é ${tvselecionada} + ${internetselecionada}. A estimativa de comissão é R$10,00.`
     } else if (internetselecionada == '120mb' && tvselecionada == 'MIX HD'){
        document.querySelector('p#valorestimado').innerHTML = `Seu combo é ${tvselecionada} + ${internetselecionada}. A estimativa de comissão é R$15,00.`
     } else if (internetselecionada == '35mb' && tvselecionada == 'TOP HD'){
        document.querySelector('p#valorestimado').innerHTML = `Seu combo é ${tvselecionada} + ${internetselecionada}. A estimativa de comissão é R$15,00.`
     }
}