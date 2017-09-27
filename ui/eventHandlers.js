// Simple onclick events

$("#house button[name='card']").on('click', function (e) {
    // Get the name of the card only.
    // val and count should come from a lookup table in the app.
    //var cardValue = parseInt($(e.currentTarget).attr('data-param-val'));
    //var cardCount = parseInt($(e.currentTarget).attr('data-param-count'));
    var cardName = $(e.currentTarget).text();
    
    //updateHouseHand(_game.house, cardValue, cardName, cardCount);
});

$("#playerHand button[name='card']").on('click', function (e) {
    //var cardValue = parseInt($(e.currentTarget).attr('data-param-val'));
    //var cardCount = parseInt($(e.currentTarget).attr('data-param-count'));
    var cardName = $(e.currentTarget).text();
        
    Controllers.PlayerCard.play(cardName, true); // true = isPrimaryHand
});

$("#splitHand button[name='card']").on('click', function (e) {
    //var cardValue = parseInt($(e.currentTarget).attr('data-param-val'));
    //var cardCount = parseInt($(e.currentTarget).attr('data-param-count'));
    var cardName = $(e.currentTarget).text();
    
    Controllers.PlayerCard.play(cardName, false); // false = isPrimaryHand
});

$("#playerHand #split").on('click', function (e) {
        // show second hand html
        $("#splitHand").show();
        $("#split").hide();
});

$("#reset").on('click', function() {

});