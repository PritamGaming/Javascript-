const view = document.getElementById('ww');
const nn =  document.getElementById('nn');  
const rr = document.getElementById('rr');

let numm = 0;

function num() {
        
        numm += 1;
        nn.innerHTML = `${numm}`
            if (numm == 101) {
                numm = 0;
                view.innerHTML = ``;
                nn.innerHTML = `${numm}`;
                
                    
              }
              
           if (result === 'You won') {
            won += 1;
            win.innerHTML = `${won}`
            }
        
}

const win = document.getElementById('win'),
     lose = document.getElementById('lose');
     
     
     function won() {
           if (result === 'You won') {
            won += 1;
            win.innerHTML = `${won}`
            }
     }


const random = Math.random();
let computer = '';
                
function rock() {
                                
                if(random >= 0 && random < 1 / 3) {
                        computer = 'Rock';

                }
    
                else if(random >= 1 / 3 && random < 2 / 3) {
                        computer = 'Paper';
                                
                }
                        
                
                
                
                else if(random >= 2 / 3 && random < 1) {
                        computer = 'Scissors';

                }
                     
                let result = '';
                            
                if(computer === 'Rock') {
                                    
                        result = 'Tie'
                }
                            
                else  if (computer === 'Paper') {
                                
                        result = 'You lose'
                }    

                           
                           
                else if (computer === 'Scissors') {

                        result = 'You won'
                }
                        
                
                view.innerHTML = `Your move: Rock ||
Computer move: ${computer} ||
Result: ${result} ||`;
                        }
      
      function paper() {
                                
                if(random >= 0 && random < 1 / 3) {
                        computer = 'Rock';

                }
    
                else if(random >= 1 / 3 && random < 2 / 3) {
                        computer = 'Paper';
                                
                }
                        
                
                
                
                else if(random >= 2 / 3 && random < 1) {
                        computer = 'Scissors';

                }
                     
                let result = '';
                            
                if(computer === 'Rock') {
                                    
                        result = 'You won'
                }
                            
                else  if (computer === 'Paper') {
                                
                        result = 'Tie'
                }    

                           
                           
                else if (computer === 'Scissors') {

                        result = 'You lose'
                }
                        
                
                view.innerHTML = `Your move: Paper ||
Computer move: ${computer} ||
Result: ${result} ||`;
                        }
      
      
if (rr) {
        rr.addEventListener('click', () => {
                numm = 0;
                view.innerHTML = ``;
                nn.innerHTML = `${numm}`;
        })
}

