var nameElement = document.querySelector("#name");
var numberElement = document.querySelector("#number");
var ul = document.querySelector(".list");
var button = document.querySelector('button');

const phoneBook = PhoneBook();

function getValues() {
    const name = nameElement.value;
    const number = numberElement.value;
    phoneBook.addNumber(name, number)

    var list = ''
    const usersList = phoneBook.getNumbers();

    usersList.forEach((user) => {
        list += `<li> ${user.name} ${user.number} </li>`
    })
    
    ul.innerHTML = list;
    
}

button.addEventListener('click', getValues)
