let inputEl = document.getElementById("input-value");
let btnEl = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-result")
let volEl = document.getElementById("volume-result")
let massEl = document.getElementById("mass-result")

const meterToFeet = 3.281
const feetToMeter = 1 / 3.281
const literToGallon = 0.264
const gallonToLiter = 1 / 0.264
const kiloToPound = 2.204
const poundToKilo = 1 / 2.204 

btnEl.addEventListener('click', function(){
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meter`
    
    volEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
    
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`
})