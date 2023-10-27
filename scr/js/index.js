const txtOp1 = document.getElementById("op1")
const txtOperacao = document.getElementById("operacao")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular() {
    const operacao = txtOperacao.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)


    if ((operacao == "+" || operacao == "-" || operacao == "*" || operacao == "/") && !isNaN(op1) && !isNaN(op2)) {
        let resultado;
        switch (operacao) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;

        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    } else {
        pResultado.style = "color:red"
        pResultado.innerText = "Error!"
    }
}