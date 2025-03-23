// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        let windchill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windchill.toFixed(1) + ' °C';
    } else {
        return 'N/A';
    }
}

// Set static data
const temperature = 12; // Static temperature in Celsius
const windSpeed = 20;   // Static wind speed in km/h

// Display Wind Chill
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').innerText = `Windchill: ${windChill}`;


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
