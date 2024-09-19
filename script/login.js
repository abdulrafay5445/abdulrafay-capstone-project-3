document
    .getElementById('loginForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();
       
      let  localEmail =  localStorage.getItem('email');
       let localPassword =   localStorage.getItem('password');



        let userEmail = document.getElementById('userEmail').value
        let userPassword = document.getElementById('userPassword').value

        console.log(localEmail, localPassword );

        if(userEmail === localEmail && userPassword === localPassword ){
            window.location.href="../index.html"
        }else{
            alert('Something went wrong')
        }
    
    });