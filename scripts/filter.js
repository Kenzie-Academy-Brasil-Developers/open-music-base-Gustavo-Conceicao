import { products } from "../pages/home/productsData.js"
import { categories } from "../pages/home/productsData.js"
import { showMusic } from "../pages/home/index.js"


function filterBtn (produto, categoria) {
    const btnFilter = document.querySelectorAll(".btnSelection")

    btnFilter.forEach(btn => {
        btn.addEventListener("click", () =>{
            const btnText = btn.innerText
            const categorias = categoria.indexOf(btnText)

            if(btnText === "Todos"){
                showMusic(products)
            }else{
                const produtoFiltrado = produto.filter((filtrado) => filtrado.category === categorias)
                showMusic(produtoFiltrado)

            }
        })
    })
}

filterBtn(products,categories)


function filterPrice (products) {
    const inputRange = document.querySelector("#inputRange")
    const spanValue = document.querySelector("#valueInput")
    inputRange.addEventListener("change", () => {
        const filter = products.filter(product => product.price <= inputRange.value)
        spanValue.innerText = `R$ ${inputRange.value},00`   
        showMusic(filter)
    })
}
filterPrice(products)

function darkMode () {
    const imgMoon = document.getElementById("moon")
    const main = document.querySelector("main")
    imgMoon.addEventListener("click", () => {
        main.classList.toggle("modoDark")
        if(main.classList === "modoDark"){
            imgMoon.src = "../assets/img/sun.png"
        }
    })
}
darkMode()