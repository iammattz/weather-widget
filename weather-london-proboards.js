(function () {
  fetch("https://weather.iammattz.dev/london")
    .then(res => res.json())
    .then(data => {
      const { emoji, desc, temp, updated } = data;
      document.getElementById('weather-report').textContent =
        `London: ${emoji} ${desc}, ${temp}°C (Updated: ${updated})`;
    })
    .catch(() => {
      document.getElementById('weather-report').textContent = 'Weather unavailable.';
    });
})();
