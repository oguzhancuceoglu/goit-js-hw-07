const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = loginForm.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };
    
  console.log(formData);
  loginForm.reset();
});