function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-600');
}


function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets=alphabetString.split('');
  

    const randomNumber = Math.random()*25;
    const index =Math.round(randomNumber);
    const alphabet=alphabets[index];
    // console.log(alphabet,index);
    return alphabet;
  

}