export {CloseModal}
const formData = document.querySelector('.form');
//Слушатели которые отвечают за Открытие и Закрытие Модального Окна 
const ModalConDiv =  document.querySelector('.modal')
function OpenModalEdit() {
    const EditButton = document.querySelector('.Edit')
    EditButton.addEventListener('click', ()=>{
    ModalConDiv.classList.toggle('Modal')
    })
}
const buttonClose = document.querySelector('.ModalButtonCancel')
buttonClose.addEventListener('click', ()=>{
    ModalConDiv.classList.toggle('Modal')
})
OpenModalEdit()
CloseModal()