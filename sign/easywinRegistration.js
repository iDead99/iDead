let form=document.getElementById("form");
let username=document.getElementById("username");
let password=document.getElementById("password");
let usernameError=document.getElementById("usernameError");
let confirm_password=document.getElementById("confirm-password");
let passwordError1=document.getElementById("passwordError1");
let passwordError2=document.getElementById("passwordError2");
let passwordTooShort=document.getElementById("passwordTooShort");
let email=document.getElementById("email");
let emailError=document.getElementById("emailError");
let first_name=document.getElementById("first-name");
let last_name=document.getElementById("last-name");
let pending=document.getElementById("pendingLbl");
let pendingError=document.getElementById("pendingError");

username.addEventListener('input', function(){
    usernameError.style.display='none';
})
password.addEventListener('input', function(){
    passwordError1.style.display='none';
    passwordError2.innerHTML='';
    passwordTooShort.style.display='none';
})
confirm_password.addEventListener('input', function(){
    passwordError1.style.display='none';
    passwordError2.innerHTML='';
    passwordTooShort.style.display='none';
})
email.addEventListener('input', function(){
    emailError.style.display='none';
})

    // first_name=(first_name.value.slice(0, 1).toUpperCase()) + (first_name.value.slice(1).toLowerCase());
    // console.log(first_name);

    // last_name=(last_name.value.slice(0, 1).toUpperCase()) + (last_name.value.slice(1).toLowerCase());
    // console.log(last_name);

form.addEventListener('submit', function(event){
   event.preventDefault();

   if(!navigator.onLine){
    pending.innerHTML='';
    pendingError.innerHTML='Oops!! Poor Connection';
    return null;
    }
    else{
    pendingError.innerHTML='';
    pending.innerHTML='● ● ●';

    if(password.value!==confirm_password.value){
    pending.innerHTML='';
    passwordError1.style.display='block';
    passwordError2.innerHTML='Passwords do not match!';
    password.value='';
    confirm_password.value='';
    return;
    }
    else if(password.value.length<8){
        pending.innerHTML='';
        passwordTooShort.style.display='block';
        passwordError2.innerHTML='Must contain at least 8 characters';
        return;
    }

function userRegistration(userData){
    // http://127.0.0.1:8000/auth/users/ 
    fetch("https://easywin.onrender.com/auth/users/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        })
        .then(response => {
        if(!response.ok){
            // throw new Error("Network not ok");
        return response.json().then(error =>{
            if(error.username){
                pending.innerHTML='';
                usernameError.style.display='block';
                // return;
            }
            if(error.email){
                pending.innerHTML='';
                emailError.style.display='block';
                // return;
            }
        })   
        }
        else{
             const authUserData={
                username: formData.get('username'),
                password: formData.get('password'),
                };
        
        authenticateUser(authUserData);
        }
            return response.json();
        })
        .then(data => {
        // console.log(data);
        })
        .catch(error => {
        console.log(error);
    })


    }

const formData=new FormData(this);

    const userData={
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email'),
        first_name: formData.get('first-name'),
        last_name: formData.get('last-name')
        };

userRegistration(userData);


function authenticateUser(userData){
    // http://127.0.0.1:8000/auth/jwt/create 
    fetch("https://easywin.onrender.com/auth/jwt/create",{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    
       })
       .then(response => {
        if(!response.ok){
             throw new Error('authorization failed!');
          }
          return response.json();
       })
     .then(data => {
       // console.log(data.error)
       const accessToken=data.access;
       localStorage.setItem('accessToken', accessToken);
       window.location.href="easywinRegistrationCustomer.html";
    //    console.log('Login successful', accessToken);
    
          // throw new Error('Access token not found in response');
     
    })
    .catch(error => {
     console.log('Error', error);
    });
    
}

}



});

