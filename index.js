import { initTwo, drawElements, swapUIElements, clearCanvas } from './sort/canvasController';
import { insertionSort } from './sort/algorithms';

let two = initTwo()
let values = []


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('random').addEventListener('click', function() {
  clearCanvas()
  values = []
  
  for (let i = 0; i < 10; i++) {
    values.push(Math.round(Math.random() * (100 - 1) + 1))
  }

  drawElements(values)
})

document.getElementById('sort').addEventListener('click', function () {
  let sortOrder = insertionSort(values)

  for (let i = 0; i < sortOrder.length; i++) {
    
    setTimeout(function () {
      clearCanvas()
      drawElements(sortOrder[i])
      
    }, i * 100) 
  }
})
