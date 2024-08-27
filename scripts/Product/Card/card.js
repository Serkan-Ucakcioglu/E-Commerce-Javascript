function card() {
  let card = JSON.parse(localStorage.getItem("basket")) || [];
  let basketCount = parseInt(localStorage.getItem("basketCount"), 10) || 0;
  console.log(basketCount, "basketcount");

  return {
    addCard: (item) => {
      let isProductInBasket = card.find((product) => product.id === item.id);
      if (!isProductInBasket) {
        card.push({
          ...item,
          quantity: 1,
        });
        basketCount += 1;
      } else {
        isProductInBasket.quantity++;
      }

      localStorage.setItem("basket", JSON.stringify(card));
      localStorage.setItem("basketCount", basketCount);
    },
    removeCard: (item) => {
      const newCard = card.filter((product) => product.id !== item.id);
      card = newCard;
      basketCount -= 1;
      localStorage.setItem("basket", JSON.stringify(card));
      localStorage.setItem("basketCount", basketCount);
    },
    updateQuantity: (item) => {
      let isProductInBasket = card.find((product) => product.id === item.id);
      if (!isProductInBasket) {
        basketCount -= 1;
      } else {
        isProductInBasket.quantity > 1 && isProductInBasket.quantity--;
      }
      localStorage.setItem("basketCount", basketCount);
      localStorage.setItem("basket", JSON.stringify(card));
    },
    getCount: () => basketCount,
    getCard: () => card,
  };
}

export const { addCard, removeCard, updateQuantity, getCount, getCard } =
  card();
