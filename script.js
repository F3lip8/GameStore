
window.onscroll = () =>{
    if(window.scrollY > 70){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}




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




// MODAL //

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0];


btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}












// Lista dos produtos / Mecanismo de pesquisa //

const product = [
    {
        id: 0,
        image: 'Imagens/amongus.jpeg',
        title: 'Among Us',
        link: 'btn3'
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
        var{image, title, link} = item;
        return(
            `<a id="${link}" class="card">
                    <div class="image">
                        <img src=${image} alt="">
                    </div>
                    <div class="content">
                        <h3>${title}</h3>
                    </div>
                </a>`
        )
    }).join('')


    var modal3 = document.getElementById("myModal3");
    var btn3 = document.getElementById("btn3");
    var span3 = document.getElementsByClassName("close3")[0];

    btn3.onclick = function() {
        modal3.style.display = "block";
        searchSection.classList.remove('active');
    }

    span3.onclick = function() {
        modal3.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target === modal3) {
        modal3.style.display = "none";
        }
    }

    
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

let carrinho = document.querySelector('.cart-container')

document.querySelector('#cart-btn').onclick = () => {
    carrinho.classList.toggle('active');
}

document.querySelector('#close-cart-btn').onclick = () => {
    carrinho.classList.remove('active');
}







// Verificaçao //
if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready()
}

var totalAmount = "0,00"

// Events //
function ready() {
    const removeProductButton = document.getElementsByClassName("remove-btn");
    console.log(removeProductButton)
    for (var i = 0; i < removeProductButton.length; i++) {
        removeProductButton[i].addEventListener("click", RemoveProduct)   
    }

    const quantidyInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantidyInputs.length; i++){
        quantidyInputs[i].addEventListener("change", CheckIfInputIsNull)
    }

    const addToCartButton = document.getElementsByClassName("add-btn")
    for (var i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].addEventListener("click", addProductToCart)
    }

    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)
}

function makePurchase() {
    if (totalAmount === "0,00") {
        alert("Seu Carrinho está vazio!")
    } else {
        alert(
            `
            Obrigado pela sua compra!
            Valor do pedido: R$${totalAmount}
            Volte sempre :)
            `
        )
    }

    document.querySelector(".cart-table tbody").innerHTML = ""
    updateTotal()
}

function CheckIfInputIsNull(event) {
    if (event.target.value === '0') {
        event.target.parentElement.parentElement.remove()
    }
    updateTotal()
}



 // Função que remove produto //
function RemoveProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
}




// Atualização do preço total //
function updateTotal() {
    totalAmount = 0
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
    for (var i = 0; i < productsCartName.length; i++){
        if (productsCartName[i].innerHTML === productTitle) {
            productsCartName[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
            return
        }
    }

    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")

    newCartProduct.innerHTML = 
    `<td>
        <div class="cart-product-image">
            <img src="${productImage}" alt="${productTitle}">
        </div>
        <strong class="cart-product-title">${productTitle}</strong>
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
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", CheckIfInputIsNull)
    newCartProduct.getElementsByClassName("remove-btn")[0].addEventListener("click", RemoveProduct)
}