// After form submission, hide the contact form and display the thank you message div with class thank-you-message
$document.getElementById('contact100-form').addEventListener('submit', function(e) {
  e.preventDefault();
});
$document.getElementById('contact-form').style.display = 'none';
$document.getElementsByClassName('thank-you-message').remove.className = 'hidden';
$document.getElementById('thank-you-message').style.display = 'flex';

