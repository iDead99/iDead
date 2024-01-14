let withdrawBtn = document.getElementById("okWithdrawBtn");
let refreshBtn = document.getElementById("okRefreshBtn");
let withdrawContainer = document.getElementById("withdrawContainer");
let refreshContainer =document.getElementById("refreshContainer");

const accessToken=localStorage.getItem('accessToken');

withdrawBtn.onclick=function(){
    withdrawContainer.style.display='none';
    refreshContainer.style.display='block';
}

refreshBtn.onclick=function(){
    window.location.href='easywinGame.html';
}


document.getElementById("checkBox").addEventListener('change', function(){
    let checkBox='';
    if(this.checked){
        checkBox='checked';
        putCheckBox(checkBox);
    }
    else{
        checkBox='unchecked';
        putCheckBox(checkBox);
    }
})


function putCheckBox(checkBox){
    fetch("http://127.0.0.1:8000/manage_easywin/checkbox/me/", {
        method: 'PUT',
        headers: {
            'Authorization': `JWT ${accessToken}`,
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({check_box: checkBox}),
    })
    .then(response => {
        if(!response){
            throw new Error('Network is not ok!')
        }
        return response.json();
    })
    .then(data => {
    })
    .catch(error => {
        console.log(error)
    })
}