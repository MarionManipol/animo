const loginBtn = document.querySelector("#loginBtn");
const loginForm = document.forms.loginForm;
const loginError = document.querySelector('#r_error');

loginBtn?.addEventListener("click", async function(e) {
    e.preventDefault();
    console.log("clicked login")
    const url = window.location.href + '/login';
    console.log({
      id: loginForm.id.value,
      password: loginForm.password.value
    }); 

    await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id: loginForm.id.value,
        password: loginForm.password.value,
      })
    })
    .then((res) => {
      if (res.status == 200) { window.location.href = '/'; }
      else {loginError.textContent="Invalid Credentials";}
  });
    /*try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, password }),
        });

        if (response.ok) {
            window.location.href = '/animo-page'; // Redirect to another page on successful login
        } else {
            loginError.textContent = 'Invalid credentials';
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }*/
});
