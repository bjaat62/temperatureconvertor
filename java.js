// Wait for the document to be fully loaded before running the JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the HTML elements
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const convertButton = document.getElementById("convert");
    const resultText = document.getElementById("resultText");

    // Conversion functions
    function convertTemperature() {
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        const temperature = parseFloat(temperatureInput.value);

        // Perform the temperature conversion
        let result;
        if (fromUnit === "celsius") {
            if (toUnit === "fahrenheit") {
                result = (temperature * 9/5) + 32;
            } else if (toUnit === "kelvin") {
                result = temperature + 273.15;
            } else {
                result = temperature;
            }
        } else if (fromUnit === "fahrenheit") {
            if (toUnit === "celsius") {
                result = (temperature - 32) * 5/9;
            } else if (toUnit === "kelvin") {
                result = (temperature - 32) * 5/9 + 273.15;
            } else {
                result = temperature;
            }
        } else {
            if (toUnit === "celsius") {
                result = temperature - 273.15;
            } else if (toUnit === "fahrenheit") {
                result = (temperature - 273.15) * 9/5 + 32;
            } else {
                result = temperature;
            }
        }

        resultText.textContent = `${temperature} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
    }

    // Add an event listener to the Convert button
    convertButton.addEventListener("click", convertTemperature);

    // Initialize the conversion on page load
    convertTemperature();
});
