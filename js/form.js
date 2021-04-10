class Form {

    constructur(){
        
    }



    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(100,10);

        var input = createInput("Name");
        var button = createButton('Play');

        input.position(100,100);
        button.position(200,160);


        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount+1;
            player.update(name);
            player.updatePlayerCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Hello!!  "+name);
            greeting.position(100,100);


        })
    }















}