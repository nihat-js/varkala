let basket = [
  //   {
  //     id: 1,
  //     title: "Norwegg Chair",
  //     price: "$40.00",
  //     img: "./img/index-new-1.jpg",
  //     rating: "3",
  //   },
  //   {
  //     id: 4,
  //     title: "Norwegg Chair",
  //     price: "$40.00",
  //     img: "./img/index-new-2.jpg",
  //     rating: "3",
  //   },
  //   {
  //     id: 5,
  //     title: "Norwegg Chair",
  //     price: "$40.00",
  //     img: "./img/index-new-3.jpg",
  //     rating: "3",
  //   },
];
function loadBasket() {
  if ( JSON.parse(localStorage.getItem("basket")) !== null) {
    basket = JSON.parse(localStorage.getItem("basket"));
  }
  console.log("loaded", basket);
}

function updateBasket(item, count) {
  let isCountEqualToZero = false;

  let index = basket.findIndex((x) => x.id === item.id);

  if (index == -1) {
    basket.push({ ...item, count: 1 });
  } else {
    basket[index].count += count
    if (basket[index].count == 0){
        basket.splice(index,1)
    }
  }

  saveBasketToStorage()

  //   basket.forEach((b) => {
  //     if (b.id === item.id) {
  //       b.count += count;
  //       if (b.count <= 0) {
  //         isCountEqualToZero = true;
  //       }
  //     }
  //   });

  //   if (isCountEqualToZero) {
  //     basket = basket.filter((b) => b.id !== item.id);
  //   }

}

function saveBasketToStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

loadBasket();
