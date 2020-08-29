"use strict";
(function main() {
    var selected = -1;


    function paintImage(option) {

        var element;

        switch (option) {
            case 0:
                element = "banana";
                break;
            case 1:
                element = "grapes";
                break;
            case 2:
                element = "cherry";
                break;
            case 3:
                element = "watermelon";
                break;
            case 4:
                element = "orange";
                break;
            case 5:
                element = "apple";
                break;
            case 6:
                return "<img src=\"data:null\"";
                break;
        }

        var finalString = "<img src=\"./imgs/" + element + ".png\" alt=\"" + element + " Symbol\">";
        return finalString;
    }

    var fruitSq = document.querySelectorAll(".opt");

    for (let i = 0; i < fruitSq.length; i++) {
        fruitSq[i].addEventListener("click", function () {
            selected = i;
        });
    }

    var paintSq = document.querySelectorAll(".sq");
    for (let i = 0; i < paintSq.length; i++) {
        paintSq[i].addEventListener("click", function () {
            if (selected !== -1)
                paintSq[i].innerHTML = paintImage(selected);
        });
    }

    document.getElementById("rst").addEventListener("click", () => {
        for (let i = 0; i < paintSq.length; i++) {
            paintSq[i].innerHTML = paintImage(6);
        }
    });

})();


