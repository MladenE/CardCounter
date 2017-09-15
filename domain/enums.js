var enums = (function () {

    return {
        actions : {
            stand: "Stand",
            hit: "Hit",
            split: "Split",
            splitHit: "Split if double after split is allowed, otherwise hit.",
            doubleHit: "Double if allowed, otherwise hit.",
            doubleStand: "Double if allowed, otherwise stand.",
            surrenderHit: "Surrender if allowed, otherwise hit.",
        },        
        
        outcome : {
            win: "WIN",
            lose: "LOSE",
            draw: "DRAW"
        },

        hand_types : {
            house: "house",
            primary: "primary",
            split: "split"
        },

        cardNames : {
            ace: "ace",
            two: "two",
            three: "three",
            four: "four",
            five: "five",
            six: "six",
            seven: "seven",
            eight: "eight",
            nine: "nine",
            ten: "ten",
            jack: "jack",
            queen: "queen",
            king: "king"
        },
        
        aceValue : {
            hard: 11,
            soft: 1
        }
    }

})();