function card() {
  let card = [];

  return {
    addCard: (item) => {
      let isProductInBasket = card.find((product) => product.id === item.id);
      if (!isProductInBasket) {
        return card.push({
          ...item,
          quantity: 1,
        });
      }
      isProductInBasket.quantity++;
      localStorage.setItem("basket", JSON.stringify(card));
    },
  };
}
