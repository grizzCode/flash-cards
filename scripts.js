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
  div.innerHTML = "This is a new card."
 
  
  row.appendChild(div);

}

