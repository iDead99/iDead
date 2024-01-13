function game(){
    let computerGuess=Math.floor((Math.random()*10)+1);
    // console.log(computerGuess);
    let playerGuess;
    let guesses=0;
    let endGuess=3;
    
    let button1= document.getElementById("btn1");
    let button2= document.getElementById("btn2");
    let button3= document.getElementById("btn3");
    let button4= document.getElementById("btn4");
    let button5= document.getElementById("btn5");
    let button6= document.getElementById("btn6");
    let button7= document.getElementById("btn7");
    let button8= document.getElementById("btn8");
    let button9= document.getElementById("btn9");
    let button10= document.getElementById("btn10");
    let button12= document.getElementById("btn12");
    let LeftScorelineBtn1= document.getElementById("LeftScorelineBtn1");
    let LeftScorelineBtn2= document.getElementById("LeftScorelineBtn2");
    let LeftScorelineBtn3= document.getElementById("LeftScorelineBtn3");
    let RightScorelineBtn1= document.getElementById("RightScorelineBtn1");
    let RightScorelineBtn2= document.getElementById("RightScorelineBtn2");
    let RightScorelineBtn3= document.getElementById("RightScorelineBtn3");
    let replay=document.getElementById("replayBtn");
    let result=document.getElementById("result");

    replay.onclick=function(){
        location.reload();
    }
    
    function scorelineMove(playerNumber, computerNumber, guessCount){
        if(guessCount==1){
            LeftScorelineBtn1.style.backgroundColor="black";
            LeftScorelineBtn1.innerHTML=playerNumber;
    
            if(playerNumber==computerNumber){
                RightScorelineBtn2.style.backgroundColor="black";
                RightScorelineBtn2.innerHTML=computerNumber;
                result.innerHTML="Congratulations\n"+"YOU WIN!!";
                animatePlayerWin();
                disable();
                replay.style.display="block";
            }
    
            else if(playerNumber<computerNumber){
                RightScorelineBtn1.style.backgroundColor="black";
                RightScorelineBtn1.innerHTML="▼";
                result.innerHTML=`Attempts Left: ${3-guessCount}`;
            }
            else if(playerNumber>computerNumber){
                RightScorelineBtn3.style.backgroundColor="black";
                RightScorelineBtn3.innerHTML="▲";
                result.innerHTML=`Attempts Left: ${3-guessCount}`;
            }
        }
        else if(guessCount==2){
            LeftScorelineBtn2.style.backgroundColor="black";
            LeftScorelineBtn2.innerHTML=playerNumber;
    
            if(playerNumber==computerNumber){
                RightScorelineBtn2.style.backgroundColor="black";
                RightScorelineBtn2.innerHTML=computerNumber;
                result.innerHTML="Congratulations\n"+"YOU WIN!!";
                animatePlayerWin();
                disable();
                replay.style.display="block";
            }
    
            else if(playerNumber<computerNumber){
                RightScorelineBtn1.style.backgroundColor="black";
                RightScorelineBtn1.innerHTML="▼";
                result.innerHTML=`Attempts Left: ${3-guessCount}`;
            }
            else if(playerNumber>computerNumber){
                RightScorelineBtn3.style.backgroundColor="black";
                RightScorelineBtn3.innerHTML="▲";
                result.innerHTML=`Attempts Left: ${3-guessCount}`;
            }
        }
        else if(guessCount==3){
            LeftScorelineBtn3.style.backgroundColor="black";
            LeftScorelineBtn3.innerHTML=playerNumber;
    
            if(playerNumber==computerNumber && guessCount>=endGuess){
                disable();
                animation();
                setTimeout(waitForAnimee, 5000)
                function waitForAnimee(){
                RightScorelineBtn2.style.backgroundColor="black";
                RightScorelineBtn2.innerHTML=computerNumber;
                result.innerHTML="Congratulations\n"+"YOU WIN!!";
                animatePlayerWin();
                replay.style.display="block";
                }
            
            }
            else if(playerNumber!=computerNumber && guessCount>=endGuess){
                disable();
                animation();
                setTimeout(waitForAnimee, 5000)
                function waitForAnimee(){
                RightScorelineBtn2.style.backgroundColor="black";
                RightScorelineBtn2.innerHTML=computerNumber;
                result.innerHTML='YOU LOSE!!'
                animateComputerWin();
                replay.style.display="block";
                }
            }
            
            if(playerNumber<computerNumber){
                RightScorelineBtn1.style.backgroundColor="black";
                RightScorelineBtn1.innerHTML="▼";
                result.innerHTML=`Attempts Left: ${3-guessCount}`;
            }
            else if(playerNumber>computerNumber){
                RightScorelineBtn3.style.backgroundColor="black";
                RightScorelineBtn3.innerHTML="▲";
                result.innerHTML=`Attempts Left: ${3-guessCount}`;
            }
        }
    
    }
    
    
    function animation(){
        setTimeout(frame, 500)
        function frame(){
        document.querySelector(".btnContainer").classList.toggle('animate');
        }
    }
    function animatePlayerWin(){
        document.querySelector(".LeftScorelineBtnContainer").classList.toggle('animate');
    }
    function animateComputerWin(){
        document.querySelector(".RightScorelineBtnContainer").classList.toggle('animate');
    }
    
    
    button1.onclick=function(){
        playerGuess=1;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
        // result.innerHTML=`Attempts Left: ${3-guesses}`;
    //     if(guesses>=endGuess && playerGuess!=computerGuess){
    //     result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button2.onclick=function(){
        playerGuess=2;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
        // result.innerHTML=`Attempts Left: ${3-guesses}`;
    //     if(guesses>=endGuess && playerGuess!=computerGuess){
    //     result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button3.onclick=function(){
        playerGuess=3;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
        // result.innerHTML=`Attempts Left: ${3-guesses}`;
    //     if(guesses>=endGuess && playerGuess!=computerGuess){
    //     result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button4.onclick=function(){
        playerGuess=4;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
        // result.innerHTML=`Attempts Left: ${3-guesses}`;
        // if(guesses>=endGuess && playerGuess!=computerGuess){
        // result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button5.onclick=function(){
        playerGuess=5;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
        // result.innerHTML=`Attempts Left: ${3-guesses}`;
        // if(guesses>=endGuess && playerGuess!=computerGuess){
        // result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button6.onclick=function(){
        playerGuess=6;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
        // result.innerHTML=`Attempts Left: ${3-guesses}`;
        // if(guesses>=endGuess && playerGuess!=computerGuess){
        // result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button7.onclick=function(){
        playerGuess=7;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
        // result.innerHTML=`Attempts Left: ${3-guesses}`;
        // if(guesses>=endGuess && playerGuess!=computerGuess){
        // result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button8.onclick=function(){
        playerGuess=8;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
    //     result.innerHTML=`Attempts Left: ${3-guesses}`;
    //     if(guesses>=endGuess && playerGuess!=computerGuess){
    //     result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button9.onclick=function(){
        playerGuess=9;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
    //     result.innerHTML=`Attempts Left: ${3-guesses}`;
    //     if(guesses>=endGuess && playerGuess!=computerGuess){
    //     result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    button10.onclick=function(){
        playerGuess=10;
        guesses++;
        // lessOrGreat(playerGuess, computerGuess, guesses);
    //     result.innerHTML=`Attempts Left: ${3-guesses}`;
    //     if(guesses>=endGuess && playerGuess!=computerGuess){
    //     result.innerHTML='YOU LOSE!!'
    // }
        scorelineMove(playerGuess, computerGuess, guesses);
        //computerMove(computerGuess, playerGuess);
    }
    
    function disable(){
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        button4.disabled=true;
        button5.disabled=true;
        button6.disabled=true;
        button7.disabled=true;
        button8.disabled=true;
        button9.disabled=true;
        button10.disabled=true;
    }
    
    
        
    
    
    
    
    // getGuess()
    
    // function getGuess(){
    // document.getElementById("btn1").onclick=function(){
    //     let playerGuess=1;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }
    // }
    
    // document.getElementById("btn2").onclick=function(){
    //     let playerGuess=2;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }
    // }
    
    // document.getElementById("btn3").onclick=function(){
    //     let playerGuess=3;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }
    // }
    
    // document.getElementById("btn4").onclick=function(){
    //     let playerGuess=4;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }
    // }
    
    // document.getElementById("btn5").onclick=function(){
    //     let playerGuess=5;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }   
    // }
    
    // document.getElementById("btn6").onclick=function(){
    //     let playerGuess=6;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }   
    // }
    
    // document.getElementById("btn7").onclick=function(){
    //     let playerGuess=7;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }    
    // }
    
    // document.getElementById("btn8").onclick=function(){
    //     let playerGuess=8;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }    
    // }
    
    // document.getElementById("btn9").onclick=function(){
    //     let playerGuess=9;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }    
    // }
    
    // document.getElementById("btn10").onclick=function(){
    //     let playerGuess=10;
    //     guesses++;
    //     if(playerGuess==guessNumber){
    //         document.getElementById("result").innerHTML=`YOU WIN!!🏆 <br>
    //             Number of guesses: ${guesses} <br>
    //             🥉🥉🥉🥉🥉🥉🥉`;
    //             disable()
    //     }
    //     else if(playerGuess>guessNumber){
    //         document.getElementById("result").innerHTML='Too High😂!'
    //     }
    //     else if(playerGuess<guessNumber){
    //         document.getElementById("result").innerHTML='Too Low😂!'
    //     }
    //     if(guesses==endGuess && playerGuess!=guessNumber){
    //         document.getElementById("result").innerHTML='YOU LOSE😩!!'
    //         disable()
    //     }    
    // }
    // }
    
    
    // document.getElementById("replayBtn").onclick=function(){
    //     location.reload()
    // }
    
    // const apiUrl='http://127.0.0.1:8000/store/products/';
    
    // fetch(apiUrl)
    //     .then(response =>{
    //         if(!response.ok){
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json(); 
    //     })
    //     .then(data=> {
    //         // if(!Array.isArray(data)){
    //         //     throw new Error('Data received is not an array')
    //         // }
    
    //         const product=Array.isArray(data)? data:[data];
    
    //         const productList=document.getElementById("product-list");
    //         let htm='<ul>'
    //         data.forEach(item =>{
    //             htm+=`<li>${JSON.stringify(item)}</li>`;
    //         });
    //             htm+='</ul>';
    //             productList.innerHTML=htm;
    //         })
    
    //     .catch(error => {
    //         console.error('There has been a problem with your fetch operation', error)
    //     });
    
    }
    
    setTimeout(game, 3000);