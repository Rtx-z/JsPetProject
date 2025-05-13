//экспортируем и делаем вынос Глобальных константв начало
export {page,cardTemplate,cardPlace,createTemplate,cardDelete, cardliked, deleteAllCards,CreateNewCard};
const page = document.querySelector("body");
const cardTemplate = page.querySelector("#template_card").content;
const cardPlace = page.querySelector(".cardList");

//копируем карточки по Шаблону 
function createTemplate(obj) {
  const cardClone = cardTemplate.querySelector(".cardItem").cloneNode(true);

  cardClone.querySelector(".name_YT").textContent = obj.title;
  cardClone.querySelector(".link_YT").href = obj.link;
  return cardPlace.appendChild(cardClone);
}

//Код позволяющий добовлять свои карточки
function CreateNewCard() {
  const inputLink = page.querySelector(".input_link").value.href;
  const inputname = page.querySelector(".input_name").value;
  const newCardData = {
    link: inputLink,
    title: inputname,
  };

  const newCard = createTemplate(newCardData);
  cardDelete(newCard);
  cardliked(newCard);

  page.querySelector(".input_link").value = "";
  page.querySelector(".input_name").value = "";
}

//слушатели отвечающие за функциональность карточек
function cardDelete(cardItem) {
  const buttonDelete = cardItem.querySelector(".card_buttonDelete");

  buttonDelete.addEventListener("click", () => {
    cardItem.remove();
  });
}
function cardliked(cardItem) {
  const buttonLiked = cardItem.querySelector(".card_buttonLike");

  buttonLiked.addEventListener("click", () => {
    cardItem.classList.toggle("card_buttonLiked");
  });
}
function deleteAllCards(cardItem) {
  const buttonDeleteAll = page.querySelector(".button_deleteALL");

  buttonDeleteAll.addEventListener("click", (event) => {
    event.preventDefault()
    cardItem.remove();
  });
}

