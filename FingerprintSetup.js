let progress = 0;
const progressBar = document.getElementById('progress');
const fingerprintFill = document.querySelector('.fingerprint-fill');
const submitButton = document.getElementById('submit-button');

function simulateFingerprintScan() {
  const scanInterval = setInterval(() => {
    progress += 10; // Increase the progress by 10% (adjust as needed)
    fingerprintFill.style.width = `${progress}%`;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(scanInterval);
      submitButton.disabled = false; // Enable the submit button when scan is complete
    }
  }, 500); // Simulate scan speed (adjust the interval as needed)
}

submitButton.addEventListener('click', () => {
  alert('Fingerprint submitted successfully!');
  // Add additional logic here to handle submission
});

simulateFingerprintScan();
