const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cosmos.jpg") {
        myImage.setAttribute("src", "images/lime.jpeg")
    } else {
        myImage.setAttribute("src", "images/cosmos.jpg");
    }
}
    
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Enter your name.")
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I am cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name")
    myHeading.textContent = `I am cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}