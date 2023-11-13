var game = 1;

function selectGame(temp){
    
    game = temp;    
    if(game=='1'){        
        document.getElementById("gameContent").innerHTML = '<object type="text/html" data="game1.html"></object>';
    }else if(game=='2'){        
        document.getElementById("gameContent").innerHTML = '<object type="text/html" data="game2.html"></object>';
    }
}