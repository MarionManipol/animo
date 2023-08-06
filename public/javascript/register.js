//Input fields and button
const registerBtn = document.querySelector("#registerBtn");
const idInput = document.querySelector("#idNumber");
const confirmPassword = document.querySelector("#confirmPassword")
//forms
const regForm = document.forms.registerForm;
//error elements
const registerError = document.querySelector('#r_error');
const passwordError = document.querySelector('#p_error');

idInput?.addEventListener("keyup", async function(e){
  const url = window.location.href + '/checkIDNo?';
  fetch(url + new URLSearchParams({
    id: $(this).val()
  }))
  .then((res)=>{
    console.log(res.status);
    if(res.status == 404){
      $(idInput).css('background-color','red');
      $(registerError).text('ID Number is already taken');
      $(registerBtn).attr('disabled', true);
    }else{
      $(idInput).css('background-color','#E3E3E3');
      $(registerError).text('');
      $(registerBtn).attr('disabled', false);
    }
  });
});


registerBtn?.addEventListener("click", async function(e) {
  e.preventDefault();
  // write your code below
  console.log('clicked register');
  console.log({
    id: regForm.id.value,
    username: regForm.name.value,
    email: regForm.email.value,
    password: regForm.password.value
  }); 
  const url = window.location.href + '/register';
  await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          id: regForm.id.value,
          username: regForm.name.value,
          email: regForm.email.value,
          password: regForm.password.value
      })
  })
  .then((res) => {
      if (res.status == 200) { window.location.href = '/login-page' }
  });
});

confirmPassword.addEventListener("keyup", function () {
  const password = regForm.password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (password !== confirmPasswordValue) {
      passwordError.textContent = "Password doesn't match";
      registerBtn.disabled = true;
  } else {
      passwordError.textContent = "";
      registerBtn.disabled = false;
  }
});