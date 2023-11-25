const btnDivs = document.getElementById("btns");
const productDivs = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categoryTitle = document.getElementById("category");

const btnColors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
];

let products = [];
let baskets = []

const getProducts = async () => {
  const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/");
  const data = await res.json();
  // console.log(data);
  products = data;
  category();
  displayProducts(products)
};

getProducts();
// console.log(products);
//? yukarısı boş gelir async den dolayı

const category = () => {
  console.log(products);

  // const categoryArr=products.map(e=>e.category);
  // console.log(categoryArr);

  //+ 1.yol
  //     let categoryArr = ["all"]
  //     products.forEach(item=>{
  //         if (!categoryArr.includes(item.category)) {
  //             categoryArr.push(item.category)
  //         }
  //     })
  // console.log(categoryArr);

  //! 2.yol
  // const categoryArr=products.reduce((acc,item)=>{
  //     if (!acc.includes(item.category)) {
  //         acc.push(item.category)
  //     }
  //     return acc
  // },["all"])
  // console.log(categoryArr);

  //$ 3.yol
  const categoryArr = [
    "all",
    ...new Set(products.map((item) => item.category)),
  ];
  console.log(categoryArr);
  //$ set yapısı kullanarak tekrarları ortadan kaldırdık

  categoryArr.forEach((category, i) => {
    const btn = document.createElement("button");
    btn.innerText = category.toUpperCase();
    btn.classList.add("btn", `btn-${btnColors[i]}`);
    btnDivs.appendChild(btn);
  });
};

function displayProducts(arr) {
    productDivs.innerHTML = "";
    arr.forEach((item) => {
      const { id, title, description, price, image } = item;
      const productDiv = document.createElement("div");
      productDiv.classList.add("col");
      productDiv.setAttribute("id", id);
      productDiv.innerHTML = `
          <div class="card">
              <img src="${image}" class="p-2" height="250px" alt="...">
              <div class="card-body">
        <h5 class="card-title line-clamp-1">${title}</h5>
                <p class="card-text line-clamp-2">${description}</p>
              </div>
              <div class="card-footer w-100 fw-bold d-flex justify-content-between gap-3">
              <span>Price:</span><span>${price} $</span>
                  
              </div>
              <div class="card-footer w-100 d-flex justify-content-center gap-3">
                  <button class="btn btn-danger">
                  Sepete Ekle
                  </button>
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  See Details
                  </button>
              </div>
            </div>
          `;
         productDiv.addEventListener("click", (e)=>{
            if (e.target.classList.contains("btn-danger")){
                addToCard(item)
            }
         })
          productDivs.appendChild(productDiv)
    });
  }

// category: "Electronics";
// category_id: 1;
// description: "İster ders için video düzenleyin ister çalışma arkadaşlarınızla iş planı hazırlayın veya online alışveriş yaparken bir taraftan da dizinizi izleyin, M2 çip yaptığınız her şeye daha fazla hız katıyor. Üstelik tüm gün süren pil ömrü sayesinde güç adaptörünü yanınıza almanıza gerek kalmıyor.";
// id: 1;
// image: "https://m.media-amazon.com/images/I/51mgtjVbhgL._AC_UF1000,1000_QL80_.jpg";
// price: 1375.99;
// quantity: 1;
// title: "Macbook Air M2";

function addToCard(product){
    console.log(product);
    if (!baskets.every((e) => e.title !== product.title)) {
        baskets= baskets.map(item=>{
          return  item.id===product.id ? {...item,quantity:item.quantity+1}: item
          //! bu yapı modifiye işlemi için çok kullanılır.
        })
    } else {
        baskets.push(product)
    }
    console.log(baskets);
}

btnDivs.addEventListener("click", (e)=>{
    if (e.target.classList.contains("btn")) {
        const selectedCategory = e.target.innerText.toLowerCase()
        categoryTitle.innerText=selectedCategory.toUpperCase()
        const filteredProducts= selectedCategory=="all" ? products : products.filter(item=>item.category.toLowerCase()===selectedCategory)
        displayProducts(filteredProducts)
    }
})