let cardIndex = [1,2,3]
// Accumulator for card ID's
let rowNums = 1
//Accumulator for row numbers (formatting)
let cards = [
  {id:1, front: "Front String A", back: "Back String A"},
  {id:2, front: "Front String B", back: "Back String B"},
  {id:3, front: "Front String C", back: "Back String C"},
]

function flipCard(id){
    let back = cards[(id-1)].back
    document.getElementById(id).innerHTML = `${back}`;
}


document.getElementById('newCardButton').onclick = () => {
  let id = cardIndex.length + 1;
  cardIndex.push(id)

  if (id % 3 == 0) {
    let row = document.createElement('row');
    document.body.appendChild(row);
    let div = document.createElement('div');
    div.setAttribute('class', 'four columns');
    div.setAttribute('id', id);

    let front = document.createElement('form')
    front.setAttribute('placeholder', "New Card Front")
    
    row.appendChild(div);
  }

  let div = document.createElement('div');
    div.setAttribute('class', 'four columns');
    div.setAttribute('id', id);

  let front = document.createElement('text-input')
    front.setAttribute('placeholder', "New Card Front")
    
  document.body.appendChild(div);
  div.appendChild(front);
}

