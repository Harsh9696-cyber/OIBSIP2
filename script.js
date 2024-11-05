// script.js
function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    
    if (isNaN(inputValue)) {
      alert("Please enter a valid number");
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    switch (inputUnit) {
      case "celsius":
        celsius = inputValue;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        break;
      case "fahrenheit":
        fahrenheit = inputValue;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
        break;
      case "kelvin":
        kelvin = inputValue;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        break;
    }
  
    document.getElementById("outputCelsius").textContent = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById("outputFahrenheit").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById("outputKelvin").textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
  }
  