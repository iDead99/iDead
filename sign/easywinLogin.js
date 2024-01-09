const form=document.getElementById("form");

let username=document.getElementById("username");
let password=document.getElementById("password");
let usernameError=document.getElementById("usernameError");
let forgotPassword=document.getElementById("forgotPassword");
let pending=document.getElementById("pendingLbl");

username.addEventListener('input', function(){
   usernameError.textContent='';
})
password.addEventListener('input', function(){
   usernameError.textContent='';
})


form.addEventListener('submit', function(e){
   e.preventDefault();

   if(!navigator.onLine){
      pending.innerHTML="You're offline";
      pending.style.display='flex';
      pending.style.justifyContent='center';
      pending.style.animationPlayState='paused';
   }
   else{
      pending.innerHTML="● ● ●";

   }

   const formData=new FormData(this);

      const userData={
         username: formData.get('username'),
         password: formData.get('password'),
      };
    
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
      return response.json().then(error => {
         usernameError.textContent='Incorrect username or password!';
         forgotPassword.style.visibility="visible";
         pending.innerHTML='';
        })

   }
   return response.json();
})
.then(data => {
   const accessToken=data.access;
   localStorage.setItem('accessToken', accessToken);
   window.location.href="../game/gameDashBoard.html";
   // console.log('Login successful\nRefresh: ',data.refresh +'\nAccess: ',data.access );
})
.catch(error => {
    console.log('Error', error);
});
})