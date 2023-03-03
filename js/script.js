let doc = document // Приравниваем наш документ к переменной 'doc'

let button_white = doc.querySelector('.button-white') // Создаем пременную 'button_white' и присваеваем ему класс 'button-white'
let button_space = doc.querySelector('.button-space') // Создаем пременную 'button_space' и присваеваем ему класс 'button-space'
let img = doc.querySelector('.img') // Создаем пременную 'img' и присваеваем ей тег 'img'
let img1 = './img/mac_img.png' // Создаем пременную 'img1' и присваеваем ему картинки './img/mac_img.png'
let img2 = './img/mac_img_2.png' // Создаем пременную 'img1' и присваеваем ему картинки './img/mac_img_2.png'
let span = doc.querySelector('.right-side-color') // Создаем пременную 'span' и присваеваем ему класс 'right-side-color'
let cena = doc.querySelector('.right-side-price') // Создаем пременную 'span' и присваеваем ему класс 'right-side-price'
let storage_512 = doc.querySelectorAll('.button-storage')[0] // Создаем пременную 'storage_512' и присваеваем ему класс 'button-storage' и выбираем первый элемент
let storage_1 = doc.querySelectorAll('.button-storage')[1] // Создаем пременную 'storage_1' и присваеваем ему класс 'button-storage' и выбираем второй элемент
let storage_2 = doc.querySelectorAll('.button-storage')[2] // Создаем пременную 'storage_2' и присваеваем ему класс 'button-storage' и выбираем третий элемент
let storage_4 = doc.querySelectorAll('.button-storage')[3] // Создаем пременную 'storage_4' и присваеваем ему класс 'button-storage' и выбираем четвертый элемент
let price = doc.querySelector('.right-side-price')
let modal_window = doc.querySelector('.wrap-okno')
let cross = doc.querySelector('.button-cross')
let body = doc.body

let modal = () => {
    modal_window.classList.toggle('not_active')
    body.style.overflow = 'hidden'
}
let modal_2 = () => {
    modal_window.classList.toggle('not_active')
    body.style.overflow = 'auto'
}
price.addEventListener('click', modal)
cross.addEventListener('click', modal_2)


let change_img_white = () => {
    img.src = img1
    span.textContent = 'White'
    button_white.classList.add('price-color')
    button_space.classList.remove('price-color')
    button_white.classList.remove('active-price')
}
let change_img_space = () => {
    img.src = img2
    span.textContent = 'Space Grey'
    button_space.classList.add('price-color')
    button_white.classList.remove('price-color')
    button_white.classList.remove('active-price')
}
let price_1 = () => {
    cena.textContent = '$1,999'
    storage_512.classList.add('storage-color')
    storage_512.classList.remove('active-storage')
    storage_1.classList.remove('storage-color')
    storage_2.classList.remove('storage-color')
    storage_4.classList.remove('storage-color')
}

let price_2 = () => {
    cena.textContent = '$2,199'
    storage_1.classList.add('storage-color')
    storage_512.classList.remove('active-storage')
    storage_512.classList.remove('storage-color')
    storage_2.classList.remove('storage-color')
    storage_4.classList.remove('storage-color')
}

let price_3 = () => {
    cena.textContent = '$2,599'
    storage_2.classList.add('storage-color')
    storage_512.classList.remove('active-storage')
    storage_512.classList.remove('storage-color')
    storage_1.classList.remove('storage-color')
    storage_4.classList.remove('storage-color')
}

let price_4 = () => {
    cena.textContent = '$3,199'
    storage_4.classList.add('storage-color')
    storage_512.classList.remove('active-storage')
    storage_512.classList.remove('storage-color')
    storage_1.classList.remove('storage-color')
    storage_2.classList.remove('storage-color')
}

let button_menu = doc.querySelector('.burger-menu')
let navigation_menu = doc.querySelector('.active-menu')
let top_line = doc.querySelector('.top-line')
let center_line = doc.querySelector('.center-line')
let bottom_line = doc.querySelector('.bottom-line')

button_menu.addEventListener('click', function () {
    navigation_menu.classList.toggle('active')
    top_line.classList.toggle('rotate-top')
    center_line.classList.toggle('delete-center')
    bottom_line.classList.toggle('rotate-bottom')
})

button_white.addEventListener('click', change_img_white)
button_space.addEventListener('click', change_img_space)
storage_512.addEventListener('click', price_1)
storage_1.addEventListener('click', price_2)
storage_2.addEventListener('click', price_3)
storage_4.addEventListener('click', price_4)
