document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('greetingForm');
  const nameInput = document.getElementById('nameInput');
  const errorMessage = document.getElementById('errorMessage');
  const greetingResult = document.getElementById('greetingResult');
  const greetingTitle = document.getElementById('greetingTitle');
  const greetingText = document.getElementById('greetingText');
  const resetBtn = document.getElementById('resetBtn');

  // Helper to determine time-based greeting
  function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  // Handle Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const rawName = nameInput.value;
    const trimmedName = rawName.trim();

    // Validation
    if (!trimmedName) {
      nameInput.classList.add('input-error');
      errorMessage.textContent = 'Please enter your name to continue.';
      nameInput.focus();
      return;
    }

    // Capitalize first letter of each word nicely
    const formattedName = trimmedName
      .split(' ')
      .filter(Boolean)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    const timeGreeting = getTimeBasedGreeting();

    // Populate Greeting Details
    greetingTitle.textContent = `${timeGreeting}, ${formattedName}!`;
    greetingText.textContent = `Welcome to our site! We're thrilled to have you here today. Hope you have a wonderful and productive time exploring.`;

    // Toggle Views
    form.classList.add('hidden');
    greetingResult.classList.remove('hidden');
  });

  // Clear validation error when user begins typing
  nameInput.addEventListener('input', () => {
    if (nameInput.classList.contains('input-error')) {
      nameInput.classList.remove('input-error');
      errorMessage.textContent = '';
    }
  });

  // Handle Reset / Enter Another Name
  resetBtn.addEventListener('click', () => {
    greetingResult.classList.add('hidden');
    form.classList.remove('hidden');
    nameInput.value = '';
    nameInput.focus();
  });
});
