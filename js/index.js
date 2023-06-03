const data = [
  {
    id : 1,
    title: "Norwegg Chair",
    price: 120.00,
    img: "./img/index-new-1.jpg",
    rating: "3",
  },
  {
    id : 2,
    title: "Norwegg Chair",
    price: 30.00,
    img: "./img/index-new-2.jpg",
    rating: "4",
  },
  {
    id : 3,
    title: "Norwegg Chair",
    price: 92,
    img: "./img/index-new-3.jpg",
    rating: "5",
  },
  {
    id : 4,
    title: "Norwegg Chair",
    price: 40.00,
    img: "./img/index-new-4.jpg",
    rating: "4",
  },
  {
    id : 5,
    title: "Norwegg Chair",
    price: 40.00,
    img: "./img/index-new-5.jpg",
    rating: "3",
  },
  {
    id : 6,
    title: "Norwegg Chair",
    price: 10.00,
    img: "./img/index-new-6.jpg",
    rating: "3",
  },
  {
    id : 7,
    title: "Norwegg Chair",
    price: 13.00,
    img: "./img/index-new-7.jpg",
    rating: "2",
  },
  {
    id : 8,
    title: "Norwegg Chair",
    price: 20.00,
    img: "./img/index-new-8.jpg",
    rating: "3",
  },
];

data.forEach((d) => {

  function addToBasket(){
    console.log('addin...')
    updateBasket(d)
  }


  let itemDiv = document.createElement('div')
  let topDiv = document.createElement('div')
  let bodyDiv = document.createElement('div')
  let extraDiv = document.createElement('div')
  let extraRightDiv = document.createElement('div')
  let bodyInfoDiv = document.createElement('div')
  let title = document.createElement('h3')
  let price = document.createElement('p')
  let rating = document.createElement('div')

  rating.classList.add('rating')
  for (let i=1; i<= d.rating;i++){
    let img = document.createElement('img')
    img.src = "./img/star-filled.svg"
    img.classList.add('star-filled')
    rating.append(img)
  }

  price.innerText = "$ " +  d.price  
  price.classList.add('price')

  let heartImg = document.createElement('img')
  heartImg.src ="./img/heart.svg"

  let expandImg = document.createElement('img')
  expandImg.src = "./img/expand.svg"

  let mainImg = document.createElement('img')
  mainImg.src = d.img

  itemDiv.classList.add('item')
  topDiv.classList.add('top')
  bodyDiv.classList.add('body')

  title.innerText = d.title


  let btn = document.createElement('button')
  btn.innerText = "Add To Cart"
  btn.onclick =  () => updateBasket(d,1)
  btn.classList.add('btn-add')


  extraDiv.classList.add('extra')
  extraRightDiv.classList.add('extra-right')

  extraRightDiv.append(heartImg,expandImg)
  extraDiv.append(btn,extraRightDiv)

  topDiv.append(mainImg,extraDiv)

  bodyInfoDiv.append(price,rating)

  bodyDiv.append(title,bodyInfoDiv)

  itemDiv.append(topDiv,bodyDiv)



  document.querySelector("section.new .box").append(itemDiv)
});

