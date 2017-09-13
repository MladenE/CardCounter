var collection = (function () {
    
    var h  = "Hit",
        s  = "Stand",
        dh = "Double if allowed, otherwise hit",
        ds = "Double if allowed, otherwise stand",
        p  = "Split",
        ph = "Split if double after split is allowed, otherwise hit",
        rh = "Surrender if allowed, otherwise hit."

    return {
        hard : {
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
        },
    
        soft : {
            "13": [h,h,h,dh,dh,h,h,h,h,h],
            "14": [h,h,h,dh,dh,h,h,h,h,h],
            "15": [h,h,dh,dh,dh,h,h,h,h,h],
            "16": [h,h,dh,dh,dh,h,h,h,h,h],
            "17": [h,dh,dh,dh,dh,h,h,h,h,h],
            "18": [s,ds,ds,ds,ds,s,s,h,h,h],
            "19": [s,s,s,s,s,s,s,s,s,s]
        },
    
        splits : {
            "22":   [ph,ph,p,p,p,p,h,h,h,h],
            "33":   [ph,ph,p,p,p,p,h,h,h,h],
            "44":   [h,h,h,ph,ph,h,h,h,h,h],
            "66":   [ph,p,p,p,p,h,h,h,h,h],
            "77":   [p,p,p,p,p,p,h,h,h,h],
            "88":   [p,p,p,p,p,p,p,p,p,p],
            "99":   [p,p,p,p,p,s,p,p,s,s],
            "1111": [p,p,p,p,p,p,p,p,p,p]
        }
    }

})();