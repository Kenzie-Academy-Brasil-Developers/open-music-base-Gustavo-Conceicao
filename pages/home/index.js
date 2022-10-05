import { products } from "./productsData.js"
/* Desenvolva sua lógica aqui ... */
function createHome (data) {       
        const li = document.createElement("li")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const divArtist = document.createElement("div")
        const nameArtist = document.createElement("p")
        const year = document.createElement("span")
        const musicName = document.createElement("h2")
        const divPrice = document.createElement("div")
        const price = document.createElement("span")
        const btnBuy = document.createElement("button")

        li.classList.add("liResult")
        figure.classList.add("figure")
        img.classList.add("img")
        divArtist.classList = "divArtist"
        nameArtist.classList.add("nameArtist")
        year.classList.add("yearMusic")
        musicName.classList.add("nameMusic")
        divPrice.classList = "divPrice"
        price.classList.add("price")
        btnBuy.classList.add("btnBuy")
        
        img.src = data.img
        nameArtist.innerText = data.band
        year.innerText = data.year
        musicName.innerText = data.title
        price.innerText = `R$ ${data.price}`
        btnBuy.innerText = "Comprar"
        
        figure.append(img)
        divArtist.append(nameArtist,year)
        divPrice.append(price,btnBuy)
        li.append(figure,divArtist,musicName,divPrice)
    
        return li
}

export function showMusic (data) {
    const ul = document.getElementById("ul")
    ul.innerHTML = ""
    data.forEach(elem => {
        const show = createHome(elem)
        ul.append(show)
    })
}
showMusic(products)
