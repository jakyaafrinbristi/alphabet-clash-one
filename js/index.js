// function play(){
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add('hidden');

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove('hidden');

// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);
    if(playerPressed ==='Escape'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore=getTextElementById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementById('current-score',updatedScore)

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText=newScore;




        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed,you lost a life')
        const currentLife =getTextElementById('current-life');
        const updatedLife =currentLife - 1;
        setTextElementById('current-life',updatedLife);
        if(updatedLife===0){
            gameOver();
        }

        // const currentLifeElement =document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife =parseInt(currentLifeText);
        // const newLife = currentLife -1;
        // currentLifeElement.innerText=newLife;

    }

}
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is',alphabet);
    const currentAlphabet = document.getElementById("current-alphabet");

    currentAlphabet.innerText=alphabet;
    setBackgroundColorById(alphabet);
  

}

function play(){
    hideElementById("home-screen");
    hideElementById("play-score");
    showElementById("play-ground");
    setTextElementById('current-life',5)
    setTextElementById('current-score',0)
    continueGame();
}
function gameOver(){
    hideElementById("play-ground");
    showElementById("play-score");
    const lastScore =getTextElementById ('current-score');
    setTextElementById('last-score',lastScore); 
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);


}