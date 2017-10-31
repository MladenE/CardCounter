
if (Domain.Collection.card != undefined){

    var divHands = ["houseHand", "playerHand", "splitHand"];

    var newButton = function (id, icon) {

        var _button = document.createElement("button");
            _button.name = 'card';
            _button.id = id;
            _button.innerText = icon;

        return _button;

    };

    // loop through containing hand divs
    for(d=0;d<=divHands.length-1;d++){

        var div = document.getElementById(divHands[d]);

        // Loop through cards and append to hand div
        for(i=0;i<=Domain.Collection.card.length-1;i++){

            var _id   = Domain.Collection.card[i].id;
            var _icon = Domain.Collection.card[i].icon;

            div.appendChild(newButton(_id, _icon));

        };

    };

}