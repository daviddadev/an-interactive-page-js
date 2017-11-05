// alert('All systems green!'); // For testing src.
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const mySubHeading = document.getElementById('mySubHeading');
const myList = document.getElementsByTagName('li');
const evens = document.querySelectorAll('li:nth-child(even)');

// const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = 'purple';
}
// --------------------------------
// for (let i = 0; i < errorNotPurple.length; i++) {
//     errorNotPurple[i].style.color = 'red';
// }


for (let i = 0; i < evens.length; i++) {
    evens[i].style.backgroundColor = 'lightgray';
}

myHeading.addEventListener('click', () => {
    myHeading.style.color = 'coral';
});

// Keep disale //
// myButton.addEventListener('click', () => {
// 	myHeading.style.color = 'teal';
// });

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
    // Clears the change heading field box.
    myTextInput.value = '';
});

mySubButton.addEventListener('click', () => {
    mySubHeading.style.color = 'darkred';
})


