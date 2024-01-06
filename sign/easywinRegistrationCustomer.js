let form=document.getElementById("form");
function populateCountryCodes(){
   const countryCodes = [
      {name: "USA (1)", code: "+1"},
      {name: "UK (+44)", code: "+44"},
      {name: "Australia (+61)", code: "+61"},
      {name: "Italy (+39)", code: "+39"},
      {name: "France (+33)", code: "+33"},
      {name: "Germany (+49)", code: "+49"},
      {name: "Spain (+34)", code: "+34"},
      {name: "Nigeria (+234)", code: "+234"},
      {name: "South Africa (+27)", code: "+27"},
      {name: "Ghana (+233)", code: "+233"},
      {name: "Kenya (+254)", code: "+254"},
      {name: "Algeria (+213)", code: "+213"},
      {name: "Tunisia (216)", code: "+216"},
      {name: "Morocco (+212)", code: "+212"},
      {name: "Libya (+218)", code: "+218"},
      {name: "Niger (+227)", code: "+227"},
      {name: "Madagascar (+261)", code: "+261"},
      {name: "Ethiopia (+251)", code: "+251"},
      {name: "Mali (+223)", code: "+223"},
      {name: "Tanzania (+255)", code: "+255"},
      {name: "Cote d'Ivoire (+225)", code: "+225"},
      {name: "Uganda (+256)", code: "+256"},
      {name: "Burkina Faso (+226)", code: "+226"},
      {name: "Senegal (+221)", code: "+221"},
      {name: "Angola (+244)", code: "+244"},
      {name: "Zimbabwe (+263)", code: "+263"},
      {name: "Cameroon (+237)", code: "+237"},
      {name: "Sierra Leone (+232)", code: "+232"},
      {name: "Guinea (+224)", code: "+224"},
      {name: "Benin (+229)", code: "+299"},
      {name: "Malawi (+265)", code: "+265"},
      {name: "Togo (+228)", code: "+228"},
      {name: "Sudan (+249)", code: "+249"},
      {name: "Chad (+235)", code: "+235"},
      {name: "Lesotho (+266)", code: "+266"},
   ];
   countryCodes.sort((a, b) => (a.name > b.name)? 1 : -1);

   const selectElement=document.getElementById("countryCode");

   countryCodes.forEach(country =>{
      const option=document.createElement("option");
      option.value=country.code;
      option.text=country.name;
      selectElement.appendChild(option);
   });
}

let phoneNumber=document.getElementById("phoneNumber");
phoneNumber.addEventListener('input', function(){
   const userInput=phoneNumber.value;
   if(/[^0-9]/.test(userInput)){
      phoneNumber.value=userInput.replace(/[^0-9]/g, '');
   }
})

let birthdate=document.getElementById("birthdate");
let ageDisplay=document.getElementById("ageDisplay");
birthdate.addEventListener('input', function(){
   birthdateError.textContent='';
   ageDisplay.textContent='';
})

form.addEventListener('submit', function(event){
   event.preventDefault();

   const countryCode=document.getElementById("countryCode").value;
   const phoneNumber=document.getElementById("phoneNumber").value;
   const birthdate=document.getElementById("birthdate").value;
   const birthdateError=document.getElementById("birthdateError");
   const ageDisplay=document.getElementById("ageDisplay");

   let newBirthdate=new Date(document.getElementById("birthdate").value);
   let today=new Date();
   let age=today.getFullYear()-newBirthdate.getFullYear();
   let monthDiff=today.getMonth()-newBirthdate.getMonth();

   if(monthDiff<0 || (monthDiff===0 && today.getDate()< newBirthdate.getDate())){
      age--;
   }

   if(age<18 && age>=0){
      if(age===1){
      birthdateError.textContent='user must be 18 or older';
      ageDisplay.textContent=`You're ${age}yr`
      }
      else{
         birthdateError.textContent='user must be 18 or older';
         ageDisplay.textContent=`You're ${age}yrs`
         }
      return;
   }
   else if(age<0){
      birthdateError.textContent='user must be 18 or older';
      ageDisplay.textContent='You don\'t exist'
      return;
   }

   const formattedPhoneNumber=countryCode+phoneNumber;
   // console.log(formattedPhoneNumber)

function customerRegistration(customerData){
      const accessToken=localStorage.getItem('accessToken');
      // console.log(accessToken);
      if(!accessToken){
         console.log('Access token not found in localStorage');
         return null;
      }
      else{
         window.location.href="easywinLogin.html";
      }

      // http://127.0.0.1:8000/manage_easywin/customers/me/ 
      fetch('https://easywin.onrender.com/manage_easywin/customers/me/', {
      method: 'PUT',
      headers: {
         'Authorization': `JWT ${accessToken}`,
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData)
   })
   .then(response =>{
      if(!response.ok){
         throw new Error('Customer registration failed');
      }
      return response.json();
   })
   .then(data => {
      // localStorage.getItem('access');
      // console.log('Customer registration successful', data);
   })
   .catch(error =>{
      console.log('Error', error)
   });
   localStorage.removeItem('accessToken');
}

   const customerData={
      phone: formattedPhoneNumber,
      birth_date: birthdate
   };

   customerRegistration(customerData);

});

populateCountryCodes();