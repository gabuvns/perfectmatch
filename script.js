"use strict";
(function main() {
    var selected = -1;

    function paintImage(option) {

        var element, color;

        switch (option) {
            case 0:
                element = "banana";
                color = "#7300b7";
                break;
            case 1:
                element = "grapes";
                color = "#4eb907";
                break;
            case 2:
                element = "cherry";
                color = "#aac600";
                break;
            case 3:
                element = "watermelon";
                color = "#d7bb00";
                break;
            case 4:
                element = "orange";
                color = "#0183e1";
                break;
            case 5:
                element = "apple";
                color = "#00b6ce";
                break;
            case 6:
                return "<img src=\"data:null\"";
                break;
        }

        let finalString = "<img src=\"./imgs/" + element + ".png\" alt=\"" + element + " Symbol\">";
        let obj = {
            finalString,
            color
        };

        return obj;
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
            if (selected !== -1) {
                let { finalString, color } = paintImage(selected);
                paintSq[i].innerHTML = finalString;
                paintSq[i].style.backgroundColor = color;

            }
        });
    }

    document.getElementById("rst").addEventListener("click", () => {
        for (let i = 0; i < paintSq.length; i++) {
            paintSq[i].innerHTML = paintImage(6);
            //I'm not proud of the following statement
            paintSq[i].style.backgroundColor = "#8573ff";
        }
    });

})();


