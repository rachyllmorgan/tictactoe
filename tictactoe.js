$(document).ready(function() { 
    
 $(":button").click(function(){
     resetGame();
 });

    
 $(".cell1").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1();    
            }
        });
    
  $(".cell2").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1();
            }
        });
    
  $(".cell3").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1();
            }
        });
    
  $(".cell4").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1();     
            }
        });
    
  $(".cell5").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false
        winCheck("playBlue");
        resetP1();
            }
        });
    
  $(".cell6").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1(); 
            }
        });
    
  $(".cell7").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1();
            }
        });
    
  $(".cell8").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1();
            }
        });
    
  $(".cell9").click(function() {  

    if(player1) {
        $(this).addClass("playRed");
        player1 = false;
        winCheck("playRed");
        resetP2();
    } else {
        $(this).addClass("playBlue");
        player2 = false;
        winCheck("playBlue");
        resetP1();            
            }
        });
});

    var player1 = true;
    var player2 = true;  
    
    function resetP1() {
    player1 = true;
    };

    function resetP2() {
    player2 = true;
    };

    function resetGame() {
        $("td").removeClass("playRed");
        $("td").removeClass("playBlue");
        resetP1();
    }


    function winCheck (playerColor) {
        
        if ($(".cell1").hasClass(playerColor) && $(".cell2").hasClass(playerColor) && $(".cell3").hasClass(playerColor)){
            youWin();
        };
        
        if ($(".cell4").hasClass(playerColor) && $(".cell5").hasClass(playerColor) && $(".cell6").hasClass(playerColor)){
            youWin();
        };
        
        if ($(".cell7").hasClass(playerColor) && $(".cell8").hasClass(playerColor) && $(".cell9").hasClass(playerColor)){
            youWin();
        };
        
        if ($(".cell1").hasClass(playerColor) && $(".cell4").hasClass(playerColor) && $(".cell7").hasClass(playerColor)){
            youWin();
        };
        
        if ($(".cell2").hasClass(playerColor) && $(".cell5").hasClass(playerColor) && $(".cell8").hasClass(playerColor)){
            youWin();
        };
        
        if ($(".cell3").hasClass(playerColor) && $(".cell6").hasClass(playerColor) && $(".cell9").hasClass(playerColor)){
            youWin();
        };
        
        if ($(".cell1").hasClass(playerColor) && $(".cell5").hasClass(playerColor) && $(".cell9").hasClass(playerColor)){
            youWin();
        };
        
        if ($(".cell3").hasClass(playerColor) && $(".cell5").hasClass(playerColor) && $(".cell7").hasClass(playerColor)){
            youWin();
        }
            
    function youWin (){
        alert("You Win!");
        resetGame();
        }
    };