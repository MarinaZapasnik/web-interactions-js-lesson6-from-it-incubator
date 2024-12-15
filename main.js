
//document.addEventListener("DOMContentLoaded", function(){clf запихуть код, чтобы сначала грузилась вся страница, потом скрипт})

//const header = window.document.body.children[0] // поиск элементов внутри документа

//const header = document.getElementById('course-title') // ищем элемент по ID 


//const header = document.querySelector('h1') // поиск по тегу !только первый элемент на странице

//const header = document.querySelector('.title') // по классу

// header.innerText = "Мы тебя взломали!"
// console.log(header);


const listItems = document.querySelectorAll('.item') 
// получаем объект, который называется псевдомассив или коллекция
console.log(listItems);

const array = [...listItems] // переделали в массив
console.log(array);

const colorButton = document.getElementById("color-button")
colorButton.onclick = function () {
    console.log('Click!');
}

const li = document.createElement('li') // создаем элемент li, в переменную li
li.classList.add('item')  // добавляем класс элементу li с названием "item"
li.innerText = "Новый элемент" // вкладываем текст в элемент li
const ol = document.querySelector('ol.list') // ищем элемент ol по селектору класса "list" и присваиваеи это значение переменной ol

ol.append(li) // добавляем в список ol элемент li на страницу

colorButton.addEventListener('click', function(){
    const items = document.querySelectorAll('.item')
    
        
    for (let i = 0; i < items.length; i++) {
    // Генерация случайного цвета
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const randomColor = `rgb(${red}, ${green}, ${blue})`

    items[i].style.color = randomColor 
    }
})