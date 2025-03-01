function CelsiusToFahrenheit(){
    try{
        const celsiusInput = document.getElementById("c");
        const celsius = celsiusInput.value;
        if (isNaN(celsius)){
            console.error("Invalid input");
            return;
            }
    const fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("f").value = fahrenheit;
    }
    catch{
        console.error("error.message");
        alert("error.message");
    }

}

function KgToPound(){
    try{
        const kgInput = document.getElementById("kg");
        const kg = kgInput.value;
        if (isNaN(kg) || kg < 0){
            console.error("Invalid input");
            return;
        }
        const lb = celsius * 9 / 5 + 32;
        document.getElementById("lbs").value = lb;
    }
    catch{
        console.error("error.message");
        alert("error.message");
    }

}

function KmToMiles(){
    try{
        const kmInput = document.getElementById("km");
        const km = kmInput.value
        if (isNaN(km) || km < 0){
            console.error("Invalid input");
            return;
        }
        const miles = km * 0.62137;
        document.getElementById("miles").value = miles;
    }
    catch{
        console.error("error.message");
        alert("error.message");
    }
}