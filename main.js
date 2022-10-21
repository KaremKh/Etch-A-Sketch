const DEFAULT_COLOR='#000000';

let currentColor=DEFAULT_COLOR;
const container=document.querySelector(".container");

function newGrid(num){

    container.style.cssText=`grid-template-columns: repeat(${num},1fr);grid-template-rows: repeat(${num},1fr);`  
    container.style.cssText=`grid-template-columns: repeat(${num},1fr);grid-template-rows: repeat(${num},1fr);`
    reset();
    for (let i=0;i<num*num;i++){
        let div=document.createElement('div');
        div.classList.add('cell');
        container.insertAdjacentElement("beforeend",div);

        
    }

      hover();

}

let mode="colorMode";

function randomColorMode (){
  mode="random";
}

function colorMode(){
  mode="colorMode";
}

function eraser(){
  mode="eraser";
}
function randomValue(){
  return Math.floor(Math.random() * 255);
}

let randomR;
let randomG;
let randomB;

let mouseDown = false

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function draw(e){
  if (e.type === 'mouseover' && !mouseDown) return
    if (mode==="colorMode")
      this.style.backgroundColor=currentColor;
    else if (mode==="eraser")
      this.style.backgroundColor="#ffffff";
    else if (mode==="random"){
      randomR=randomValue();
      randomG=randomValue();
      randomB=randomValue();


      let color=window.getComputedStyle(this).getPropertyValue("background-color");
      //if (color==="rgb(255, 255, 255)")
        this.style.backgroundColor=`rgb(${randomR}, ${randomG}, ${randomB})`;
      /*else{
        let Opacity=window.getComputedStyle(this).getPropertyValue("opacity");
        this.style.opacity+="0";
      } */
        
    }

}






function hover(){
    let items = document.querySelectorAll('.cell');
  items.forEach(item => {
    item.addEventListener('mouseover',draw) ;
  });

 /* items.forEach(item => {
    item.addEventListener('mouseout', () => {
        item.classList.remove("hover");
    });
  });*/
}

function changeGrid(){
    let gridNumber;
  
    gridNumber=prompt("Enter the number of cells per side: ");
    while (gridNumber<2 || gridNumber >100){
      alert('Maximum is 100');
      gridNumber=prompt("Enter the number of cells per side: ");
    }
    newGrid(gridNumber);
}  

const colorPicker=document.getElementById('colorInput');
  function reset() {
    document
      .querySelectorAll(".cell")
      .forEach((div) => div.remove());
  }

  function selectColor(newColor){
    
    const hov=document.querySelector(".hover");
    currentColor=newColor;
    return newColor;
  }

  colorPicker.oninput=(e)=>selectColor(e.target.value);

  

 

  newGrid(16);
  
  //changeGrid();
  

  



