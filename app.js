const btnDivs = document.getElementById("btns");
const productDivs = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categoryTitle = document.getElementById("category");

let products = []

const getProducts=async ()=>{
    const res= await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
    const data= await res.json()
    // console.log(data);
    products=data
    category()
}

getProducts()
// console.log(products);
//? yukarısı boş gelir async den dolayı

const category=()=>{
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

    //+ 2.yol 
    const categoryArr=products.reduce((acc,item)=>{
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    },["all"])
    console.log(categoryArr);
}