
// Carrosseis dos jogos fisicos //

var swiper = new Swiper(".consoles-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },

});

window.onscroll = () =>{
    if(window.scrollY > 70){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}





// Carroseis Dos jogos virtuais //

var swiper = new Swiper(".virtuais-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".virtuais2-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});






// Slider Promoções  //

var swiper = new Swiper(".home-slider", {
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





// Lista dos produtos / Mecanismo de pesquisa //

const product = [
    {
        id: 0,
        image: 'Imagens/amongus.jpeg',
        title: 'Among Us',
    },
    {
        id: 1,
        image: 'Imagens/raft.jpg',
        title: 'Raft',
    },  
    {
        id: 2,
        image: 'Imagens/the-sims.jpeg',
        title: 'The sims'
    },
    {
        id: 3,
        image: 'Imagens/mario-wonder-banner.avif',
        title: 'Super Mario Bros Wonder',
        link: 'page-1.html'
    },
]

let searchSection = document.querySelector('.search-section');


const categories = [...new Set(product.map((item) => {return item}))]
document.getElementById('search-box').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return(item.title.toLowerCase().includes(searchData))
    })
    displayItem(filteredData)
});

const showSearch = function(){
    searchSection.classList.toggle('active');
}

document.getElementById('search-box').addEventListener('input', showSearch);



const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var{link, image, title} = item;
        return(
            `<a href="${link}" class="card">
                    <div class="image">
                        <img src=${image} alt="">
                    </div>
                    <div class="content">
                        <h3>${title}</h3>
                    </div>
                </a>`
        )
    }).join('')
};
displayItem(categories);






// Ativação do Login Form //

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}



// Ativação do Carrinho //

let carrinho = document.querySelector('.cart-container');

document.querySelector('#cart-btn').onclick = () => {
    carrinho.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}






// Verificaçao //
if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready()
}

updateTotal()


// Events //
function ready() {
    const removeProductButton = document.getElementsByClassName("remove-btn");
    console.log(removeProductButton)
    for (var i = 0; i < removeProductButton.length; i++) {
        removeProductButton[i].addEventListener("click", RemoveProduct)   
    }

    const quantidyInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantidyInputs.length; i++){
        quantidyInputs[i].addEventListener("change", updateTotal)
    }

    const addToCartButton = document.getElementsByClassName("add-btn")
    for (var i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].addEventListener("click", addProductToCart)
    }
}




 // Função que remove produto //
function RemoveProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
}




// Atualização do preço total //
function updateTotal() {
    let totalAmount = 0
    const cartProducts = document.getElementsByClassName("cart-product");

    for (var i = 0; i < cartProducts.length; i++) { 
        //console.log(cartProducts[i])
        const productPrice = cartProducts[i].getElementsByClassName("price")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantidy = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
    

        totalAmount += (productPrice * productQuantidy)
    }

    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount;
}



// Adicionar produto //
function addProductToCart(event) {
    const button = event.target
    const productInfo = button.parentElement.parentElement
    const productImage = productInfo.getElementsByClassName("img")[0].src
    const productTitle = productInfo.getElementsByClassName("name")[0].innerHTML
    const productPrice = productInfo.getElementsByClassName("price")[0].innerHTML

    const productsCartName = document.getElementsByClassName("cart-product-title")
    for (var i; i < productsCartName.length; i++){
        console.log(productsCartName[i].innerHTML)
        if (productsCartName[i].innerHTML == productTitle) {
            console.log("ENTROU")
            productsCartName[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
        }
    }

    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")

    newCartProduct.innerHTML = 
    `<td>
        <div class="cart-product-image">
            <img src="${productImage}" alt="${productTitle}">
        </div>
        <strong>${productTitle}</strong>
    </td>
    <td>
        <div class="price">${productPrice}</div>
    </td>
    <td class="qtd">
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button class="btn-cart remove-btn">Remover</button>
    </td>`

    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)

    updateTotal()
}