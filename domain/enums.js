var enums = (function () {

    return {
        actions : {
            hit: "hit",
            split: "split",
            stand: "stand",
            double: "double"
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