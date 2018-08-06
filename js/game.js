const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const img = new Image();

//canvas coordinates
const c = [25,300,575,850]

/*Function takes in Three Arguments
* - Number of cards in each row
* - Number of cards in each column
* - Canvas coordinates 
*/

const draw = function (row,col,coordinates) {
    for (i=0;i<=row;i++) {
        for (j=0;j<=col;j++) {
            game.drawImage(img,c[i],c[j],250,250);
        }
    }  
}

img.onload = function () {
    draw(4,4,c)
}

img.src = "C:/Users/maris_000/dragons/img/dragons/blue-dragon.png";

