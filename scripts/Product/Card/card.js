function card() {
  let card = [];
  let basketCount = 0;

  return {
    addCard: (item) => {
      let isProductInBasket = card.find((product) => product.id === item.id);
      if (!isProductInBasket) {
        card.push({
          ...item,
          quantity: 1,
        });
        basketCount++;
      } else {
        isProductInBasket.quantity++;
      }

      localStorage.setItem("basket", JSON.stringify(card));
    },
    removeCard: (item) => {
      const newCard = card.filter((product) => product.id !== item.id);
      card = newCard;
      localStorage.setItem("basket", JSON.stringify(card));
    },
    updateQuantity: (item) => {
      let isProductInBasket = card.find((product) => product.id === item.id);
      if (!isProductInBasket) {
        basketCount--;
      } else {
        isProductInBasket.quantity > 1 && isProductInBasket.quantity--;
      }
    },
    getCount: () => {
      return basketCount;
    },
    getCard: () => {
      return card;
    },
  };
}

const { addCard } = card();
console.log(addCard);
