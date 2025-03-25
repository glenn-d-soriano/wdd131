//Update WindChill Factor
document.addEventListener("DOMContentLoaded", function () {
    // One-line wind chill function
    const calculateWindChill = (t, v) => (t <= 10 && v > 4.8) ? (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1) + '°C' : 'N/A';

    // Set static data
    const temperature = 10; // Static temperature in Celsius
    const windSpeed = 5;   // Static wind speed in km/h

    // Only call function if conditions are met
    if (temperature <= 10 && windSpeed > 4.8) {
        document.getElementById('windChill').textContent = calculateWindChill(temperature, windSpeed);
    } else {
        document.getElementById('windChill').textContent = 'N/A';
    }

    // Update footer data
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
});
