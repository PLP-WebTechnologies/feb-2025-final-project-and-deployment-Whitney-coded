// Contact form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    let valid = true;

    if (name === '') {
      alert('Please enter your name.');
      valid = false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Please enter a valid email address.');
      valid = false;
    }

    if (message === '') {
      alert('Please enter a message.');
      valid = false;
    }

    if (valid) {
      alert('Thank you for contacting WhitneyNails!');
      form.reset();
    }
  });
});
