const screen = document.querySelector('.layar')
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const decimal = document.querySelector('.decimal')
const equalSign = document.querySelector('.equal-sign')
const reset = document.querySelector('.hapus')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// Input
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    } 
    calculationOperator = operator
    currentNumber = ''
}

// Update
const updateScreen = (number) => {
    screen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// =
equalSign.addEventListener("click", (event) => {
    // console.log('tombol = aman')
    calculate()
    updateScreen(currentNumber)
})

// Desimal
decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

// Perhitungan
const calculate = () => {
    let result = " "
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = (parseFloat(prevNumber)/100) * parseFloat(currentNumber)
            break;
        default:
            alert('Silahkan coba lagi')
            break;
    }
    screen.value = result
    prevNumber = result
    currentNumber = result
    calculationOperator = " "
}

// Hapus
reset.addEventListener('click', () => {
    // console.log('tombol AC aman')
    resetAll()
    updateScreen(currentNumber)
})

const resetAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}