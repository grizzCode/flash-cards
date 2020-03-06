let cardIndex = [1,2,3]
// Accumulator for card ID's
let rowNums = 1
//Accumulator for row numbers (formatting)
let cards = [
  {id:1, front: "Front String A", back: "Back String A"},
  {id:2, front: "Front String B", back: "Back String B"},
  {id:3, front: "Front String C", back: "Back String C"},
]

//Flips given card over when clicked
function flipCard(id){
    let back = cards[(id-1)].back
    document.getElementById(id).innerHTML = `${back}`;
}


document.getElementById('newCardButton').onclick = () => {
  // Retrieves status of card index and incriments.
  let id = cardIndex.length + 1;
  cardIndex.push(id)

  //creates new div for formatting
  let row = document.createElement('row');
  document.body.appendChild(row);
  let div = document.createElement('div');
  div.setAttribute('class', 'four columns');
  div.setAttribute('id', id);
  
  //create user input area for front of card:
  let form = document.createElement('form')
    div.appendChild(form)
  let input1 = document.createElement('input')
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'input1');
    input1.setAttribute('placeholder', 'Enter Card Front');
    input1.setAttribute('size', '45');
    form.appendChild(input1)
    //create a hr tag for formatting:
      let hr = document.createElement('hr')
      form.appendChild(hr)
  //create second user input area for back of card:
      let input2 = document.createElement('input')
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', 'input2');
    input2.setAttribute('placeholder', 'Enter Card Back');
    input2.setAttribute('size', '45');
    form.appendChild(input2)
  //create a button to save:
  let saveButton = document.createElement('button')
    saveButton.setAttribute('type', 'button');
    saveButton.setAttribute('id', 'saveButton');
    saveButton.innerHTML = "Save New Card";
    form.appendChild(saveButton)

  row.appendChild(div);
  
  //Obatin input values once user enters them:
  document.getElementById('saveButton').onclick = () => {
    // let newCardId = id
    var inputVal1 = document.getElementById("input1").value;
    var inputVal2 = document.getElementById("input2").value;
    console.log(inputVal1)
    console.log(inputVal2)
  }

}
