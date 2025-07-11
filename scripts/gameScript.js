// global variables
let winningTargetIndex = 0; 
let playerScore = 0; 
let gameTargets;

document.addEventListener('DOMContentLoaded', () => {
  console.log('Game script loaded');
  
  // Initialize the game, hide the game pieces, pick a winning target
  initializeGame();   
    
  // Vanilla JS event listener  
  document.getElementById("submitPlayerName").addEventListener(
    "click", 
    ()=> 
      {
        greetPlayer()
      }
  );

  $('#playGame').on('click', ()=>{
    $('#goBox').addClass('d-flex').show(); 
    $('#gamePiece').show();
    $('#nameBox').removeClass('d-flex').hide(); 
    $('#playGame').prop('disabled', true); 
  });

  $('#playAgain').on('click', ()=>{
    $('#gamePiece').css({ left: 0, top: 0 }); 
    setWinningTarget(); 
     $("#gamePiece").draggable({ disabled: false });
     $(gameTargets).text(''); 

  }); 

  $('#resetGame').on('click', ()=>{
    initializeGame();
  }
)

  // drag & drop! 
  // https://www.w3schools.com/howto/howto_js_draggable.asp
  // https://jqueryui.com/draggable/

  // draggable
$("#gamePiece").draggable(
  {
    containment: "#gameBoard", scroll: true,
    snap: ".gameTargets", snapMode: "inner", 
    snapTolerance: 60
  }
);

 $('.gameTargets').droppable({
    accept: '#gamePiece',
    drop: function() {
       if($(this).attr('id') === $(gameTargets[winningTargetIndex]).attr('id')) {
          playerScore++; 
          $(this).text('Planet saved!')
        }
        else {
          playerScore--; 
          $(this).text('Wasted!')
        }
      
      $('#playerScore').text(playerScore);
      $('#playAgain').show(); 
      $("#gamePiece").draggable({ disabled: true });
      }
});

}); // ends doc ready f/n

// hide all controls from the start
function initializeGame() {
  
  // Hide the game piece
  $('#gamePiece').hide().css('display', 'none');  
  
  // clean "Planet Saved!/Wasted!" messages
  // $(gameTargets).text(''); 

  // Hide the controls except the first one (input name)
  $('#inputBox').addClass('d-flex').show(); 
  $('#nameBox').removeClass('d-flex').hide();  
  $('#goBox').removeClass('d-flex').hide(); 
  $('#playAgain').hide();
  $('#playGame').prop('disabled', false); 

  setWinningTarget(); 

  // clears messages on targets
  $(gameTargets).text('');

  // https://www.w3schools.com/jquery/html_text.asp
  playerScore = 0; 
  $('#playerScore').text(playerScore);
  $('#enteredPlayerName').val('').attr('placeholder', 'Enter your name...'); 
  $('#displayPlayerName').text(''); 
  $('#gamePiece').css({ left: 0, top: 0 });  
  $("#gamePiece").draggable({ disabled: false });
}

function setWinningTarget(){
  gameTargets = document.getElementsByClassName('gameTargets');
  
  // winning house is assigned random number 0,1,2 
  winningTargetIndex = Math.floor(Math.random() * gameTargets.length);

  // EASTER EGG: hint to the player
  const targetId   = $(gameTargets[winningTargetIndex]).attr('id');
  console.log(`Hint: Try the ${[targetId]}`); 

  // https://www.w3schools.com/js/js_arrays.asp
  // https://www.w3schools.com/jsref/jsref_random.asp

  // randomize the targets
  Array.from(gameTargets).forEach(el => {
    el.classList.remove('recycle','trash');
  });

  Array.from(gameTargets).forEach((el,idx) => {
    if(idx === winningTargetIndex){
      el.classList.add('recycle');
    } else {
      el.classList.add('trash');
    }
  });
}

// greet the user (using jQuery)
function greetPlayer(){
  const enteredPlayerName = $('#enteredPlayerName').val(); 
  
  // checks to make sure a player name is entered!
  if (enteredPlayerName) {
    $('#displayPlayerName').prepend(`<i class="bi bi-globe-americas"></i>&nbsp;Let\'s save the planet, ${enteredPlayerName}`);
    $('#enteredPlayerName')
      .removeClass('redBorder');

    $('#nameBox').addClass('d-flex').show();  
    $('#inputBox').removeClass('d-flex').hide(); 
     $('#playGame').show(); 

  }
  else if(!enteredPlayerName) {
    console.log('no player name');

    // set any DOM attribute https://www.w3schools.com/jquery/html_attr.asp
    $('#enteredPlayerName')
      .attr('placeholder', 'Please, enter your name')
      .addClass('redBorder')
      .focus(); 

    // https://api.jquery.com/toggleClass/
      $('#displayPlayerName').text('');
      $('#playGame').hide(); 
  }
}