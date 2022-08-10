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
getGridNum()
let gridItem
let gridWidth

function gridSize (num){
        for (let i=0; i<num; i++){
            gridWidth = document.createElement('div');
            gridWidth.setAttribute("class", "gridColumn");
            gridWidth.setAttribute("column", i+1);
        for(let j=0; j<num; j++){
            gridItem = document.createElement('div');
            gridItem.setAttribute('class', 'gridItem')
            gridItem.setAttribute('item', j+1)
            gridItem.innerText = " ";
            gridWidth.appendChild(gridItem);
        } grid.appendChild(gridWidth);
    }
}

const gridColumns = document.querySelectorAll('.gridColumn');
const gridItems = document.querySelectorAll('.gridItem');

gridSize(num);