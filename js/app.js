let basket = [];

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

  showBasket()
  saveBasketToStorage()


}

function removeFromBasket(item){
  console.log("Removing")
  basket =basket.filter(x => x.id !== item.id )
  showBasket()
  saveBasketToStorage()
}

function saveBasketToStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function showBasket(){
  document.querySelector(".basket-modal").style.display = "block"
  document.querySelector(".basket-modal .body").innerHTML = ""
  
  basket.forEach(b => {

    let itemDiv = document.createElement("div")
    let leftDiv = document.createElement("div")
    let middleDiv = document.createElement("div")
    let rightDiv = document.createElement("div")
    let mainImg = document.createElement("img")
    let title = document.createElement('h3')
    let quantity = document.createElement('p')
    let price = document.createElement('p')
    let removeFromImg = document.createElement('img')

    itemDiv.classList.add("item")
    leftDiv.classList.add("left")
    middleDiv.classList.add("middle")
    rightDiv.classList.add("right")

    removeFromImg.src = "./img/close.svg"
    removeFromImg.onclick = () =>  removeFromBasket(b)

    mainImg.src = b.img
    title.innerText = b.title
    quantity.innerText = "Quantity : " + b.count;
    price.innerText = "Price : " +  (b.price * b.count)

    leftDiv.append(mainImg)
    middleDiv.append(title,quantity,price)
    rightDiv.append(removeFromImg)

    itemDiv.append(leftDiv,middleDiv,rightDiv)
    
    // let html = `
    //   <div class='item'>
    //     <div class="left">
    //     <img src="${b.img}" />
    //     </div>
    //     <div class="middle">
    //       <h3 class="title">${b.title}</h3>
    //       <p class="quantity"> Quantity :   ${b.count} </p>
    //       <p class="general-price"> ${b.count} * ${b.price} </p>
    //     </div>
    //     <div class="right">
    //       <img src="./img/close.svg" onclick=${showBasket('id')}  /> 
    //     </div>
    //   </div>
    // `
    document.querySelector('.basket-modal .body').append(itemDiv) 
    
  })

  let total = basket.reduce((a,b) => a + b.count * b.price , 0 )

  document.querySelector(".basket-modal .total .number").innerText = total + " $"

}

function hideBasket(){
  document.querySelector('.basket-modal').style.display = "none"
}


loadBasket();
