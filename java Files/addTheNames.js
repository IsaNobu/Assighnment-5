const selectButtons = document.querySelectorAll('#button button');
const addedSection = document.getElementById('added-section');
let selectedPlayers = [];

selectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playerName = button.parentElement.querySelector('h1').textContent;

    if (selectedPlayers.length < 5) {
      if (!selectedPlayers.includes(playerName)) {
        selectedPlayers.push(playerName);
        addedSection.innerHTML += `<li class="item text-white text-2xl mt-5 ml-6">${playerName}</li>`;
      }
    } else {
      alert('You can only select a maximum of 5 players!');
    }
  });
});

const items = document.getElementsByClassName('item');

for(const item of items){
  item.addEventListener('click', function (event){
    event.target.parentNode.removeChild(event.target)
    console.log('hello')
  })
}