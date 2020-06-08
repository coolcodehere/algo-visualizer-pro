import { initTwo, drawElements, swapUIElements } from './sort/canvasController';
import { insertionSort } from './sort/algorithms';

let two = initTwo();
let values = [];

function updateValues(updatedValues) {
  values = updatedValues;
}

document.getElementById('random').addEventListener('click', function() {
  two.clear();

  let values = [];
  for (let i = 0; i < 10; i++) {
    values.push(Math.round(Math.random() * (100 - 1) + 1));
  }

  updateValues(values);
  drawElements(two, values);
})

document.getElementById('sort').addEventListener('click', function() {
  let sortOrder = insertionSort(values)
  console.log(sortOrder)
  for (let i = 0; i < sortOrder.length; i++) {
    swapUIElements(sortOrder[i].first, sortOrder[i].second)
  }
})
