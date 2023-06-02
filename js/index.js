const data = [
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-1.jpg",
    rating: "3",
  },
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-2.jpg",
    rating: "3",
  },
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-3.jpg",
    rating: "3",
  },
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-4.jpg",
    rating: "3",
  },
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-5.jpg",
    rating: "3",
  },
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-6.jpg",
    rating: "3",
  },
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-7.jpg",
    rating: "3",
  },
  {
    title: "Norwegg Chair",
    price: "$40.00",
    img: "./img/index-new-8.jpg",
    rating: "3",
  },
];

data.forEach((d) => {
  let html = `
        <div class="item">
            <div class="top">
                <img src="${d.img}" alt="">
                <div class="extra">
                    <button> Add To CART </button>
                    <div> 
                    <img src="./img/heart.svg" alt="">  
                    <img src="./img/expand.svg" alt="">  
                    </div>
                </div>
            </div>
            <div class="body">
                <h3 class="title"> ${d.title}  </h3>
                <div> 
                    <p class="price"> ${d.price} </p>  
                    <p class="rating"> ${d.rating} </p>
                </div>
            </div>
        </div>
    `;

  document.querySelector("section.new .box").innerHTML += html;
});
