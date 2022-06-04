let x = document.querySelectorAll("img.item-heart-icon");
var click = 1;

x.forEach(i =>
    i.addEventListener('click', function () {
        click++;
        if (click % 2 == 0) {
            i.src = "../img/full-heart.png";
            //alert("Item is added to your favorite list.");
        } else {
            i.src = "../img/heart.svg";
        }

    }));




