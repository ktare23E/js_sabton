
        let rock = document.querySelector('.rock');
        let paper = document.querySelector('.paper');
        let scissors = document.querySelector('.scissors');
        let winScore = document.querySelector('.win');
        let loseScore = document.querySelector('.lose');
        let drawScore = document.querySelector('.draw');
        let reset = document.querySelector('.reset');
        let gameDecision = document.querySelector('.gameResult');
        let gameInfo = document.querySelector('.gameInfo');
        let autoPlay = document.querySelector('.js-auto-play-button');
        let bodyElement = document.querySelector('.myBody');

        let score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            lose:0,
            draw:0
        };

        winScore.innerHTML = score.win;
        drawScore.innerHTML = score.draw;
        loseScore.innerHTML = score.lose;
        
        function pickComputerMove(){
            
            let computerMove = '';
            const randomNumber = Math.random();
            console.log(randomNumber);
            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock';
            }else if(randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }else if(randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            }

            return computerMove;
        }

        function gameResult(pickSomething){
            const computerMove = pickComputerMove();
            let result = '';
            if(pickSomething === 'rock'){
                if(computerMove === 'rock'){
                result = 'draw';
                }else if(computerMove === 'paper'){
                    result = 'lose';
                }else{
                    result = 'win';
                }
            }else if(pickSomething === 'paper'){
                if(computerMove === 'paper'){
                result = 'draw';
                }else if(computerMove === 'scissors'){
                    result = 'lose';
                }else{
                    result = 'win';
                }
            }else{
                if(computerMove === 'scissors'){
                result = 'draw';
                }else if(computerMove === 'rock'){
                    result = 'lose';
                }else{
                    result = 'win';
                }
            }

            if(result === 'win'){
                score.win += 1;
                winScore.innerHTML = score.win;
            }else if (result === 'lose'){
                score.lose += 1;
                loseScore.innerHTML = score.lose;
            }else{
                score.draw += 1;
                drawScore.innerHTML = score.draw;
            }
            const gameScore = JSON.stringify(score);

            localStorage.setItem('score',gameScore);

            gameDecision.innerHTML = `You ${result}`;
            

            gameInfo.innerHTML = `You picked <img src="img/${pickSomething}-emoji.png" class="move-icon"> - Computer pick <img src="img/${computerMove}-emoji.png" class="move-icon">`;
        }
        
        rock.addEventListener('click',()=>{
            gameResult('rock');
        });

        bodyElement.addEventListener('keydown',(event)=>{
            if(event.key === 'r'){
                gameResult('rock');
            }else if(event.key === 'p'){
                gameResult('paper');
            }else if(event.key === 's'){
                gameResult('scissors');
            }else if(event.key === 'a'){
                letComputerPlay();
            }else{
                alert('Please press r for rock,p for paper or s for scissors. Press a for auto play.');
            }
        });

        paper.addEventListener('click',()=>{
            gameResult('paper');
        });

        scissors.addEventListener('click',()=>{
            gameResult('scissors');
        });

        reset.addEventListener('click',()=>{
            localStorage.removeItem('score');
            winScore.innerHTML = 0;
            loseScore.innerHTML = 0;
            drawScore.innerHTML = 0;
            location.reload();
        });
        
        let isPlaying = false;
        let intervalId;

        autoPlay.addEventListener('click',()=>{
            letComputerPlay();
        });

        function letComputerPlay(){
            if(!isPlaying){
                isPlaying = true;

                intervalId = setInterval(()=>{
                    const playerMove = pickComputerMove();
                    gameResult(playerMove);
                },1000);
                autoPlay.innerHTML = 'Stop Play';
            }else{
                clearInterval(intervalId);
                isPlaying = false;
                autoPlay.innerHTML = 'Auto Play';
            }
        }


