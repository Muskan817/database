class Game{ 

contructor(){
}


//3.what needs to be in gamestate wait.back

getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
    });
    
}

update(state){
    database.ref('/').update({
        gameState:state
    })

}

start(){
    if(gameState === 0){
        form = new Form();
        form.display();

        player = new Player();
        player.getPlayerCount();
    }


}

}













