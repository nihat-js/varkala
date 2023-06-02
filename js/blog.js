const data = [
  {
    img: "./img/blog-blogs-1.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-2.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-3.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-4.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-5.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-6.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-7.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-8.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
  {
    img: "./img/blog-blogs-9.jpg",
    title: "Pellentesque habitant morbi",
    date: "January 16, 2019",
  },
];

data.forEach((d) => {
  let html = `
    <div class="item">
        <img src=${d.img} alt="">
        <h3 class="title"> ${d.title} </h3>
        <div class="info">
            <p class="tag"> FASHION AND STYLE </p>
            <p class="date"> ${d.date} </p>
        </div>
    </div>
    `;
    document.querySelector(".blog-blogs .box").innerHTML+=html
});
