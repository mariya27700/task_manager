const dropZones = document.querySelectorAll('.todo, .inprogress, .done');

dropZones.forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
  });

  zone.addEventListener('drop', e => {
    const dragged = document.querySelector('.dragging');
    if (dragged) zone.appendChild(dragged);
  });
});

function activateDragListeners() {
  const cards = document.querySelectorAll('p[draggable="true"]');
  cards.forEach(card => {
    card.addEventListener('dragstart', () => {
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });
  });
}

let todo = [];

function add() {
  const input = document.querySelector('.inp');
  const t = input.value;
  

  todo.push(t);
  input.value = "";

  let sHtml = "";
  for (let i = 0; i < todo.length; i++) {
    sHtml += `<label draggable="true">${todo[i]} 
      <button onclick="this.parentElement.remove()">🗑</button>
    </label>`;
  }

  document.querySelector(".add").innerHTML = sHtml;
  activateDragListeners(); 
}