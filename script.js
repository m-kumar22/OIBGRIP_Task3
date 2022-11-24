var converter = () => {
    var firstTemp = document.getElementById('temp').value;
    
    var unitSelected = document.getElementById('tempUnit');
    var valueTemp = tempUnit.options[unitSelected.selectedIndex].value;

    var celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    var fahTocel = (fah) => {
        let celsius = Math.round((fah -32) * 5/9);
        return celsius;
    }

    let result;
    if(valueTemp=='cel'){
        result = celToFah(firstTemp);
        document.getElementById('answer').innerHTML=`${result}°Fahrenheit`;
    }else{
        result = fahTocel(firstTemp);
        document.getElementById('answer').innerHTML=`${result}°Celsius`;
    }
}