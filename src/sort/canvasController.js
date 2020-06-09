import Two from '../../node_modules/two.js/build/two.min.js'

let elements = [];
let two = undefined

export function initTwo() {
  var t = new Two({
    width: 800,
    height: 300,
    autostart: true
  }).appendTo(document.getElementById('canvas'));   
  
  two = t
}

export function clearCanvas() {
  two.clear()
  elements = []
}

export function drawElements(numArray) {
  let elementWidth = 50;
  let xPlacement = two.width / 2 - (elementWidth * numArray.length) + 200

  for (let i = 0; i < numArray.length; i++) {
    let yPlacement = two.height / 2 - numArray[i] / 2
    let element = two.makeRectangle(xPlacement, yPlacement, elementWidth, numArray[i])
    element.fill = '#FF8000'
    xPlacement += elementWidth + 10
    elements.push(element)
  }

  two.update()
}

export function swapUIElements(elementIndex1, elementIndex2) {

  let temp = elements[elementIndex1].position.x;
  elements[elementIndex1].position.x = elements[elementIndex2].position.x;
  elements[elementIndex2].position.x = temp;
  console.log("called")
}




