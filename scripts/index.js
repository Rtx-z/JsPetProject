const dataCard = [
  {
    title: "MrBeast",
    link: "https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA",
  },
  {
    title: "AdMe",
    link: "https://www.youtube.com/channel/UC1Un_IRr7Y0KGluv4p1Z7MA",
  },
  {
    title: "T-Series",
    link: "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
  },
  {
    title: "Marshmello",
    link: "https://www.youtube.com/channel/UCEdvpU2pFRCVqU6yIPyTpMQ",
  },
  {
    title: "T2X2",
    link: "https://www.youtube.com/channel/UCaMYqnXbEvPqV7vYuwrzf5w",
  },
  {
    title: "Dream",
    link: "https://www.youtube.com/channel/UCTkXRDQl0luXxVQrRQvWS6w",
  },
  {
    title: "Alan Walker",
    link: "https://www.youtube.com/channel/UCJrOtniJ0-NWz37R30urifQ",
  },
  {
    title: "NCS",
    link: "https://www.youtube.com/channel/UC_aEa8K-EOJ3D6gOs7HcyNg",
  },
  {
    title: "Marmok",
    link: "https://www.youtube.com/channel/UCf31Gf5nCU8J6eUlr7QSU0w",
  },
  {
    title: "Мир Наизнанку",
    link: "https://www.youtube.com/channel/UCdIp4tcWOGihEQKYxzSlFaQ",
  },
  {
    title: "Kuplinov ► Play",
    link: "https://www.youtube.com/channel/UCdKuE7a2QZeHPhDntXVZ91w",
  },
  {
    title: "Дима Маслиников",
    link: "https://www.youtube.com/channel/UCwipTluVS2mjuhPtx2WU7eQ",
  },
  {
    title: "ItsMamix ",
    link: "https://www.youtube.com/channel/UCSF6ewY9LS8GnbphwvnZpUg",
  },
  {
    title: "Поззи",
    link: "https://www.youtube.com/channel/UCuZeiI5pdpgqDojXZujoYgg",
  },
  {
    title: "Wylsacom",
    link: "https://www.youtube.com/channel/UCt7sv-NKh44rHAEb-qCCxvA",
  },
  {
    title: "fixEye",
    link: "https://www.youtube.com/channel/UCCiGUQiWcz3lKev49TX8-Ew",
  },
  {
    title: "FixPlay",
    link: "https://www.youtube.com/channel/UCZ8fSWsoySnv1voIfi6mqwQ",
  },
  {
    title: "bog (x balter: dubtendo)",
    link: "https://www.youtube.com/watch?v=rXKIJHCTvMw",
  },
];
const page = document.querySelector("body");
const cardTemplate = page.querySelector("#template_card").content;
const cardPlace = page.querySelector(".cardList");
function createTemplate(obj) {
  const cardClone = cardTemplate.querySelector(".cardItem").cloneNode(true);

  cardClone.querySelector(".name_YT").textContent = obj.title;
  cardClone.querySelector(".link_YT").href.textContent = obj.link;

  return cardPlace.appendChild(cardClone);
}
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

  buttonDeleteAll.addEventListener("click", () => {
    cardItem.remove();
  });
}
function CreateNewCard() {
  const inputLink = page.querySelector(".input_link").value;
  const inputname = page.querySelector(".input_name").value;
  const newCard = {
    link: inputLink,
    title: inputname,
  };
  createTemplate(newCard);
  page.querySelector(".input_link").value = "";
  page.querySelector(".input_name").value = "";
}
function CratedCard(){
    const addItemButton = page.querySelector(".add_item");
    addItemButton.addEventListener("click", (CreateNewCard))
}
dataCard.forEach((item) => {
  const completeCard = createTemplate(item);
  cardDelete(completeCard);
  cardliked(completeCard);
  deleteAllCards(completeCard);
  CratedCard(completeCard)
});