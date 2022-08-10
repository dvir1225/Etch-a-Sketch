//assign variables
let num
function getGridNum (){
    num = prompt('What would you like your grid width and height to be? 100 is the max');
    while (num<=100){
    return num;
    } while (num>100){
        alert('You chose a number too big. Please refresh page and start over.')
        return num=0;
    }
}
//assign variables to HTML elements
let grid = document.querySelector('.grid');
//getGridNum()
let gridItem
let gridWidth
let randomColor

function getRandomColor(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

let gridGenerator = document.querySelector('.gridGenerator');

gridGenerator.addEventListener('click', newGrid);
gridGenerator.addEventListener('click', gridSize);

function newGrid (){
    document.querySelector('.grid').innerHTML = ""
}
function gridSize (){
    getGridNum();
        for (let i=0; i<num; i++){
            gridWidth = document.createElement('div');
            gridWidth.setAttribute("class", "gridColumn");
            gridWidth.setAttribute("column", i+1);
        for(let j=0; j<num; j++){
            gridItem = document.createElement('div');
            gridItem.setAttribute('class', 'gridItem');
            gridItem.setAttribute('row', j+1);
            gridItem.addEventListener("mouseover", function() {
                this.style.backgroundColor = "#" + getRandomColor();
            });
            gridItem.innerText = " ";
            gridWidth.appendChild(gridItem);
        } grid.appendChild(gridWidth);
    }
}

const gridColumns = document.querySelectorAll('.gridColumn');
const gridItems = document.querySelectorAll('.gridItem');

//gridSize(num);
