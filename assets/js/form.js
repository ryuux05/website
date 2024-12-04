document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = event.target;
  const name = document.getElementsByClassName("form-name")[0].value;
  const email = document.getElementsByClassName("form-email")[0].value;
  const subject = document.getElementsByClassName("form-subject")[0].value;
  const message = document.getElementsByClassName("form-message")[0].value;

  console.log(name, email, subject, message)

  fetch('https://website-form-endpoint.onrender.com/submit', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, email, subject, message }),
  })
  .then(response => response.json())
  .then(data => {
    // Handle the server response here
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
