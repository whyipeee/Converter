
convertBtn.addEventListener("click",function(){
 let inputanEl= Number(document.getElementById("inputan").value)
 panjang(inputanEl)
 volume(inputanEl)
 berat(inputanEl)
})

function panjang(inputanEl){
    let lengthEl = document.getElementById("length-El")
    let meterToFeet = (inputanEl *3.281).toFixed(3)
    let feetToMeter = (inputanEl *0.3048).toFixed(3)
    lengthEl.textContent = `${inputanEl} Meter = ${meterToFeet} Feet | ${inputanEl} Feet = ${feetToMeter} Meter`
} 

function volume(inputanEl){
    let volumeEl = document.getElementById("volume-El")
    let literToGallon = (inputanEl*0.264).toFixed(3)
    let gallonToLiter = (inputanEl*3.78541).toFixed(3)
    volumeEl.textContent= `${inputanEl} Liters = ${literToGallon} Gallons | ${inputanEl} Gallons = ${gallonToLiter} Liters`
}

function berat(inputanEl){
    let beratEl =document.getElementById("berat-El")
    let kilogramToPounds = (inputanEl*2.204).toFixed(3)
    let poundsToKilogram = (inputanEl*0.453592).toFixed(3)
    beratEl.textContent = `${inputanEl} Kilogram = ${kilogramToPounds} Pounds | ${inputanEl} Pounds = ${poundsToKilogram} Kilogram`
}