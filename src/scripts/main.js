//Импорт модулей
import {page,cardTemplate,cardPlace,createTemplate,cardDelete,cardliked,deleteAllCards,CreateNewCard} from './dom.js';
import {dataCard} from './data.js';

//Создание новой карточки
const addItemButton = page.querySelector(".add_item");
addItemButton.addEventListener("click", (event) => {
CreateNewCard();
event.preventDefault()
})

dataCard.forEach((item) => {
const completeCard = createTemplate(item);
cardDelete(completeCard);
cardliked(completeCard);
deleteAllCards(completeCard);
});
//Слушатели которые отвечают за Открытие и Закрытие Модального Окна 
const editButton = document.querySelectorAll('.Edit')
const ArrayEditButton = Array.from(editButton)
console.log(ArrayEditButton)
const ModalConDiv =  document.querySelector('.modal')
editButton.forEach(button =>{
    button.addEventListener('click', (event)=>{
        event.preventDefault()
        ModalConDiv.classList.toggle('Modal')
    })
})
const buttonClose = document.querySelector('.ModalButtonCancel')
buttonClose.addEventListener('click', (event)=>{
    event.preventDefault()
    ModalConDiv.classList.toggle('Modal')
})

const ModalButtonAccept = document.getElementById('ModalButtonAccept')
ModalButtonAccept.addEventListener('click', (event)=>{
    ModalConDiv.classList.toggle('Modal')
const input_link = document.getElementById("input_link").value;
const Text_input = document.getElementById("Text_input").value;
 event.preventDefault()
 document.getElementById("input_link").value = ''
 document.getElementById("Text_input").value = ''
})