// Test line
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
// const removeItemButton = document.querySelector('button.removeItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'steelblue';

function attachListItemButtons(li) {
	let up = document.createElement('button');
	up.className = 'up'
	up.textContent = 'Up';
	li.appendChild(up);

	let down = document.createElement('button');
	down.className = 'down'
	down.textContent = 'Down';
	li.appendChild(down);

	let remove = document.createElement('button');
	remove.className = 'remove'
	remove.textContent = 'Remove';
	li.appendChild(remove);
}

// Li items grown and shrink.
// listDiv.addEventListener('mouseover', (event) => {
// 	if (event.target.tagName === 'LI') { // tagName returns in CAPS!
// 		event.target.textContent = event.target.textContent.toUpperCase();
// 	}
// }); // to lower case on mouseout.
// listDiv.addEventListener('mouseout', (event) => {
// 	if (event.target.tagName === 'LI') {//tagName returns in UPPERCASE
// 		event.target.textContent = event.target.textContent.toLowerCase();
// 	}
// });

// adds button to stock list
for (let i = 0; i < lis.length; i++) {
	attachListItemButtons(lis[i]);
}

// Button removes from the list.
listUl.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		if (event.target.className === 'remove') {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
		if (event.target.className === 'up') {
			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling;
			let ul = li.parentNode;
			if (prevLi) { //stops 1st item to move down.
				ul.insertBefore(li, prevLi);
			}
		}
		if (event.target.className === 'down') {
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling;
			let ul = li.parentNode;
			if (nextLi) { //stops 1st item to move down.
				ul.insertBefore(nextLi, li);
			}
		}
	}
});

// Logs input keys.
document.addEventListener('click', (event) => {
    console.log(event.target)
});

// Hides the main section of the page.
toggleList.addEventListener('click', () => {
    if (listDiv.style.display === 'none') {
        toggleList.textContent = 'Hide List';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show List'
        listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ":";
    // Clears list description iput 
    descriptionInput.value = '';
});

// Adds to the Item list.
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; // needed by appendChild
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    // clears add item fiedl box.
    addItemInput.value = '';
});

// removeItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0]; // needed by appendChild
//     let li = document.querySelector('li:last-child');
//     ul.removeChild(li);
// });