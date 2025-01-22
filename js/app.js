/*-------------- Constants -------------*/
const CorrectWords = [
  'VARIETY',
  'ORGANIZATION',
  'AUDINCE',
  'GROWTH',
  'COUNTRY',
  'FACT',
  'EDITOR',
  'CELEBRATION',
  'SPEAKER',
  'SALMA',
];






/*---------- Variables (state) ---------*/

 
let UserInput ;
let RandomCorrectWord;
let oneWord ;
let charArray;
let CountIncorrect =0;
const Maxincorrect =6;






/*----- Cached Element References  -----*/

const Buttons = document.querySelectorAll('.btn.btn-outline-dark');
// console.log(Buttons);
const DisplayText = document.querySelector('.container-md');
const StartGame = document.querySelector('#Restart')
const bodyElement = document.querySelector('body');
const testElement = document.getElementById('test');
const guessWrong=document.querySelector('.CountWrong');
const HangManImg = document.querySelector('#img-container img');
const Restart = document.querySelector('.btn.btn-outline-danger')




/*-------------- Functions -------------*/




const RandomWord = ()=>{

  let RandomCorrectWord = Math.floor(Math.random() * CorrectWords.length)
console.log(CorrectWords[RandomCorrectWord],RandomCorrectWord);

  

        oneWord=(CorrectWords[RandomCorrectWord]);
        console.log(oneWord);

       charArray =oneWord.split('');
        console.log(charArray);
    
         testElement.innerText=" ";
        for (i=0; i<charArray.length; i++){
          const letter2 = document.createElement('div');
          letter2.textContent = '---';
          letter2.classList.add('letter')
          console.log(letter2)
          testElement.appendChild(letter2);
        }

        CountIncorrect =0;
        HangManImg.src=`images/hangman-0.svg`;
        DisplayText.textContent=" ";
        guessWrong.innerText= ` INCORRECT GUSSES :   ${CountIncorrect} / ${Maxincorrect}`;
        Buttons.forEach(button => button.disabled = false);
        

   
 }
RandomWord();

  const UserChoice = (event) =>{

    UserInput = event.target.innerText;
  
     if(charArray.includes(UserInput)){
    charArray.forEach((char,index) => {
      if(char === UserInput){
        console.log(UserInput ,`${index}`)
        let letter = document.querySelectorAll('.letter')
        console.log(letter)
        letter[index].textContent = char; 
                   
     }

   })} 
  
      else {
             CountIncorrect++;
             HangManImg.src=`images/hangman-${CountIncorrect}.svg`;
             
        }
        event.target.disabled = true; 
        guessWrong.innerText= `  INCORRECT GUSSES :   ${CountIncorrect} / ${Maxincorrect}`;

        if(CountIncorrect>=Maxincorrect){
          Buttons.forEach(button => button.disabled = true);
          DisplayText.textContent="incorrect the word is " + charArray.join('');
          
        }
      
      };



    
            
        
      

     
  

        



 

/*----------- Event Listeners ----------*/


for(let i=0 ; i<Buttons.length;i++){
Buttons[i].addEventListener('click' , UserChoice);
}


Restart.addEventListener('click',RandomWord)

RandomWord();
