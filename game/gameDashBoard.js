let profile=document.getElementById("easywinProfile");
let siteName=document.getElementById("siteName");
let userProfile=document.getElementById("userProfile");
let balanceContainer=document.getElementById("balanceContainer");
let balance=document.getElementById("balanceContainer");
let amount=document.getElementById("balance");
let displayProfile=document.getElementById("displayProfile");
let cut=document.getElementById("cut");
let usernameLbl=document.getElementById("usernameLbl");
let firstNameLbl=document.getElementById("firstNameLbl");
let lastNameLbl=document.getElementById("lastNameLbl");
let emailLbl=document.getElementById("emailLbl");
let birthdateLbl=document.getElementById("birthdateLbl");
let phoneLbl=document.getElementById("phoneLbl");
let mainContained=document.getElementById("mainContained");
let bottomPane=document.getElementById("bottomPane");
let footer=document.getElementById("footer");
let withdraw=document.getElementById("withdrawBtn");
let withdrawError=document.getElementById("withdrawError");
let easywinGame = document.getElementById("easywinGame");


const accessToken=localStorage.getItem('accessToken');

function putCheckBox(){
    // http://127.0.0.1:8000/manage_easywin/checkbox/me/
    fetch("https://easywin.onrender.com/manage_easywin/checkbox/me/", {
        headers: {
            'Authorization': `JWT ${accessToken}`,
            'Content-Type': 'application/json',
            },
    })
    .then(response => {
        if(!response){
            throw new Error('Network is not ok!')
        }
        return response.json();
    })
    .then(data => {
        if(data.check_box==='checked'){
            window.location.href='easywinGame.html';
        }
        else if(data.check_box==='unchecked'){
            window.location.href='alertPlayer.html';
        }
    })
    .catch(error => {
        console.log(error)
    })
    }

easywinGame.addEventListener('click', function(){
    putCheckBox();
})


cut.onclick=function(){
    siteName.style.display='block';
    userProfile.style.display='none';
    displayProfile.style.display='none';
    balance.style.display='block';
    withdraw.style.display='none';
    withdrawError.style.display='none';
    bottomPane.style.display='none';
    mainContained.style.display='block';
    footer.style.display='block';
    balanceContainer.style.display='none';
}

profile.addEventListener('click', function(){
    userProfile.style.display='block';
    siteName.style.display='none';
    mainContained.style.display='none';
    footer.style.display='none';
    displayProfile.style.display='block';
    bottomPane.style.display='block';
    balanceContainer.style.display='block';
    withdraw.style.display='block';

function fetchUser(){

    // http://127.0.0.1:8000/auth/users/me/ 
    fetch("https://easywin.onrender.com/auth/users/me/", {
        headers: {
            'Authorization': `JWT ${accessToken}`,
            'Content-Type': 'application/json',
         }
    })
    .then(response => {
        if(!response){
            throw new Error('Network is not ok!')
        }
        return response.json();
    })
    .then(data => {
        // console.log(data)
        displayUserData(data)
    })
    .catch(error => {
        console.log(error)
    })
}
fetchUser();
fetchUserProfile();
function fetchUserProfile(){

    // http://127.0.0.1:8000/manage_easywin/customers/me/
    fetch("https://easywin.onrender.com/manage_easywin/customers/me/", {
        headers: {
            'Authorization': `JWT ${accessToken}`,
            'Content-Type': 'application/json',
         }
    })
    .then(response => {
        if(!response){
            throw new Error('Network was not ok!');
        }
    return response.json();
    })
    .then(data => {
        // console.log(data);
        displayUserProfileData(data);
    })
}

function displayUserData(userData){
    usernameLbl.innerHTML=userData.username;
    firstNameLbl.innerHTML=`First name: ${userData.first_name}`;
    lastNameLbl.innerHTML=`Last name: ${userData.last_name}`;
    emailLbl.innerHTML=`Email: ${userData.email}`;
    }
function displayUserProfileData(userData){
    phoneLbl.innerHTML=`Phone number: ${userData.phone}`;
    birthdateLbl.innerHTML=`Birthdate: ${userData.birth_date}`;
    if((userData.balance)%1==0){
        amount.innerHTML=userData.balance+'.00';
    }
    else{
        amount.innerHTML=userData.balance;
    }

    withdraw.onclick=function(){
        if(userData.balance<100){
            withdrawError.style.display='block';
            return;
        }
    }

}

})