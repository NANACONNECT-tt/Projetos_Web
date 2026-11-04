function calcular(){
    event.preventDefault()
    let produto = document.getElementById("produto").value
    let valor = Number(document.getElementById("valor").value)
    let desconto = Number(document.getElementById("desconto").value)

    let valor_desconto = valor * (desconto / 100)
    let valor_final = valor - valor_desconto

    document.getElementById("resultado1").innerHTML = '<b> Produto: <b>' + produto
    document.getElementById("resultado2").textContent = 'Valor: R$ ' + valor
    document.getElementById("resultado3").innerText = 'Desconto: R$' + valor_desconto
    document.getElementById("resultado4").innerText = 'Valor Final: R$ ' + valor_final
    
}
function cal_restaurante(){
    event.preventDefault()
    let Valor = Number(document.getElementById("Valor").value)
    let Pessoas = Number(document.getElementById("Pessoas").value)

    let Percentual = Valor * (10 / 100)
    let Valor_atual = Valor + Percentual
    let Conta = Valor_atual / Pessoas

    document.getElementById("resultado1").innerHTML = 'Valor: ' + Valor
    document.getElementById("resultado2").innerHTML = '10%: R$ ' + Percentual
    document.getElementById("resultado3").innerHTML = 'Valor atual: ' + Valor_atual
    document.getElementById("resultado4").innerHTML = 'Valor por pessoa: ' + Conta.toFixed(2)
}
