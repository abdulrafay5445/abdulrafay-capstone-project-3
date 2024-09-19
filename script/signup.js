document
    .getElementById('signupForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();
      
        let userEmail = document.getElementById('userEmail').value
        let userPassword = document.getElementById('userPassword').value

        console.log(userEmail, userPassword);

        if(userEmail && userPassword){
            localStorage.setItem('email', userEmail )
            localStorage.setItem('password', userPassword)

            window.location.href = "../pages/signin.html"
            alert('Registration Successful Please Sign In');
        }
        
    });
