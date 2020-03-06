// Accumulator for card ID's
let cardIndex = [1,2,3]


// Array for card data:
let cards = [
  {front: "Front String A", back: "It can manipulate the DOM of a webpage, giving you the ability to change, delete, or add HTML elements."},
  {front: "Front String B", back: "Let x = ( ) => {\n#code goes here}"},
  {front: "Front String C", back: "-- Arrays start counting at zero! -- Keep track of what functions are taking as input, and what they are returning. Don't forget a return statement if needed. --git  Check your block brackets."},
]

//Flips given card over when clicked
function flipCard(id){
    let back = cards[(id-1)].back
    document.getElementById(id).innerHTML = `${back}`;
}

function deleteCard(id) {
  document.getElementById(id).remove()
}

//################ EDIT CARD ####################
function editCard(id ) {
  document.getElementById(id).remove()

  //creates new div for formatting
  let row = document.createElement('row');
  document.body.appendChild(row);
  let div = document.createElement('div');
  div.setAttribute('class', 'four columns');
  div.setAttribute('id', `${id}`);
  

  //create user input area for front of card:
  let form = document.createElement('form')
    form.setAttribute('id', 'newForm')
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
    saveButton.innerHTML = "Save Changes";
    form.appendChild(saveButton)

  row.appendChild(div);
 
  // ###################### SET CARD EDITS ######################
  //Obatin input values once user enters them:
  document.getElementById('saveButton').onclick = () => {
    let inputVal1 = document.getElementById('input1').value;
    let inputVal2 = document.getElementById('input2').value;
    cards[id-1].front = inputVal1
    cards[id-1].back = inputVal2
    
    // clear form from new card:
    document.getElementById('newForm').remove();

    // display new card front:
    let newFront = document.createElement('p')
    newFront.innerHTML = cards[(id-1)].front
    // generate flip card button:
    let newFlipButton = document.createElement('button')
    newFlipButton.setAttribute('type', 'button')
    newFlipButton.setAttribute('onclick', `flipCard(${id})`)
    newFlipButton.innerHTML = "Flip Card"
    // generate edit card button:
    let newEditButton = document.createElement('button')
    newEditButton.setAttribute('type', 'button')
    newEditButton.setAttribute('onclick', `editCard(${id})`)
    newEditButton.innerHTML = "Edit Card"
    // Generate delete button
    let newDeleteButton = document.createElement('button')
    newDeleteButton.setAttribute('type', 'button')
    newDeleteButton.setAttribute('onclick', `deleteCard(${id})`)
    newDeleteButton.innerHTML = "Delete Card"


    div.appendChild(newFront)
    div.appendChild(newFlipButton)
    div.appendChild(newEditButton)
    div.appendChild(newDeleteButton)
  }

}




//############### CREATE NEW CARD #################
document.getElementById('newCardButton').onclick = () => {
  // Retrieves status of card index and incriments.
  let newId = cardIndex.length + 1;
  cardIndex.push(newId)

  //creates new div for formatting
  let row = document.createElement('row');
  document.body.appendChild(row);
  let div = document.createElement('div');
  div.setAttribute('class', 'four columns');
  div.setAttribute('id', `${newId}`);
  

  //create user input area for front of card:
  let form = document.createElement('form')
    form.setAttribute('id', 'newForm')
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
 
  // ###################### SET NEW CARD ######################
  //Obatin input values once user enters them:
  document.getElementById('saveButton').onclick = () => {
    let inputVal1 = document.getElementById('input1').value;
    let inputVal2 = document.getElementById('input2').value;
    cards.push({
      front: inputVal1,
      back: inputVal2
    });
    // clear form from new card:
    document.getElementById('newForm').remove();

    // display new card front:
    let newFront = document.createElement('p')
    newFront.innerHTML = cards[(newId-1)].front
    // generate flip card button:
    let newFlipButton = document.createElement('button')
    newFlipButton.setAttribute('type', 'button')
    newFlipButton.setAttribute('onclick', `flipCard(${newId})`)
    newFlipButton.innerHTML = "Flip Card"
    // generate edit card button:
    let newEditButton = document.createElement('button')
    newEditButton.setAttribute('type', 'button')
    newEditButton.setAttribute('onclick', `editCard(${newId})`)
    newEditButton.innerHTML = "Edit Card"
    // Generate delete button
    let newDeleteButton = document.createElement('button')
    newDeleteButton.setAttribute('type', 'button')
    newDeleteButton.setAttribute('onclick', `deleteCard(${newId})`)
    newDeleteButton.innerHTML = "Delete Card"


    div.appendChild(newFront)
    div.appendChild(newFlipButton)
    div.appendChild(newEditButton)
    div.appendChild(newDeleteButton)
  }

}
