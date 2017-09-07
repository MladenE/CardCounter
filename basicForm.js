
var basicForm = (function() {

    var _hardSoftSplit,
        _actionMatrix,
        _normalizedPlayerHand,
        _houseIndex;

    var enumHardSoftSplit = {
        hard:  "hard",
        soft:  "soft",
        split: "split"
    }

    var h  = "Hit",
        s  = "Stand",
        dh = "Double if allowed, otherwise hit",
        ds = "Double if allowed, otherwise stand",
        p  = "Split",
        ph = "Split if double after split is allowed, otherwise hit",
        rh = "Surrender if allowed, otherwise hit."


    var _hard = {
        "8":  [h,h,h,h,h,h,h,h,h,h],
        "9":  [h,dh,dh,dh,dh,h,h,h,h,h],
        "10": [dh,dh,dh,dh,dh,dh,dh,dh,h,h],
        "11": [dh,dh,dh,dh,dh,dh,dh,dh,dh,h],
        "12": [h,h,s,s,s,h,h,h,h,h],
        "13": [s,s,s,s,s,h,h,h,h,h],
        "14": [s,s,s,s,s,h,h,h,h,h],
        "15": [s,s,s,s,s,h,h,h,rh,h],
        "16": [s,s,s,s,s,h,h,rh,rh,rh],
        "17": [s,s,s,s,s,s,s,s,s,s]
    }

    var _soft = {
        "13": [h,h,h,dh,dh,h,h,h,h,h],
        "14": [h,h,h,dh,dh,h,h,h,h,h],
        "15": [h,h,dh,dh,dh,h,h,h,h,h],
        "16": [h,h,dh,dh,dh,h,h,h,h,h],
        "17": [h,dh,dh,dh,dh,h,h,h,h,h],
        "18": [s,ds,ds,ds,ds,s,s,h,h,h],
        "19": [s,s,s,s,s,s,s,s,s,s]
    }

    var _splits = {
        "22":   [ph,ph,p,p,p,p,h,h,h,h],
        "33":   [ph,ph,p,p,p,p,h,h,h,h],
        "44":   [h,h,h,ph,ph,h,h,h,h,h],
        "66":   [ph,p,p,p,p,h,h,h,h,h],
        "77":   [p,p,p,p,p,p,h,h,h,h],
        "88":   [p,p,p,p,p,p,p,p,p,p],
        "99":   [p,p,p,p,p,s,p,p,s,s],
        "1111": [p,p,p,p,p,p,p,p,p,p]
    }


    var _getMatrixHardSoftSplit = function (playerHand) {
        //_game.player.primaryHand.
        if (playerHand.isSoft) {
            _hardSoftSplit = enumHardSoftSplit.soft;
            _actionMatrix  = _soft;
        }
        else if (playerHand.canSplit && playerHand.cards.length == 2) {
            _hardSoftSplit = enumHardSoftSplit.split;
            _actionMatrix  = _splits;
        }
        else {
            _hardSoftSplit = enumHardSoftSplit.hard;
            _actionMatrix  = _hard;
        }
    };

    var _normalizeHardUpperLowerBound = function (playerHand){
        if (playerHand.total >= 4 && playerHand.total <= 8) {
            _normalizedPlayerHand = 8;
        }
        else if (playerHand.total >= 17) {
            _normalizedPlayerHand = 17;
        }
        else {
            _normalizedPlayerHand = playerHand.total;
        }
    };


    var _normalizeSoftUpperLowerBound = function (playerHand) {
        if (playerHand.total >= 4 && playerHand.total <= 8) {
            _normalizedPlayerHand = 8;
        }
        else if (playerHand.total >= 19) {
            _normalizedPlayerHand = 17;
        }
        else {
            _normalizedPlayerHand = playerHand.total;
        }
    };

    var _normalizePlayerHand = function (playerHand) {
        if (_hardSoftSplit == enumHardSoftSplit.hard) {
            _normalizeHardUpperLowerBound(playerHand);
        }
        else if (_hardSoftSplit == enumHardSoftSplit.soft) {
            _normalizeSoftUpperLowerBound(playerHand);
        }
    };

    var _convertHouseHandToArrayIndex = function (houseHand) {
        _houseIndex = houseHand.total - 2;
    };

    var _getAction = function () {
        return _actionMatrix[_normalizedPlayerHand][_houseIndex];
    }

    return {
        getAction: function (playerHand, houseHand) {
            // playerHand - 
            // houseCard
            if (playerHand.total > 0 && houseHand.total > 0)
            {
                _getMatrixHardSoftSplit(playerHand);
                _normalizePlayerHand(playerHand)
                _convertHouseHandToArrayIndex(houseHand);

                return _getAction();
            }
        }
    }

})();