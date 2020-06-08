import Two from '../node_modules/two.js/build/two.min.js'

let elements = [];

export function initTwo() {
  let two = new Two({
    fullscreen: false,
    autostart: true
  }).appendTo(document.getElementById('canvas'));   
  
  return two
}

export function drawElements(two, numArray) {
  let elementWidth = 50;
  let xPlacement = two.width / 2 - (elementWidth * numArray.length)


  for (let i = 0; i < numArray.length; i++) {
    let yPlacement = two.height / 2 - numArray[i] / 2
    let element = two.makeRectangle(xPlacement, yPlacement, elementWidth, numArray[i])
    element.fill = '#FF8000'
    xPlacement += elementWidth + 10
    elements.push(element)
  }
}

export function swapUIElements(two, elementIndex1, elementIndex2) {
  console.log(elements)
  let temp = elements[elementIndex1].position.x
  elements[elementIndex2].position.x = elements[elementIndex1].position.x
  elements[elementIndex1].position.x = temp
}




