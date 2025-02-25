const stateUrl = 'https://api.countrystatecity.in/v1/countries/IN/states';
const cityUrl = 'https://api.countrystatecity.in/v1/countries/IN/states/';
const apiKey = 'RW54RWI5d09URDZSSlN1cFNPQnE3cHpDRXlFY0JTUmxCTE84YXRFYQ==';

// Fetch States
async function fetchStates() {
  const response = await fetch(stateUrl, {
    headers: { 'X-CSCAPI-KEY': apiKey },
  });
  const states = await response.json();

  const stateSelect = document.getElementById('stateid');
  stateSelect.innerHTML = '<option value="">Select State*</option>';
  states.forEach((state) => {
    const option = document.createElement('option');
    option.value = state.iso2;
    option.textContent = state.name;
    stateSelect.appendChild(option);
  });
}

// Fetch Cities based on state
async function fetchCities(stateCode) {
  const response = await fetch(`${cityUrl}${stateCode}/cities`, {
    headers: { 'X-CSCAPI-KEY': apiKey },
  });
  const cities = await response.json();

  const citySelect = document.getElementById('cityid');
  citySelect.innerHTML = '<option value="">Select City*</option>';
  cities.forEach((city) => {
    const option = document.createElement('option');
    option.value = city.name;
    option.textContent = city.name;
    citySelect.appendChild(option);
  });
}

// Event Listeners
document.getElementById('stateid').addEventListener('change', function () {
  const stateCode = this.value;
  if (stateCode) {
    fetchCities(stateCode);
  } else {
    document.getElementById('cityid').innerHTML = '<option value="">Select City*</option>';
  }
});

// Submit Form via AJAX
document.getElementById('formID').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch('submitForm.php', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  if (result.success) {
    alert('Form submitted successfully!');
    document.getElementById('formID').reset();
  } else {
    alert('Submission failed. Please try again.');
  }
});

// Initialize States on page load
fetchStates();
