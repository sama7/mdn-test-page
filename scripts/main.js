const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/lighthouse-poster.JPG') {
        myImage.setAttribute('src', 'images/lighthouse-poster2.jpg');
    } else {
        myImage.setAttribute('src', 'images/lighthouse-poster.JPG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `The Lighthouse is a great film, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `The Lighthouse is a great film, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}
