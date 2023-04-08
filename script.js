let celsius = document.getElementById('celsius');
let farhenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

function celToAll(){
    far = ((parseFloat(celsius.value)*9)/5)+32;
    kel = (parseFloat(celsius.value) + 273.15);
    farhenheit.value = parseFloat(far.toFixed(2));
    kelvin.value = parseFloat(kel.toFixed(2));
}

function farToAll(){
    cel = ((parseFloat(farhenheit.value)-32)*5)/9;
    kel = ((parseFloat(farhenheit.value)-32)*5)/9 + 273.15;
    celsius.value = parseFloat(cel.toFixed(2));
    kelvin.value = parseFloat(kel.toFixed(2));
}

function kelToAll(){
    far = (((parseFloat(kelvin.value) - 273.15)*9)/5)+32;
    cel = parseFloat(kelvin.value) - 273.15;
    farhenheit.value = parseFloat(far.toFixed(2));
    celsius.value = parseFloat(cel.toFixed(2));
}